import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { BiArrowBack, BiCheck, BiCopy, BiTimeFive, BiUser } from "react-icons/bi";

import Container from "@/components/layouts/partials/Container";
import HtmlContent from "@/components/views/blog/HtmlContent";
import { getContent } from "@/lib/content";
import { localizePost } from "@/lib/blog";

const languageNames = { id: "Indonesia", en: "English", jp: "日本語" };
const languageCodes = { id: "id-ID", en: "en-US", jp: "ja-JP" };

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="fixed left-0 top-0 z-[100] h-1 bg-primary transition-[width]" style={{ width: `${progress}%` }} />;
};

const BlogDetail = ({ post }) => {
  const { locale } = useRouter();
  const [copied, setCopied] = useState(false);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";
  const localePrefix = locale === "id" ? "" : `/${locale}`;
  const url = `${siteUrl}${localePrefix}/blog/${post.slug}`;
  const canonical = post.hasTranslation ? url : `${siteUrl}/blog/${post.slug}`;
  const image = post.coverImage || `${siteUrl}/og-image.png`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [image],
    inLanguage: languageCodes[locale] || "id-ID",
    datePublished: post.publishedAt,
    dateModified: post.updated_at || post.publishedAt,
    author: { "@type": "Person", name: "Teguh Muhammad Harits", url: siteUrl },
    mainEntityOfPage: canonical,
  };
  const alternateLinks = (post.availableLocales || []).map((language) => ({
    rel: "alternate",
    hrefLang: language === "jp" ? "ja" : language,
    href: `${siteUrl}${language === "id" ? "" : `/${language}`}/blog/${post.slug}`,
  }));

  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <NextSeo
        title={`${post.title} - Teguh Muhammad Harits`}
        description={post.excerpt}
        canonical={canonical}
        noindex={!post.hasTranslation}
        additionalLinkTags={alternateLinks}
        openGraph={{
          type: "article",
          url: canonical,
          title: post.title,
          description: post.excerpt,
          images: [{ url: image, alt: post.title }],
          article: { publishedTime: post.publishedAt, modifiedTime: post.updated_at || post.publishedAt, tags: post.tags || [] },
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ReadingProgress />
      <Container data-aos="fade-up" sectionClass="mx-0">
        <article>
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-subtext transition hover:text-primary"><BiArrowBack size={17} /> Back to stories</Link>

          <header className="relative overflow-hidden rounded-[2.25rem] border border-stroke bg-slate-950 px-7 py-10 text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[.28em] text-orange-300">
                Journal · {languageNames[locale] || languageNames.id} · {new Date(post.publishedAt).getFullYear()}
              </p>
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                {(post.tags || []).map((tag) => <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">{tag}</span>)}
              </div>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-6xl">{post.title}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl">{post.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><BiUser size={16} /> Teguh Muhammad Harits</span>
                <span className="h-1 w-1 rounded-full bg-orange-400" />
                <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale, { dateStyle: "long" })}</time>
                <span className="inline-flex items-center gap-1"><BiTimeFive size={15} /> {post.readingTime || 1} min read</span>
              </div>
            </div>
          </header>

          {post.coverImage && (
            <div className="relative z-[1] mx-auto -mt-1 aspect-[16/8] max-w-5xl overflow-hidden rounded-b-[2rem] border-x border-b border-stroke shadow-[0_30px_80px_-40px_rgba(15,23,42,.65)]">
              <Image src={post.coverImage} alt={post.title} fill priority className="object-cover" sizes="100vw" />
            </div>
          )}

          {!post.coverImage && (
            <div className="relative z-[1] mx-auto -mt-1 flex min-h-[170px] max-w-5xl items-center justify-between overflow-hidden rounded-b-[2rem] border-x border-b border-stroke bg-gradient-to-r from-orange-100 via-rose-50 to-violet-100 px-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,.45)] dark:from-slate-800 dark:via-slate-900 dark:to-violet-950 sm:px-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.25em] text-primary">Teguh Harits Journal</p>
                <p className="mt-3 max-w-xl text-lg font-medium leading-relaxed text-title">Engineering notes, lessons learned, and ideas worth sharing.</p>
              </div>
              <span className="hidden text-7xl font-bold tracking-[-.08em] text-slate-900/5 dark:text-white/5 sm:block">TH</span>
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-5xl items-start gap-10 lg:grid-cols-[minmax(0,720px)_220px]">
            <HtmlContent html={post.content} />
            <aside className="space-y-6 lg:sticky lg:top-8">
              <div className="rounded-2xl border border-stroke bg-container p-5">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-subtext">Read in</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(post.availableLocales || []).map((language) => (
                    <Link key={language} href={`/blog/${post.slug}`} locale={language} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${locale === language ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "bg-background text-subtext hover:text-primary"}`}>
                      {languageNames[language]}
                    </Link>
                  ))}
                </div>
              </div>
              <button type="button" onClick={copyUrl} className="flex w-full items-center justify-center gap-2 rounded-2xl border border-stroke bg-container px-4 py-3 text-sm font-medium text-title transition hover:-translate-y-0.5 hover:shadow-lg">
                {copied ? <BiCheck size={17} className="text-emerald-500" /> : <BiCopy size={17} />}
                {copied ? "Link copied" : "Copy story link"}
              </button>
              <p className="text-xs leading-relaxed text-subtext">Original story published on teguhharits.com.</p>
            </aside>
          </div>
        </article>
      </Container>
    </>
  );
};

export default BlogDetail;

export const getServerSideProps = async ({ params, locale }) => {
  const [source] = await getContent("blog", params.slug);
  if (source?.status !== "published") return { notFound: true };
  return { props: { post: localizePost(source, locale) } };
};
