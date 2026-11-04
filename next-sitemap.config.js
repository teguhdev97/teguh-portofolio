const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teguhharits.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: `${siteUrl}/en`,
      hreflang: 'en',
    },
    {
      href: siteUrl,
      hreflang: 'id',
    },
      {
      href: `${siteUrl}/jp`,
      hreflang: 'jp',
    },
  ],
};
