type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-w-[400px] rounded shadow-lg p-5 bg-blue-100 cursor-pointer text-sm hover:bg-blue-300 hover:border-transparent">
      <span className="block text-lg font-bold leading-snug tracking-tight truncate mb-1">{title}</span>
      <span className="block text-sm font-normal text-gray-600 whitespace-pre-line max-h-[150px] truncate">{content}</span>
    </span>
  )
}

export default NotePreview