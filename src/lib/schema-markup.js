const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teguhharits.com";

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Teguh Muhammad Harits",
      alternateName: ["Teguh Harits", "TeguhDev"],
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      jobTitle: "Full-Stack Developer",
      sameAs: [
        "https://www.linkedin.com/in/teguh-m-harits/",
        "https://github.com/teguhdev97",
        "https://github.com/aiguh97",
        "https://www.instagram.com/am.are.is3/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Teguh Muhammad Harits",
      alternateName: "Teguh Harits Portfolio",
      url: siteUrl,
      description: "The official portfolio, case studies, and engineering journal of Teguh Muhammad Harits.",
      inLanguage: ["id-ID", "en-US", "ja-JP"],
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#main-navigation`,
      name: "Main navigation",
      itemListElement: [
        ["Tentang", "/about"],
        ["Keahlian", "/skillset"],
        ["Pengalaman", "/experience"],
        ["Layanan", "/services"],
        ["Portofolio", "/portfolio"],
        ["Studi Kasus", "/case-study"],
        ["Blog", "/blog"],
        ["Kontak", "/contact"],
      ].map(([name, path], position) => ({
        "@type": "ListItem",
        position: position + 1,
        name,
        url: `${siteUrl}${path}`,
      })),
    },
  ],
};
