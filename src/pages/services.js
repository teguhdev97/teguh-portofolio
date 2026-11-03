import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';

import Container from '@/components/layouts/partials/Container';
import FAQSection from '@/components/views/service/FAQSection';
import PageHeading from '@/components/common/PageHeading';
import Services from '@/components/views/service/Services';

const ServicesPage = ({ servicesData }) => {
  const t = useTranslations('Services');
  const { locale, pathname } = useRouter();
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  const langPrefix = locale === 'en' ? '/en' : locale === 'jp' ? '/jp' : '';
  const currentPageURL = `${SITE_URL}${langPrefix}${pathname}`;

  return (
    <>
      <NextSeo
        title={`${t('title')} - Teguh Muhammad Harits`}
        description={t('metaDesc')}
        additionalLinkTags={[
          { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${pathname}` },
          { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${pathname}` },
          { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${pathname}` },
          { rel: 'alternate', hreflang: 'jp', href: `${SITE_URL}/jp${pathname}` },
        ]}
        canonical={currentPageURL}
        openGraph={{ url: currentPageURL }}
      />
      <Container data-aos="fade-up">
        <PageHeading title={t('title')} description={t('subtitle')} />
        <div className="flex flex-col gap-6">
          <Services services={servicesData} />
          <FAQSection locale={locale} />
        </div>
      </Container>
    </>
  );
};

export default ServicesPage;

export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};