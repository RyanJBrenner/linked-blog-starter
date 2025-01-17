import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getLinksMapping } from '../lib/api'
import { markdownToHtml } from '../lib/markdownToHtml'
import type PostType from '../interfaces/post'
import path from 'path'
import PostSingle from '../components/blog/post-single'
import Layout from '../components/misc/layout'
import { NextSeo } from 'next-seo'

type Items = {
  title: string,
  excerpt: string,
}

type Props = {
  post: PostType;
  slug: string;
  backlinks: { [k: string]: { title: string; excerpt: string; content: string } };
};


export default function Post({ post, backlinks }: Props) {
  const router = useRouter()
  const description = post.excerpt.slice(0, 300)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <Layout>
          <NextSeo
            title={post.title}
            description={description}
            openGraph={{
              title: post.title,
              description,
              type: 'article',
              images: [
                {
                  url: post.ogImage?.url || "/public/assets/logo/Logo.png",
                  width: post.ogImage?.url ? null : 512,
                  height: post.ogImage?.url ? null : 512,
                  type: null,
                },
              ],
            }}
            
          />
          <PostSingle
            title={post.title}
            content={post.content}
            date={post.date}
            author={post.author}
            backlinks={backlinks}
          />
        </Layout>
      )}
    </>
  )
}

type Params = {
  params: {
    slug: string[]
    backlinks: string[]
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = path.join(...params.slug);
  const post = getPostBySlug(slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ]);
  const content = await markdownToHtml(post.content || '', slug);
  const linkMapping = getLinksMapping(); // Make sure getLinksMapping is working correctly
  const backlinks = Object.keys(linkMapping).filter(
    (k) => linkMapping[k].includes(post.slug) && k !== post.slug
  );
  const backlinkNodes = Object.fromEntries(
    await Promise.all(
      backlinks.map(async (slug) => {
        const backlinkPost = getPostBySlug(slug, ['title', 'excerpt']);
        return [slug, backlinkPost];
      })
    )
  );

  return {
    props: {
      post: {
        ...post,
        content,
      },
      backlinks: backlinkNodes,
    },
  };
}


export async function getStaticPaths() {
  try {
    const posts = getAllPosts(['slug']);
    const paths = posts.map((post) => ({ params: { slug: post.slug.split(path.sep) } }));
    return { paths, fallback: false };
  } catch (error) {
    console.error("Error in getStaticPaths:", error);
    throw error;
  }
}



