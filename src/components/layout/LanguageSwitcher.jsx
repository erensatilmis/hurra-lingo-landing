import { useTranslation } from 'react-i18next'
import { languageFlagByCode } from '../../assets'
import { localeToFlagCode } from '../../routing/routes'

export default function LanguageSwitcher({
  locale,
  onSelect,
  mobile = false,
  className = '',
}) {
  const { t } = useTranslation('common')
  const languages = t('languages', { returnObjects: true })
  const activeFlagCode = localeToFlagCode(locale)
  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2 py-1 ${className}`}
      role="group"
      aria-label={t('aria.languageSelection')}
    >
      {languages.map((lang) => {
        const isActive = activeFlagCode === lang.code
        const flag = languageFlagByCode[lang.code]

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            aria-pressed={isActive}
            aria-label={lang.label}
            title={lang.label}
            className={`inline-flex items-center justify-center rounded-full p-1 transition-opacity duration-200 ${
              isActive
                ? 'opacity-100'
                : 'opacity-35 hover:opacity-60'
            } ${mobile ? 'p-1.5' : ''}`}
          >
            <img
              src={flag}
              alt=""
              className="h-5 w-6 rounded-[4px] object-cover ring-1 ring-slate-200/70"
            />
          </button>
        )
      })}
    </div>
  )
}
