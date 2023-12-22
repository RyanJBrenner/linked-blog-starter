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
      href: '/public/favicon/Favicon32x32_Blue.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/public/favicon/Favicon16x16_blue.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/public/favicon/Favicon192x192_Blue.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/public/favicon/Favicon512x512_Blue.png"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;
