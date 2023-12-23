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
      <div className="w-full bg-gray-900/2 z-2 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="mx-0 lg:max-w-none">

            <article className="pt-10 min-h-screen w-full mx-0 shadow-lg rounded bg-white/95 backdrop-blur-xl">

              {/* Article header */}
              <header className="mb-3 shirnk-1">
                {/* Title */}
                <h1 className="mx-10 sm:px-5 w-9/10 left-0 wrap-pretty text-left font-bold text-6xl tracking-tighter mb-4 text-gray-900 article-header">
                  {title}
                </h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>


                {/* Main content */}
                <div className="mx-10 sm:px-5 py-4" >

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
                <aside className="relative mt-10 md:mb-10 md:mr-10 m-0 max-h-max md:block lg:w-64 md:w-full shrink-0 shadow-lg px-4 py-4 bg-gradient-to-r from-blue-900/80 to-blue-800/80 backdrop-blur-lg rounded sm:rounded-b-lg top-0">
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
      <div className="absolute top-0 -z-10 -translate-x-2/3 blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c7c9cf] to-[#1d0eec] opacity-30"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} 
        />
      </div>
    </section>
  );
}

export default PostSingle;