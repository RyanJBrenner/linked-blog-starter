import Link from "next/link";
import NotePreview from "./note-preview";

type Props = {
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
      content?: string;
    };
  };
};

const Backlinks = ({ backlinks }: Props) => {
  return (
    <>
      {Object.keys(backlinks).map((slug) => {
        const post = backlinks[slug];
        return (
          <Link
            key={post.title}
            href={`/posts/${encodeURIComponent(post.title)}`}
            as={slug}
            passHref
            legacyBehavior
          >
            <a className="col-span-1">
              <NotePreview
                title={post.title}
                excerpt={post.excerpt}
                content={post.content || ""} // Use an empty string if content is undefined
              />
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default Backlinks;

