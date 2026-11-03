"use client"

import { PORTFOLIO_CATEGORIES } from "@/constants/data/portfolio"
import { useRouter } from "next/router"

const PortfolioCategory = ({ filter, active }) => {
  const { locale = "en" } = useRouter()

  return (
    <nav>
      <ul className="flex gap-3 sm:gap-4 mb-6 justify-center sm:justify-start">
        {Object.entries(PORTFOLIO_CATEGORIES).map(([key, category]) => {
          const Icon = category.icon
          const label = category.label[locale]

          return (
            <li key={key}>
              <button
                onClick={() => filter(category.slug)}
                title={label}
                data-umami-event={`Click Portfolio Category - ${label}`}
                className={`flex items-center gap-2 badge !px-4 !py-3 sm:!px-3 sm:!py-2
                  ${active === category.slug ? "!text-primary font-semibold" : ""}
                `}
              >
                <Icon className="text-lg" />
                <span className="hidden sm:block">{label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PortfolioCategory
