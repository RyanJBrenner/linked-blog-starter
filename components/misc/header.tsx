import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import Search from './search';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [top, setTop] = useState(true);
  const [searching, setSearching] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const router = useRouter(); // Use the useRouter hook to get the router object

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const toggleMobileNav = () => {
    setMobileNavVisible((prevVisible) => !prevVisible);
    setSearching(false); // Close search when opening mobile nav
  };

  return (
    <header className={`fixed w-full z-30 md:bg-gradient-to-r from-transparent to-transparent transition duration-300 ease-in-out ${!top && 'bg-gradient-to-r from-white/30 to-white/30 backdrop-blur-md shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button className="bg-blue-500 btn-sm flex justify-center items-center rounded-sm px-2 py-1">
            <NextLink legacyBehavior href="/" passHref>
              <a className="flex hover:underline" aria-label="Yudae Wellness Articles">
                <Image src="/logo/Logo.png" alt="Yudae Wellness Logo" width={66} height={37} className="shrink-0" />
              </a>
            </NextLink>
          </button>


          <nav className="header hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <div>
                <NextLink legacyBehavior href={`${router.basePath}/common_md/optimization`} passHref>
                  <a className="text-gray-900 hover:text-blue-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Health Optimization
                  </a>
                </NextLink>
              </div>
              <div>
                <NextLink legacyBehavior href={`${router.basePath}/common_md/movement`} passHref>
                  <a className="text-gray-900 hover:text-blue-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Exercise & Fitness
                  </a>
                </NextLink>
              </div>
              <div>
                <NextLink legacyBehavior href={`${router.basePath}/common_md/nutrition`} passHref>
                  <a className="text-gray-900 hover:text-blue-400 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Diet & Nutrition
                  </a>
                </NextLink>
              </div>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <button className="w-4 h-4 mx-8 my-4 border-black" aria-label="Search" onClick={() => setSearching(!searching)} disabled={searching}>
                  <svg className="w-4 h-4 fill-current text-gray-900" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </li>
              <li>
                <NextLink legacyBehavior href="https://docs.fleetingnotes.app/getting-started/download" passHref>
                  <a className="btn-md text-gray-200 bg-blue-500 hover:bg-blue-400 my-8">
                    <span>Shop</span>
                    <svg className="w-3 h-3 fill-current text-gray-200 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                    </svg>
                  </a>
                </NextLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger Menu Icon */}
          <div className="flex hide md:hidden">
            <button onClick={toggleMobileNav} className="hamburger false" aria-controls="mobile-nav" aria-expanded="false">
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-blue-500/80 hover:text-blue-500-80 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            <div>
              <nav id="mobile-nav hide" className={`absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white/30 backdrop-blur-lg ${mobileNavVisible ? 'block' : 'hidden'}`}>
                <ul className="px-5 py-2">
                  <li>
                    <NextLink legacyBehavior  href={`${router.basePath}/common_md/optimization`} passHref>
                      <a onClick={toggleMobileNav} className="text-gray-800 hover:text-gray-900 px-3 lg:px-5 py-4 flex items-center transition duration-150 ease-in-out">Health Optimization</a>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink legacyBehavior href={`${router.basePath}/common_md/movement`} passHref>
                      <a  onClick={toggleMobileNav} className="text-gray-800 hover:text-gray-900 px-3 lg:px-5 py-4 flex items-center transition duration-150 ease-in-out">Fitness & Exercise</a>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink legacyBehavior href={`${router.basePath}/common_md/nutrition`} passHref>
                      <a  onClick={toggleMobileNav} className="text-gray-800 hover:text-gray-900 px-3 lg:px-5 py-4 flex items-center transition duration-150 ease-in-out">Diet & Nutrition</a>
                    </NextLink>
                  </li>
                  <li>
                    {/* Update NextLink with href and passHref */}
                    <NextLink legacyBehavior href="https://docs.fleetingnotes.app/getting-started/download" passHref>
                      <a onClick={toggleMobileNav} className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 my-4 transition-all ease-in-out">
                        <span>Shop</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                        </svg>
                      </a>
                    </NextLink>
                  </li>
                  <li>
                    {/* Search button */}
                    <button className="btn-sm text-gray-200 bg-white hover:bg-gray-200 ml-3 my-4 flex items-center" aria-label="Search" onClick={() => setSearching(!searching)} disabled={searching}>
                      <span className="text-gray-900 mr-2">Search</span>
                      <svg className="w-3 h-3 fill-current text-gray-900" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Search */}
          <Search visible={searching} setVisible={setSearching}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
