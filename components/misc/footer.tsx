import Newsletter from "./Newsletter"
import PledgeOfWellness from "./PledgeOfWellness"
import PreviewLink from "./preview-link"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footer w-full p-4 bg-gradient-to-b from-gray-900 to-gray-900 backdrop-blur-lg md:p-8 lg:p-10 dark:bg-gray-800">

      <div className="mx-10 grid items-center justify-center">
        <PledgeOfWellness />
      </div>
      
      <div className="mx-10">
        <Newsletter />
      </div>
      
      <div className="mx-auto mt-40 max-w-xl text-center">
        <p className="my-6 text-gray-300 dark:text-gray-400">Open-source library of over 200+ case studies & resources designed for better health.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <Link href={"/common_md/home"} legacyBehavior>
                <a href={"/"} className="mr-4 hover:underline md:mr-6 text-gray-300">About</a>
            </Link>
            <Link href={"./common_md/mindset/mental-health"} legacyBehavior>
                <a href={"/"} className="mr-4 hover:underline md:mr-6 text-gray-300">Contact</a>
            </Link>
        </ul>
        <span className="text-sm text-gray-300 sm:text-center ">© 2023-2024 <a href="#" className="hover:underline">Yudae Wellness</a>. All Rights Reserved.</span>
      </div>

  </footer>
  )
}

export default Footer