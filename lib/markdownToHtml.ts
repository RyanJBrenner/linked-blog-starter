import {unified} from 'unified'
import {remark} from 'remark'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeRewrite from 'rehype-rewrite';
import rehypeStringify from 'rehype-stringify'
import { getLinksMapping, getPostBySlug, getSlugFromHref } from './api'
import strip from 'strip-markdown'
import {Element} from 'hast-util-select'


export async function markdownToHtml(markdown: string, currSlug: string) {
  // remove `.md` from links
  markdown = markdown.replaceAll(/(\[[^\[\]]+\]\([^\(\)]+)(\.md)(\))/g, "$1$3");
  
  // get mapping of current links
  const links = getLinksMapping()[currSlug] as string[]
  const linkNodeMapping = new Map<string, Element>();
  for (const l of links) {
    const post = getPostBySlug(l, ['title', 'content']);
    const node = await createNoteNode(post.title, post.content)
    linkNodeMapping[l] = node
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeRewrite, {
      selector: 'a',
      rewrite: async (node) => rewriteLinkNodes(node, linkNodeMapping, currSlug)
    })
    .use(rehypeStringify)
    .process(markdown)
  let htmlStr = file.toString()
  return htmlStr;
}

export async function getMDExcerpt(markdown: string, length: number = 300) {
  const file = await remark()
    .use(strip)
    .process(markdown)
  return file.toString().slice(0, length);
}

export async function createNoteNode(title: string, content: string) {
  const mdContentStr = await getMDExcerpt(content);
  return {
    type: 'element',
    tagName: 'span',
    properties: { className: 'note-preview'},
    children: [
      {
        type: 'element',
        tagName: 'span',
        properties: { className: 'note-preview-title' },
        children: [
          {type: 'text', value: title}
        ],
      },
      {
        type: 'element',
        tagName: 'span',
        properties: { className: 'note-preview-content' },
        children: [
          {type: 'text', value: mdContentStr}
        ],
      },
    ]
  } as Element
}

function rewriteLinkNodes (node, linkNodeMapping: Map<string, any>, currSlug) {
  if (node.type === 'element' && node.tagName === 'a') {
    const slug = getSlugFromHref(currSlug, node.properties.href)
    const noteCardNode = linkNodeMapping[slug]
    if (noteCardNode) {
      const anchorNode = {...node}
      anchorNode.properties.className = 'internal-link'
      node.tagName = 'span'
      node.properties = { className: 'internal-link-container' }
      node.children = [
        anchorNode,
        noteCardNode
      ]
    }
  }
}
