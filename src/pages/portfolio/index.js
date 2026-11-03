import { getContent } from '@/lib/content';
import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Portfolio from '@/components/views/portfolio/Portfolio'
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';


const PortfolioPage = ({ portfolios,data }) => {

    const t = useTranslations('Portfolio');
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
            <Container data-aos='fade-up' sectionClass={'mx-0'}>
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Portfolio portfolios={portfolios} locale={locale}  />
            </Container>

        
        </>
    )
}

export default PortfolioPage
export const getServerSideProps = async ({ params }) => {
  return { props: { portfolios: await getContent('portfolio') } };
};
