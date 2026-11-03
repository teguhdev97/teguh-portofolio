module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://teguhdev.com',
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://teguhdev.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://teguhdev.com',
      hreflang: 'id',
    },
      {
      href: 'https://teguhdev.com/jp',
      hreflang: 'jp',
    },
  ],
};
