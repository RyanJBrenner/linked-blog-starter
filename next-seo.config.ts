import { DefaultSeoProps } from "next-seo";

const description = "Discover the wiki of wellness."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | Linked Blog Starter",
  defaultTitle: "Linked Blog Starter | My Second Brain",
  description: 'Discover the wiki of wellness by Yudae. A complete open-source repository of health & wellness information. Free today and free forever, just click to get started.',

  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'Wiki of Wellness',
    description: 'Discover the wiki of wellness by Yudae. A complete open-source repository of health & wellness information. Free today and free forever, just click to get started.',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/favicon.ico"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;
