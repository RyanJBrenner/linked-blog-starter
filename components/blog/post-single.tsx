import React from 'react';
import Author from '../../interfaces/author';
import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks,
}: Props) {
  return (
    <section className='w-full bg-gray-900'>
      <div className="w-full mx-auto">
        <div className="pt-32 pb-12 sm:pb-1 md:pt-40 flex justify-center bg-white/95 backdrop-blur-xl">

          <div className="w-full min-h-screen lg:pb-20 sm:pb-0 max-w-5xl">

            <article className="pt-10 mx-10 lg:px-10 lg:max-w-5xl">

              {/* Article header */}
              <header className="mb-3 shirnk-1">
                {/* Title */}
                <h1 className="max-w-[600px] text-left font-bold text-6xl tracking-tighter mb-4 md:mb-0 text-gray-900 article-header">
                  {title}
                </h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-left" data-sticky-container>

                {/* Main content */}
                <div className="py-4 max-w-5xl">

                  {/* Article meta */}
                  {(author || date) && (
                    <>
                      <PostMeta author={author} date={date}/>
                      <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6 col-start-1" />
                    </>
                  )}

                  {/* Article body */}
                  <PostBody content={content}/>

                </div>

                {/* Sidebar */}
                <hr className="my-10 border border-dashed lg:block mx-4"/>
                <aside className="lg:absolute lg:top-[200px] lg:w-64 lg:h-full lg:right-10 lg:rounded-xl lg:shadow-md lg:bottom-0 relative md:mb-10 m-0 h-full md:w-full shrink-0 shadow-lg px-8 py-8 bg-gradient-to-r from-blue-900/80 to-blue-800/80 backdrop-blur-lg rounded-xl sm:rounded-b-lg">
                  <div>
                    <h4 className="text-sm font-reg leading-snug tracking-tight mb-4 text-blue-200">Related Articles</h4>
                    <div className="grid grid-cols-1 justify-center items-center sm:justify-center sm:items-start sm:grid-flow-row sm:grid-template sm:grid-rows-2 md:grid-cols-flex lg:grid-cols-1 gap-4">
                      {
                        (Object.keys(backlinks).length > 0) && (
                            <Backlinks backlinks={backlinks} />
                        )
                      }
                    </div>
                  </div>
                </aside>

              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PostSingle;

