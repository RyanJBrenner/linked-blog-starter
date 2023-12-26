import Link from "next/link";
import NotePreview from "./note-preview";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res => res.json())

type Props = {
  href: string
  children?: React.ReactNode
}

const PreviewLink = ({ href, children }: Props) => {
  const { data } = useSWR(`/api/post-preview/${href}`, fetcher)
  return (
    <span className="internal-link-container">
      <Link legacyBehavior as={href} href="/[...slug]" className="internal-link"><a>{children}</a></Link>
      {data && (<NotePreview title={data.title} content={data.content} excerpt={""}/>)}
    </span>
  );
}

export default PreviewLink;