const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teguhharits.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/_offline', '/en/_offline', '/jp/_offline', '/sitemap-content.xml'],
  transform: async (config, path) => {
    const primaryPages = ['/', '/about', '/skillset', '/experience', '/services', '/portfolio', '/case-study', '/blog', '/contact'];
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : primaryPages.includes(path) ? 0.8 : 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap-content.xml`],
  },
};
