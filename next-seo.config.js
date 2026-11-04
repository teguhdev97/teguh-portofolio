const metaDescription = 'Teguh Muhammad Harits is a Full-Stack Developer, specializes in building efficient, scalable web & apps with seamless user experiences. Let’s bring your vision to life!';
const metaImage = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://teguhharits.com'}/og-image.png`;

const getDefaultSEOConfig = (locale) => ({
  title: 'Teguh Muhammad Harits - Personal Website',
  defaultTitle: 'Teguh Muhammad Harits - Personal Website',
  description: metaDescription,
  openGraph: {
    title: 'Teguh Muhammad Harits - Personal Website',
    description: metaDescription,
    type: 'profile',
    siteName: 'Teguh Muhammad Harits',
    locale: locale === 'id' ? 'id_ID' : 'en_US',
    profile: {
      first_name: 'Teguh',
      last_name: 'Harits',
      username: 'Teguhharits',
    },
    images: [
      
      {
        url: metaImage,
        alt: 'Teguh Muhammad Harits - og:image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Teguh Muhammad Harits - og:image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Teguh Muhammad Harits - og:image',
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    handle: '@teguhdev',
    site: '@teguhdev',
    title: 'Teguh Muhammad Harits - Personal Website',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'keywords',
      content: 'programer, portfolio, web, developer, personal, design, Teguh Muhammad Harits, Teguh Muhammad Harits, developer, backend, fullstack, frontend, ui ux'
    },
    {
      name: 'author',
      content: 'Teguh Muhammad Harits',
    },
    {
      name: 'theme-color',
      content: '#222831',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'application-name',
      content: 'Teguh Muhammad Harits',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Teguh Muhammad Harits',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'msapplication-TileColor',
      content: '#bdcee9',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/light-16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/light-32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      href: '/favicon/light-48.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/light-180.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ]
});

export default getDefaultSEOConfig;
