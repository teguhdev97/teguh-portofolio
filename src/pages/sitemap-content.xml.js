import { getContent } from "@/lib/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
  const [posts, projects] = await Promise.all([
    getContent("blog"),
    getContent("portfolio"),
  ]);
  const entries = [
    ...posts
      .filter((post) => post.status === "published")
      .map((post) => ({ path: `/blog/${encodeURIComponent(post.slug)}`, updated: post.updated_at || post.publishedAt })),
    ...projects.flatMap((project) => [
      { path: `/portfolio/${encodeURIComponent(project.slug)}`, updated: project.updated_at },
      ...(project.isCaseStudy === false ? [] : [{ path: `/case-study/${encodeURIComponent(project.slug)}`, updated: project.updated_at }]),
    ]),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(({ path, updated }) => `<url><loc>${siteUrl}${path}</loc>${updated ? `<lastmod>${new Date(updated).toISOString()}</lastmod>` : ""}</url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(body);
  res.end();
  return { props: {} };
};

export default Sitemap;
