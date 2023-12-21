import { DefaultSeoProps } from "next-seo";

const description = "Discover the wiki of wellness."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  title: 'Wiki of Wellness',
  titleTemplate: "%s | Yudae",
  defaultTitle: "Wiki of Wellness | Yudae | Austin, TX",
  description: 'Discover the wiki of wellness by Yudae. A complete open-source repository of health & wellness information. Free today and free forever, just click to get started.',

  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: '%s | Yudae | Austin, TX',
    description: 'Discover the wiki of wellness by Yudae. A complete open-source repository of health & wellness information. Free today and free forever, just click to get started.',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/public/assets/logo/Logo.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/public/assets/logo/Logo.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/public/assets/logo/Logo.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/public/assets/logo/Logo.ico"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;
