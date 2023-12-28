// layout.tsx

import React from 'react';
import Footer from './footer';
import Header from './header';
import { NextSeo } from 'next-seo';
import { DefaultSeoProps } from 'next-seo';
import { generateSeoConfig } from 'next-seo.config';
import { ToastContainer } from 'react-toastify';

type Props = {
  children: React.ReactNode;
  seoConfig?: DefaultSeoProps; // Optional SEO configuration
};

const Layout = ({ children, seoConfig }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <link rel="stylesheet" type="text/css" href="/print.css" media="print" />
      <main className="grow overflow-visible">
        <NextSeo {...seoConfig} />
        {children}
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  )
}

export default Layout
