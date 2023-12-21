import Newsletter from "./Newsletter"
import PledgeOfWellness from "./PledgeOfWellness"
import PreviewLink from "./preview-link"

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-900 md:p-8 lg:p-10 dark:bg-gray-800">
      

      <div className=" dark:bg-gray-900 mx-10 grid items-center justify-center">
        <PledgeOfWellness />
      </div>
      
      <div className=" dark:bg-gray-900 mx-10">
        <Newsletter />
      </div>
      
      <div className="mx-auto mt-40 max-w-xl text-center">
        <p className="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 200+ studies and documents designed for better health.</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <a href="#" className="hover:underline">Yudae Wellness</a>. All Rights Reserved.</span>
      </div>

  </footer>
  )
}

export default Footer