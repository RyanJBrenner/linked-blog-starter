import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <PreviewLink href="/statically-generated">AI generated</PreviewLink> with Next.js.
          </h3>
          <div className="grid grid-col-1 lg:grid-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="#"
              className="mx-3 rounded-full bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/matthewwong525/linked-blog-starter`}
              className="mx-11 mt-3 font-thin hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer