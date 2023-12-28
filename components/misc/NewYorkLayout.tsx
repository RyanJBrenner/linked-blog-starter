import React from "react";
import Link from "next/link";

export function FileCard({ folder, file }) {
  const fileLink = `/${encodeURIComponent(folder)}/${encodeURIComponent(file.slug)}`;

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid">
          <div className="rounded-xl bg-slate-100/90 overflow-hidden shadow-lg flex flex-col justify-between">
            <h3 className="text-2xl font-bold p-4">{file.title}</h3>
            <p className="p-4">{file.excerpt}</p>
            <div className="p-4">
              <Link legacyBehavior href={fileLink} passHref>
                <a>
                  <button className="text-sm w-full text-center rounded shadow-md hover:shadow-sm bottom-0">
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
