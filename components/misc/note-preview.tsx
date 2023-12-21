type Props = {
  title: string
  content: string
}

const NotePreview = ({ title, content }: Props) => {
  return (
    <span className="note-preview block col-span-2 max-h-[250px] rounded shadow-lg p-5 backdrop-blur-lg cursor-pointer text-sm hover:border-transparent">
      <span className="block text-lg text-white font-bold leading-snug tracking-tight truncate mb-1">{title}</span>
      <span className="block text-sm font-normal text-gray-100 whitespace-pre-line max-h-[60px] truncate overflow-ellipse">{content}</span>
    </span>
  )
}

export default NotePreview