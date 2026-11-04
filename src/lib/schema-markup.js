const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Teguh Muhammad Harits",
      url: siteUrl,
      jobTitle: "Full-stack Developer",
      sameAs: ["https://github.com/teguhdev97"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Teguh Muhammad Harits",
      url: siteUrl,
      inLanguage: ["id-ID", "en-US", "ja-JP"],
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};
