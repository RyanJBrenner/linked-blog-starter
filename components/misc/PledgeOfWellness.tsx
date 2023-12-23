import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function PledgeOfWellness() {
    
    const [formData, setFormData] = useState({
        name: "",         // Change this from firstName
        last_name: "",    // Change this from lastName
        email: "",
      });
      
  
    const handleChange = (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.id]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
    
        const groupId = process.env.NEXT_PUBLIC_GROUP_ID;
    
        // Update the subscriber data structure based on your form fields
        const subscriberData = {
            email: formData.email,
            fields: {
            name: `${formData.name}`,
            last_name: `${formData.last_name}`,
            // Add other fields as needed
            },
            groups: [groupId],
        };
    
        console.log('Group ID:', groupId);
        console.log('Submitting form with data:', formData);
    
        try {
            const response = await axios.post(
                'https://connect.mailerlite.com/api/subscribers',
                subscriberData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-MailerLite-ApiDocs': 'true',
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_YOUR_EMAIL_TOKEN}`,
                    },
                }
            );
    
            console.log('MailerLite response:', response.data);
            // Add your success handling logic here
            toast.success('🦄 Form submitted successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } catch (error) {
            console.error('MailerLite error:', error.response ? error.response.data : error.message);
            // Add your error handling logic here
            toast.error("Form submission failed. Please try again.");
        };
    };
    

  return (
<div className="relative w-full isolate mt-20 py-16 sm:py-24 lg:py-32">
    <div className="max-w-3xl md:w-full px-3 lg:px-8 bg-gradient-to-tl from-blue-400 to-slate-100 rounded-xl shadow-xl focus:ring-1">
    <div className="py-8 px-4 mx-auto max-w-4/5 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-left">
            <h1 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">sign the 
                <div className="in-line bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">
                Pledge of Wellness
                </div>
            </h1>

            <form onSubmit={handleSubmit}>

            <div className="mx-auto mb-3 space-y-4 max-w-screen-sm flex-col sm:space-y-0">
                <p className="mb-2 text-left">By signing the Pledge of Wellness, I... </p>
                <div className="w-full flex-row">
                <div className="relative w-full">
                    <label htmlFor="name" className=" hidden mb-2 text-sm font-medium text-white dark:text-gray-300">
                    First name
                    </label>
                    <input className="block p-3 my-3 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-full border-b border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-900/80 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="First name" 
                    type="text" 
                    id="name" 
                    onChange={handleChange}  // Add this line
                    required={true} 
                    />
                </div>
                <div className="relative w-full">
                    <label htmlFor="last_name" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Last name
                    </label>
                    <input className="block p-3 my-3 mb-5 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-full border-b border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-900/80 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Last name" 
                    type="text" 
                    id="last_name" 
                    onChange={handleChange}  // Add this line
                    required={true} 
                    />
                </div>
                </div>
                <p className="mt-5 text-left">agree to partake in, and practice each of, the following wellness activities for the remainder of my life starting on [todays date]</p>
                <ul className="flex flex-wrap justify-start items-start text-gray-900 dark:text-white font-bold">
                    <li className="pledge-item my-5">
                        Engage in at least 30 minutes of activity each day of the week 
                    </li>
                    <li className="pledge-item my-5">
                        Actively pursure healthy & nurishing food as best I can afford
                    </li>
                    <li className="pledge-item my-5">
                        Spend a minimum of 2 minutes practicing meditation daily
                    </li>
                    <li className="pledge-item my-5">
                        Attend at least 1 community wellness event every week
                    </li>
                    <li className="pledge-item my-5">
                        Spend time writing 3-5 things I am greateful for every day 
                    </li>
                </ul>
                <p className="flex-pretty mb-5 justify-start">Because I am dedicated to my health and life goals, I give Yudae permission to hold me accountable via email at:</p>
                <div className="relative w-full">
                <label htmlFor="email" className="hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                </div>
                <input className="block p-3 my-5 pl-10 w-full text-sm text-gray-900 bg-transparent rounded-full border-b border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-900/80 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Enter your email" 
                    type="email" 
                    id="email" 
                    onChange={handleChange}  // Add this line
                    required={true} 
                />
                </div>
                <div>
                    <button
                        type="submit"
                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded border cursor-pointer bg-blue-700 border-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >Subscribe
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-900 newsletter-form-footer ">
                We care about the protection of your data. <br></br>
                <a href="#" 
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    By clicking "Subscribe" you agree to our Privacy Policy.
                </a>
            </div>
            </form>
        </div>
    </div>
</div>
</div>
)}
