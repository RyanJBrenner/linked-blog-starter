import React from 'react'
import Footer from './footer'
import Header from './header'
import { SpeedInsights } from "@vercel/speed-insights/react"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <SpeedInsights />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
