export const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Teguh Muhammad Harits",
            "url": "https://dwiwijaya.com/",
            "jobTitle": "Fullstack Developer",
            "worksFor": { "@type": "Organization", "name": "Freelancer" },
            "sameAs": [
                "https://www.linkedin.com/in/dwi-wijaya",
                "https://github.com/dwiwijaya",
                "https://www.instagram.com/am.are.is3/"
            ]
        },
        {
            "@type": "WebSite",
            "name": "Teguh Muhammad Harits - Personal Website",
            "url": "https://dwiwijaya.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dwiwijaya.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "Dashboard", "item": "https://dwiwijaya.com/dashboard" },
                { "@type": "ListItem", "position": 3, "name": "About", "item": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 4, "name": "Skillset", "item": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 5, "name": "Experience", "item": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 6, "name": "Services", "item": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 7, "name": "Portfolio", "item": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "item": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "item": "https://dwiwijaya.com/contact" },
                { "@type": "ListItem", "position": 10, "name": "Guestbook", "item": "https://dwiwijaya.com/guestbook" }
            ]
        },
        {
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "url": "https://dwiwijaya.com/" },
                { "@type": "ListItem", "position": 2, "name": "Dashboard", "url": "https://dwiwijaya.com/dashboard" },
                { "@type": "ListItem", "position": 3, "name": "About", "url": "https://dwiwijaya.com/about" },
                { "@type": "ListItem", "position": 4, "name": "Skillset", "url": "https://dwiwijaya.com/skillset" },
                { "@type": "ListItem", "position": 5, "name": "Experience", "url": "https://dwiwijaya.com/experience" },
                { "@type": "ListItem", "position": 6, "name": "Services", "url": "https://dwiwijaya.com/services" },
                { "@type": "ListItem", "position": 7, "name": "Portfolio", "url": "https://dwiwijaya.com/portfolio" },
                { "@type": "ListItem", "position": 8, "name": "Blog", "url": "https://dwiwijaya.com/blog" },
                { "@type": "ListItem", "position": 9, "name": "Contact", "url": "https://dwiwijaya.com/contact" },
                { "@type": "ListItem", "position": 10, "name": "Guestbook", "url": "https://dwiwijaya.com/guestbook" }
            ]
        },
    ]
};
