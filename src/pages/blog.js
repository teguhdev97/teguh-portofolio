import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useTranslations } from "next-intl";

import Container from "@/components/layouts/partials/Container"
import Blog from "@/components/views/blog/Blog"
import { localizePost } from "@/lib/blog"


const BlogPage = ({ posts }) => {
    
    const t = useTranslations('Blog');
    const { locale, pathname } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    const currentPageURL = `${SITE_URL}${lang}${pathname}`

    return (
        <>
            <NextSeo
                title={`${t('title')} - Teguh Muhammad Harits`}
                description={t('metaDesc')}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${pathname}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${pathname}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${pathname}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />
            <Container data-aos='fade-up'>
                <header className="relative mb-10 overflow-hidden rounded-[2rem] border border-stroke bg-slate-950 px-7 py-10 text-white shadow-2xl sm:px-12 sm:py-14">
                    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
                    <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
                    <div className="relative max-w-3xl">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-orange-300">Notes from the field</p>
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{t('title')}</h1>
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{t('subtitle')}</p>
                    </div>
                </header>
                <Blog posts={posts} locale={locale} />
            </Container>
        </>
    )
}

export default BlogPage
export const getServerSideProps = async ({ locale }) => {
    const { getContent } = await import('@/lib/content');
    const posts = (await getContent('blog'))
        .filter((post) => post.status === 'published')
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .map((post) => localizePost(post, locale));
    return { props: { posts } };
};
