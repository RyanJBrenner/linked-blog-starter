import Link from "next/link"

export default function CookiesBanner() {
  return (
    <div className="fixed bottom-0 w-full bg-blue-100 py-2 px-4 backdrop-blur-md bg-opacity-40 dark:shadow-lg">
      <div className="container flex justify-between items-center mx-auto">
        <div className="flex-1 pr-2">
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Cookies enhance experience.{"\n                                "}
            <Link className="underline text-blue-800 dark:text-blue-600" href="#">
              More.
            </Link>
          </p>
        </div>
        <button
          className="text-xs text-blue-700 border-blue-700 hover:bg-blue-200 rounded-xl px-3 py-1"
        >
          X
        </button>
      </div>
    </div>
  )
}