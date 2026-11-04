import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useTranslations } from "next-intl";

import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layouts/partials/Container"
import Blog from "@/components/views/blog/Blog"


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
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Blog posts={posts} locale={locale} />
            </Container>
        </>
    )
}

export default BlogPage
export const getServerSideProps = async () => {
    const { getContent } = await import('@/lib/content');
    const posts = (await getContent('blog'))
        .filter((post) => post.status === 'published')
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return { props: { posts } };
};
