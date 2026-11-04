const siteUrl = 'https://teguhharits.com';
const metaImage = `${siteUrl}/og-image.png`;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const localizedMeta = {
  id: {
    title: 'Teguh Muhammad Harits | Full-Stack Developer Indonesia',
    description: 'Portofolio resmi Teguh Muhammad Harits, Full-Stack Developer Indonesia yang membangun aplikasi web modern, cepat, aman, dan mudah digunakan.',
  },
  en: {
    title: 'Teguh Muhammad Harits | Full-Stack Developer',
    description: 'The official portfolio of Teguh Muhammad Harits, a Full-Stack Developer building modern, fast, secure, and user-friendly web applications.',
  },
  jp: {
    title: 'Teguh Muhammad Harits | フルスタック開発者',
    description: 'モダンで高速、安全かつ使いやすいWebアプリケーションを開発するフルスタック開発者、Teguh Muhammad Haritsの公式ポートフォリオです。',
  },
};

const getDefaultSEOConfig = (locale = 'id') => {
  const meta = localizedMeta[locale] || localizedMeta.id;
  return ({
  title: meta.title,
  defaultTitle: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'profile',
    siteName: 'Teguh Muhammad Harits',
    url: siteUrl,
    locale: locale === 'id' ? 'id_ID' : locale === 'jp' ? 'ja_JP' : 'en_US',
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
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    ...(googleSiteVerification ? [{
      name: 'google-site-verification',
      content: googleSiteVerification,
    }] : []),
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
};

export default getDefaultSEOConfig;
