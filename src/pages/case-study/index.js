import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layouts/partials/Container";
import Portfolio from "@/components/views/portfolio/Portfolio";
import { getContent } from "@/lib/content";

const CaseStudyPage = ({ projects }) => {
  const { locale } = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";
  const prefix = locale === "id" ? "" : `/${locale}`;
  const url = `${siteUrl}${prefix}/case-study`;
  const copy = {
    id: ["Studi Kasus", "Proses, keputusan teknis, dan hasil dari proyek yang saya kerjakan."],
    en: ["Case Studies", "The process, technical decisions, and outcomes behind my projects."],
    jp: ["ケーススタディ", "プロジェクトのプロセス、技術的判断、成果を紹介します。"],
  }[locale] || ["Case Studies", "Selected project case studies."];

  return (
    <>
      <NextSeo title={`${copy[0]} - Teguh Muhammad Harits`} description={copy[1]} canonical={url} openGraph={{ url, title: copy[0], description: copy[1] }} />
      <Container data-aos="fade-up" sectionClass="mx-0">
        <PageHeading title={copy[0]} description={copy[1]} />
        <Portfolio portfolios={projects} locale={locale} basePath="/case-study" />
      </Container>
    </>
  );
};

export default CaseStudyPage;

export const getServerSideProps = async () => {
  const projects = (await getContent("portfolio")).filter((project) => project.isCaseStudy !== false);
  return { props: { projects } };
};
