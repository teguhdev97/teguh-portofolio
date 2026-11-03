import {
  BiBook,
  BiBriefcase,
  BiBuilding,
  BiCodeAlt,
  BiGridAlt,
  BiGroup,
  BiLogoFlask,
  BiPen,
  BiUser,
  BiServer,
  BiMobileAlt,
  BiBrain,
} from "react-icons/bi"

/* =======================
   PORTFOLIO CATEGORIES
======================= */
export const PORTFOLIO_CATEGORIES = {
  all: {
    icon: BiGridAlt,
    slug: "all",
    label: {
      en: "All",
      id: "Semua",
      jp: "すべて",
    },
  },

  fullstack: {
    icon: BiCodeAlt,
    slug: "fullstack",
    label: {
      en: "Fullstack",
      id: "Fullstack",
      jp: "フルスタック",
    },
  },

  frontend: {
    icon: BiPen,
    slug: "frontend",
    label: {
      en: "Frontend",
      id: "Frontend",
      jp: "フロントエンド",
    },
  },

  backend: {
    icon: BiServer,
    slug: "backend",
    label: {
      en: "Backend",
      id: "Backend",
      jp: "バックエンド",
    },
  },

  mobile: {
    icon: BiMobileAlt,
    slug: "mobile",
    label: {
      en: "Mobile App",
      id: "Mobile",
      jp: "モバイルアプリ",
    },
  },
}


/* =======================
   PORTFOLIO TYPES
======================= */
export const PORTFOLIO_TYPES = {
  office: {
    icon: BiBuilding,
    label: {
      en: "Office Project",
      id: "Proyek Kantor",
      jp: "社内プロジェクト",
    },
  },

  personal: {
    icon: BiUser,
    label: {
      en: "Personal Project",
      id: "Proyek Pribadi",
      jp: "個人プロジェクト",
    },
  },

  team: {
    icon: BiGroup,
    label: {
      en: "Team Project",
      id: "Proyek Tim",
      jp: "チームプロジェクト",
    },
  },

  client: {
    icon: BiBriefcase,
    label: {
      en: "Client Project",
      id: "Proyek Klien",
      jp: "クライアント案件",
    },
  },

  open_source: {
    icon: BiCodeAlt,
    label: {
      en: "Open Source Project",
      id: "Proyek Sumber Terbuka",
      jp: "オープンソース",
    },
  },

  research: {
    icon: BiLogoFlask,
    label: {
      en: "Research Project",
      id: "Proyek Penelitian",
      jp: "研究プロジェクト",
    },
  },

  academic: {
    icon: BiBook,
    label: {
      en: "Academic Project",
      id: "Proyek Akademik",
      jp: "学術プロジェクト",
    },
  },
}
