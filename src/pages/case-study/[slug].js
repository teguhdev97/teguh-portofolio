import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import BackToggle from "@/components/toggles/BackToggle";
import Container from "@/components/layouts/partials/Container";
import DetailPortfolio from "@/components/views/portfolio/DetailPortfolio";
import { getContent } from "@/lib/content";

const CaseStudyDetail = ({ project }) => {
  const { locale } = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";
  const prefix = locale === "id" ? "" : `/${locale}`;
  const url = `${siteUrl}${prefix}/case-study/${project.slug}`;
  const image = project.photos || `${siteUrl}/og-image.png`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.excerpt,
    image,
    url,
    author: { "@type": "Person", name: "Teguh Muhammad Harits", url: siteUrl },
  };

  return (
    <>
      <NextSeo
        title={`${project.name} Case Study - Teguh Muhammad Harits`}
        description={project.excerpt || `Case study ${project.name}`}
        canonical={url}
        openGraph={{ url, title: project.name, description: project.excerpt, images: [{ url: image, alt: project.name }] }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BackToggle />
      <Container data-aos="fade-up" sectionClass="mx-0">
        <DetailPortfolio portfolio={project} locale={locale} />
      </Container>
    </>
  );
};

export default CaseStudyDetail;

export const getServerSideProps = async ({ params }) => {
  const [project] = await getContent("portfolio", params.slug);
  return project && project.isCaseStudy !== false ? { props: { project } } : { notFound: true };
};
