const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teguhharits.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/_offline', '/en/_offline', '/jp/_offline', '/sitemap-content.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap-content.xml`],
  },
};
