type Props = {
  title: string;
  excerpt?: string;
  content: string;
};

const NotePreview = ({ title, content, excerpt }: Props) => {
  return (
    <span className="note-preview block justify-center items-center col-span-full min-w-full bg-gradient-to-br from-blue-900/60 to-transparent rounded shadow-lg p-5 backdrop-blur-md cursor-pointer text-sm hover:border-transparent">
      <span className="block text-lg text-white font-bold leading-snug tracking-tight truncate mb-1">
        {title}
      </span>
      <span className="block text-sm font-normal text-gray-100 -webkit-box-orient-horizontal">
        <span className="sm:-webkit-line-clamp-2 line-clamp-3">
          <span className="block text-sm font-normal text-gray-100">
            {content}
          </span>
          <span className="block text-sm font-normal text-gray-100">
            {excerpt}
          </span>
        </span>
      </span>
    </span>
  );
};

export default NotePreview;


