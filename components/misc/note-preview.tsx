type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block justify-center items-center col-span-full min-w-[100%] min-h-[150px] bg-gradient-to-br from-blue-900/60 to-transparent rounded shadow-lg p-5 backdrop-blur-md cursor-pointer text-sm hover:border-transparent">
        <span className="block text-lg text-white font-bold leading-snug tracking-tight truncate mb-1">{title}</span>
        <span className="block text-sm font-normal text-gray-100 whitespace-pre-line max-h-[60px] truncate overflow-ellipse">{content}</span>
    </span>
  )
}

export default NotePreview