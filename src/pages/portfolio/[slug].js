import { getContent } from '@/lib/content';
import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layouts/partials/Container'
import BackToggle from '@/components/toggles/BackToggle'
import DetailPortfolio from '@/components/views/portfolio/DetailPortfolio'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

const DetailPortfolioPage = ({ portfolio }) => {
    const { locale, pathname, query } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    
    const slug = query.slug || '';
    const currentPath = pathname.replace('[slug]', slug);
    const currentPageURL = `${SITE_URL}${lang}${currentPath}`;
    const image = portfolio.photos || `${SITE_URL}/og-image.png`;
    
    return (
        <>
            <NextSeo
                title={`${portfolio.name} - Teguh Muhammad Harits`}
                description={portfolio.excerpt}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${currentPath}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${currentPath}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                    title: portfolio.name,
                    description: portfolio.excerpt,
                    images: [{ url: image, alt: portfolio.name }],
                }}
            />
            <BackToggle />
            <Container data-aos='fade-up' sectionClass={'mx-0'}>
                <DetailPortfolio portfolio={portfolio} locale={locale} />
            </Container>
        </>
    )
}

export default DetailPortfolioPage

export const getServerSideProps = async ({ params }) => {
  const [portfolio] = await getContent('portfolio', params.slug); return portfolio ? { props: { portfolio } } : { notFound: true };
};
