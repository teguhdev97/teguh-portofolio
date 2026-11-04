import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import BackToggle from "@/components/toggles/BackToggle";
import Container from "@/components/layouts/partials/Container";
import HtmlContent from "@/components/views/blog/HtmlContent";
import { getContent } from "@/lib/content";

const BlogDetail = ({ post }) => {
  const { locale } = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";
  const localePrefix = locale === "id" ? "" : `/${locale}`;
  const url = `${siteUrl}${localePrefix}/blog/${post.slug}`;
  const image = post.coverImage || `${siteUrl}/og-image.png`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.publishedAt,
    dateModified: post.updated_at || post.publishedAt,
    author: { "@type": "Person", name: "Teguh Muhammad Harits", url: siteUrl },
    mainEntityOfPage: url,
  };

  return (
    <>
      <NextSeo
        title={`${post.title} - Teguh Muhammad Harits`}
        description={post.excerpt}
        canonical={url}
        openGraph={{
          type: "article",
          url,
          title: post.title,
          description: post.excerpt,
          images: [{ url: image, alt: post.title }],
          article: { publishedTime: post.publishedAt, modifiedTime: post.updated_at || post.publishedAt, tags: post.tags || [] },
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BackToggle />
      <Container data-aos="fade-up">
        <article className="space-y-6">
          <header className="space-y-3">
            <div className="text-sm text-subtext flex flex-wrap gap-2">
              <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale, { dateStyle: "long" })}</time>
              <span>•</span><span>{post.readingTime || 1} min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-title">{post.title}</h1>
            <p className="text-subtext">{post.excerpt}</p>
          </header>
          {post.coverImage && (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-stroke">
              <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" sizes="100vw" />
            </div>
          )}
          <HtmlContent html={post.content} />
        </article>
      </Container>
    </>
  );
};

export default BlogDetail;

export const getServerSideProps = async ({ params }) => {
  const [post] = await getContent("blog", params.slug);
  return post?.status === "published" ? { props: { post } } : { notFound: true };
};
