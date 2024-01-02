import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getFilesRecursively } from './modules/find-files-recusively.mjs'
import { getMDExcerpt } from './markdownToHtml'

const mdDir = path.join(process.cwd(), process.env.NEXT_PUBLIC_COMMON_MD_DIR)

export async function getPostsFolders() {
  try {
    const files = await fs.promises.readdir(mdDir);
    const folders = files.filter((file) => {
      const fullPath = path.join(mdDir, file);
      return fs.statSync(fullPath).isDirectory();
    });
    return folders;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}


export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md(?:#[^\)]*)?$/, '')
  const fullPath = path.join(mdDir, `${realSlug}.md`)
  const data = parseFileToObj(fullPath);

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

function parseFileToObj(pathToObj: string) {
  const fileContents = fs.readFileSync(pathToObj, 'utf8')
  const { data, content } = matter(fileContents)

  data['content'] = content

  // modify obj
  if (typeof data['excerpt'] === 'undefined') {
    data['excerpt'] = getMDExcerpt(content, 160);
  }
  if (typeof data['title'] === 'undefined') {
    data['title'] = decodeURI(path.basename(pathToObj, '.md'))
  }
  if (typeof data['date'] === 'object') {
    data['date'] = data['date']?.toISOString()
  } else if (typeof data['date'] !== 'undefined') {
    data['date'] = data['date'].toString()
  }
  return data
}

export function getAllPosts(fields: string[] = []) {
  let files = getFilesRecursively(mdDir, /\.md(?:#[^\)]*)?/);
  let posts = files
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getLinksMapping() {
  const linksMapping = new Map<string, string[]>();
  const postsMapping = new Map((getAllPosts(['slug', 'content'])).map(i => [i.slug, i.content]));
  const allSlugs = new Set(postsMapping.keys());
  postsMapping.forEach((content, slug) => {
    const mdLink = /\[[^\[\]]+\]\(([^\(\)]+)\)/g
    const matches = Array.from(content.matchAll(mdLink))
    const linkSlugs = []
    for (var m of matches) {
      const linkSlug = getSlugFromHref(slug, m[1])
      if (allSlugs.has(linkSlug)) {
        linkSlugs.push(linkSlug);
      }
    }
    linksMapping[slug] = linkSlugs
  });
  return linksMapping;
}

export function getSlugFromHref (currSlug: string, href: string) {
  return decodeURI(path.join(...currSlug.split(path.sep).slice(0, -1), href)).replace(/\.md(?:#[^\)]*)?$/, '')
}

export function updateMarkdownLinks(markdown: string, currSlug: string) {
  // remove `.md` from links
  markdown = markdown.replaceAll(/(\[[^\[\]]+\]\([^\(\)]+)(\.md(?:#[^\)]*)?)(\))/g, (match, m1, m2, m3) => {
    // Check if capturing groups are present
    if (typeof m1 !== 'undefined' && typeof m3 !== 'undefined') {
      return m1 + m3; // Replace with the desired logic for capturing groups
    }
    return match; // If capturing groups are not present, return the original match
  });

  // update image links
  markdown = markdown.replaceAll(/(\[[^\[\]]*\]\()([^\(\)]+)(\))/g, (m, m1, m2: string, m3) => {
    const slugDir = path.join(...currSlug.split(path.sep).slice(0, -1))
    let relLink = m2;
    if (!m2.startsWith(slugDir)) {
      relLink = path.join(slugDir, m2)
    }
    const relAssetDir = path.relative('./public', process.env.NEXT_PUBLIC_MD_ASSET_DIR)
    const fileSlugRel = decodeURI(path.join(mdDir, relLink))
    const fileSlugAbs = decodeURI(path.join(mdDir, m2))
    if (fs.existsSync(fileSlugRel)) {
      const imgPath = path.join(relAssetDir, relLink);
      return `${m1}/${imgPath}${m3}`
    } else if (fs.existsSync(fileSlugAbs)) {
      const imgPath = path.join(relAssetDir, m2);
      return `${m1}/${imgPath}${m3}`
    }
    return m;
  });

  return markdown;
}

