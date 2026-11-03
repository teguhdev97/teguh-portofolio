import LoadingSpeedInsight from '@/components/elements/LoadingSpeedInsight'
import CircleProgress from '@/components/elements/CircleProgress'

export default function SpeedSection({ data, locale, isLoading, style }) {
  if (isLoading || !data) return <LoadingSpeedInsight locale={locale} style={style} />

  const categories = data.lighthouseResult?.categories || {}

  const translations = {
    en: {
      performance: 'Performance',
      accessibility: 'Accessibility',
      'best-practices': 'Best Practices',
      seo: 'SEO'
    },
    id: {
      performance: 'Performa',
      accessibility: 'Aksesibilitas',
      'best-practices': 'Praktik Terbaik',
      seo: 'SEO'
    }
  }

  return (
    <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden scrollbar-hide">
      {Object.entries(categories).map(([key, value]) => (
        <div key={key} className="mt-2 flex flex-col items-center justify-start text-xs gap-3">
          <h3 className="whitespace-nowrap">
            {translations[locale]?.[key] || key}
          </h3>
          <CircleProgress style={style} value={Number(value.score || 0) * 100} />
        </div>
      ))}
    </div>
  )
}

