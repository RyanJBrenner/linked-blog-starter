import Link from "next/link";
import NotePreview from "./note-preview";
import useSWR from 'swr';

const fetcher = (url: string | URL | Request) => fetch(url).then(res => res.json());

type Props = {
  href: string;
  children?: React.ReactNode;
};

const PreviewLink = ({ href, children }: Props) => {
  const { data, error } = useSWR(() => (typeof window !== 'undefined' ? `/api/post-preview/${href}` : null), fetcher);

  if (error) {
    console.error(`Error fetching data for ${href}:`, error);
    // Handle the error (e.g., display an error message)
  }

  return (
    <span className="internal-link-container">
      <Link legacyBehavior as={href} href="/[...slug]" className="internal-link">
        <a>{children}</a>
      </Link>
      {data && !error && (
        <NotePreview title={data.title} content={data.content} excerpt="" />
      )}
      {/* Add loading indicator if needed */}
      {!data && !error && <p>Loading...</p>}
    </span>
  );
};

export default PreviewLink;
