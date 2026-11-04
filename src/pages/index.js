import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Homepage from "@/components/views/home/Home";
import Head from "next/head";

export default function Home() {

  const SITE_URL = "https://teguhharits.com";
  const { locale } = useRouter();
  const lang = locale === 'id' ? '' : `/${locale}`;
  const meta = {
    id: {
      title: "Teguh Muhammad Harits | Full-Stack Developer Indonesia",
      description: "Portofolio resmi Teguh Muhammad Harits, Full-Stack Developer Indonesia. Jelajahi proyek, studi kasus, pengalaman, layanan, dan artikel pengembangan web.",
    },
    en: {
      title: "Teguh Muhammad Harits | Full-Stack Developer",
      description: "The official portfolio of Teguh Muhammad Harits. Explore full-stack projects, case studies, experience, services, and web development articles.",
    },
    jp: {
      title: "Teguh Muhammad Harits | フルスタック開発者",
      description: "Teguh Muhammad Haritsの公式ポートフォリオ。プロジェクト、事例、経験、サービス、Web開発の記事をご覧ください。",
    },
  }[locale] || {};
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        additionalLinkTags={[
          { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}` },
          { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}` },
          { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en` },
        ]}
        canonical={`${SITE_URL}${lang}`}
        openGraph={{
          url: `${SITE_URL}${lang}`,
          title: meta.title,
          description: meta.description,
        }}
      />
      <Head>
        <link rel="preload" href="endless-clouds.svg" as="image" crossOrigin="anonymous"/>
      </Head>
      {/* <Toolbar /> */}
      <div className="group-[.sidebar-expanded]/main:blur-[1px] z-[-1] bg-container border border-b border-stroke top-0 left-0 w-full h-[24vh] bg-endless-clouds"></div>
      <section data-section className="group-[.sidebar-expanded]/main:blur-[2px] relative p-[15px] pl-5 mx-auto max-w-[1024px]">
        <Homepage />
      </section>
    </>
  );
}
export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};
