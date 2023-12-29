import React from "react";
import Link from "next/link";

export function FileCard({ folder, file }) {
  const fileLink = `/${encodeURIComponent(folder)}/${encodeURIComponent(file.slug)}`;

  return (
    <section className="w-full py-3">
      <div className="container px-2 md:px-2">
        <div className="grid">
          <div className="lg:min-h-80 md:min-h-80 md:mx-auto mx-8 w-auto md:w-full sm:min-h-64 p-6 md:p-8 rounded-xl bg-slate-200 overflow-hidden shadow-lg flex flex-col justify-between">
            <h3 className="text-2xl font-bold bg-clip-text4 my-4">{file.title}</h3>
            <p className="text-ellipsis line-clamp-4 my-4">{file.excerpt}</p>
            <div className="my-4">
              <Link legacyBehavior href={fileLink} passHref>
                <a>
                  <button className="text-sm w-full py-2 text-center rounded shadow-md hover:shadow-sm bg-gradient-to-tr from-blue-500/30 to-blue-300 bottom-0">
                    Read More
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
