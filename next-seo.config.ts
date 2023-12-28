// next-seo-config.ts

import { DefaultSeoProps } from "next-seo";

const defaultDescription = "Discover the wiki of wellness.";

export const generateSeoConfig = (options: {
  title: string;
  description?: string;
  image?: string;
}): DefaultSeoProps => {
  const { title, description = defaultDescription, image } = options;

  return {
    title: `${title} | Yudae | Austin, TX`,
    description,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      title: `${title} | Yudae | Austin, TX`,
      description,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/Favicon32x32_Blue.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/Favicon16x16_blue.png',
        sizes: '16x16'
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/Favicon192x192_Blue.png"
      },
      {
        rel: "shortcut icon",
        type: "image/png",
        href: "/favicon/Favicon512x512_Blue.png"
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest"
      }
    ]
  };
};

export default generateSeoConfig;
