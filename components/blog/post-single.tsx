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
  backlinks
}: Props) {
  return (
    <section className='bg-gray-900'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto lg:max-w-none">

            <article className="px-8 py-8 shadow-lg rounded-xl bg-white">

              {/* Article header */}
              <header className="max-w-4xl mx-auto mb-2 left-0 shirnk-1">
                {/* Title */}
                <h1 className="h1 w-50 text-left mb-4 ml-3 text-blue-400 text-5xl px-0 article-header">{title}</h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>


                {/* Main content */}
                <div className="px-4 py-4" >

                  {/* Article meta */}
                  {(author || date) && (
                    <>
                      <PostMeta author={author} date={date}/>
                      <hr className="w-16 h-px pt-px bg-gray-200 border-0 my-6" />
                    </>
                  )}

                  {/* Article body */}
                  <PostBody content={content}/>

                </div>

                {/* Sidebar */}
                <hr className="my-10 border border-dashed lg:block mx-4"/>
                <aside className="relative mt-10 md:block lg:w-64 md:ml-0 sm:ml-0 shrink-0 shadow-inner px-4 py-4 rounded-lg left-0">
                  <div>
                    <h4 className="text-sm font-reg leading-snug tracking-tight mb-4 text-slate-400">Related Articles</h4>
                    <div className="grid grid-cols-1 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-1 gap-4">
                      {
                        (Object.keys(backlinks).length > 0) && (
                            <Backlinks backlinks={backlinks} />
                        )
                      }
                    </div>
                  </div>
                </aside>

              </div>

              {/* Article footer */}
            </article>

          </div>

        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
              <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#5f6db3] to-[#2218a8] opacity-30"
                  style={{
                      clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }} />
          </div>
      
    </section>
  );
}

export default PostSingle;