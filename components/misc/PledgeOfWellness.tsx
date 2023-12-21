import React from "react"

export default function PledgeOfWellness() {
    return(
    <div className="relative max-w-4xl isolate bg-gray-900 mt-20 py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl px-6 lg:px-8 bg-gradient-to-r from-blue-400 to-gray-200 rounded-xl shadow-xl focus:ring-1">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-left">
                <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">sign the 
                    <div className="in-line bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">
                    Pledge of Wellness
                    </div>
                </h1>
                <form action="#">

                <div className="mx-auto mb-3 space-y-4 max-w-screen-sm flex-col sm:space-y-0">
                    <p className="mb-2 text-left">By signing this pledge of wellness, I</p>
                    <div className="w-full flex-row">
                    <div className="relative w-full">
                        <label htmlFor="fname" className=" hidden mb-2 text-sm font-medium text-white dark:text-gray-300">
                        First name
                        </label>
                        <input className="block p-3 my-3 pl-10 w-full text-sm text-gray-200 bg-transparent rounded-full border-b border-gray-700 focus:ring-primary-300 focus:border-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="First name" 
                        type="text" 
                        id="fname" 
                        required={true} 
                        />
                    </div>
                    <div className="relative w-full">
                        <label htmlFor="lname" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Last name
                        </label>
                        <input className="block p-3 my-3 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-full border-b border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Last name" 
                        type="text" 
                        id="lname" 
                        required={true} 
                        />
                    </div>
                    </div>
                    <p className="mb-2 text-left">pledge to partake in, and practice each of, the following wellness activities for the remainder of my life starting on [todays date]</p>
                    <ul className="flex flex-wrap justify-start items-start mb-6 text-gray-900 dark:text-white">
                        <li className="pledge-item">
                            Engage in at least 30 minutes of activity each day of the week 
                        </li>
                        <li className="pledge-item">
                            Actively pursure healthy & nurishing food as best I can afford
                        </li>
                        <li className="pledge-item">
                            Spend a minimum of 2 minutes practicing meditation daily
                        </li>
                        <li className="pledge-item">
                            Attend at least 1 community wellness event every week
                        </li>
                        <li className="pledge-item">
                            Spend time writing 3-5 things I am greateful for every day 
                        </li>
                    </ul>
                    <p className="flex-pretty justify-start">Because I am dedicated to my health and life goals, I give Yudae permission to hold me accountable via email at:</p>
                    <div className="relative w-full">
                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input className="block p-3 my-3 pl-10 w-full text-sm text-gray-200 bg-transparent rounded-full border-b border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Enter your email" 
                        type="email" 
                        id="email" 
                        required={true} 
                    />
                    </div>
                    <div>
                    <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Subscribe
                    </button>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                    We care about the protection of your data.  
                    <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                     Read our Privacy Policy</a>.
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>

    )
}