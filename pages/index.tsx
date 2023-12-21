import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '../components/misc/footer';
import Header from '../components/misc/header';
import Layout from '../components/misc/layout';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterComponent from 'typewriter-effect';
import Search from '../components/misc/search';
import MaxWidthWrapper from '../components/misc/MaxWidthWrapper';
import { CheckCircle, HeartHandshake, Bot } from 'lucide-react';

const Home = () => {
  const [searching, setSearching] = useState(false);
  const router = useRouter();

  const perks = [
   { 
    name:'AI Search',
    Icon: Bot,
    description: "AI optimizes your search results for instant knowledge gratification."
  },
   { 
    name:'eduChecked',
    Icon: CheckCircle,
    description: "Regular updates & info maintenance by a pannel of certified educators."
  },
   { 
    name:'14% for Health',
    Icon: HeartHandshake,
    description: "We pledge 14% of annual sales to go towards community health progams."
  },
  ]

  useEffect(() => {
    // If the 'q' query parameter is not present, navigate to the index page
    if (!router.query.q) {
      router.push('/');
    }
  }, [router.query.q]);

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/csw7vwt.css"></link>

        {/* Metadata SEO for webpage */}
        <title>The Wiki of Wellness</title>
        <meta 
          name="description" 
          content="Discover mental health, fitness, and nutrition for weight loss and improved health." 
          key="desc" 
        />

        {/* Facebook optimized SEO */}
        <meta 
          property="og:title" 
          content="Discover the Wiki of Wellness" 
        />
        <meta
          property="og:description"
          content="Discover mental health, fitness, and nutrition for weight loss and improved health." 
        />
        <meta
          property="og:image"
          content="/public/logo.png"
        />
      </Head>

      {/* Search */}
      <Search visible={searching} setVisible={setSearching}/>


      <main className="grow bg-gradient-to-l from-blue-200 to-blue-400">

        <Header /> {/* Include the Header component */}
        <section className="relative">
        
        <div className="w-full mx-auto px-4 sm:px-6  ">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1 className="h1 text-6xl md:text-7xl font-extrabold leading-small mb-4" data-aos="zoom-y-out">
              Wiki for 
                <div className="in-line bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-300">
                  <TypewriterComponent
                    options={{
                      strings: [
                        "wellness.",
                        "fitness.",
                        "nutrition.",
                        "exercises.",
                        "mental health."
                      ],
                      autoStart: true,
                      loop: true
                    }}
                  /> 
                </div>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className=".p mt-6 mx-auto max-w-prose mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Discover in-depth knowledge about  
                  <span className="font-bold"> mental health, fitness, & nutrition.</span> 
                </p>
                
                
                <div className="w-full flex-col sm:flex-row gap-4 mt-6 sm:justify-center mb-4" data-aos="zoom-y-out" data-aos-delay="300">
                  
                {/* Search button */}
                  <div>
                    <button className="btn bg-white hover:bg-white/70 lg:w-2/3 mb-4 sm:w-auto" aria-label="Search" onClick={() => setSearching(!searching)} disabled={searching}>
                      <span className="text-gray-400 mr-2">Try searching "recipies" or "workout"</span>
                      <svg className="ml-2 w-3 h-3 fill-current text-gray-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                      </svg>
                    </button>
                  </div>
                
                  <div>
                    <Link className="btn text-white bg-blue-300 hover:bg-blue-400 lg:w-1/2 mb-4 sm:w-auto sm:mb-0" href={"/home"} passHref={true} >
                      What does Yudae mean?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center items-center mb-8 max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="450">

                  <section className='bg-transparent'>
                      <div className='grid mb-10 grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                        {perks.map((perk) => (
                          <div 
                          key={perk.name} 
                          className='flex items-center justfy-center text-center md:flex md:items-start md:text-left lg-block lg:text-center'>
                            <div className='md:flex-shrink-0 flex justify-center'>
                              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                                {<perk.Icon className='w-1/3 h-1/3' />}
                              </div>
                            </div>

                            <div className="ml-6 md:mt-0 lg:mt-6">
                              <h3 className="md:ml-0 text-based font-bold from-transparent text-gray-900 sm:text-left text-left">
                                {perk.name}
                              </h3>
                              <p className="mt-3 text-xs justify-center items-center text-gray-200 text-muted-foreground sm:text-left text-left">
                                {perk.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center my-10">
                      <button className="absolute flex top-full items-center transform -translate-y-1/2 bg-white rounded-full mt-10 group p-4 shadow-sm" aria-controls="modal">
                        <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-500 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2 22 6.477 22 12s-4.477 10-10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"></path>
                          <path d="M10 17l6-5-6-5z"></path>
                        </svg>
                        <span className="ml-3">sign the pledge of wellness</span>
                      </button>

                      </div>
                  </section>

                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>         
    </Layout>
  )
}

export default Home;