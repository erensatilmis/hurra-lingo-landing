import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import AppNavLink from './AppNavLink'
import LanguageSwitcher from './LanguageSwitcher'
import LocalizedLink from '../../routing/LocalizedLink'
import { useLocalePath } from '../../routing/useLocalePath'
import { getAuthUrls, switchLocalePath } from '../../routing/routes'
import { flagCodeToLocale } from '../../hooks/useLanguageSwitch'
import { assets } from '../../assets'

const NAV_ITEMS = [
  { key: 'education', routeKey: 'education' },
  { key: 'lessons', routeKey: 'lessons' },
  { key: 'teachers', routeKey: 'teachers' },
  { key: 'blog', hash: 'blog' },
  { key: 'pricing', routeKey: 'pricing' },
  { key: 'references', routeKey: 'references' },
  { key: 'contact', routeKey: 'contact' },
]

const CORPORATE_ITEMS = [
  { key: 'certification', routeKey: 'certification' },
  { key: 'faq', routeKey: 'faq' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation('common')
  const { locale, localizedPath } = useLocalePath()
  const navigate = useNavigate()
  const location = useLocation()
  const authUrls = getAuthUrls(locale)

  const handleLanguageSelect = (flagCode) => {
    const targetLocale = flagCodeToLocale(flagCode)
    if (targetLocale === locale) return

    i18n.changeLanguage(targetLocale)
    const newPath = switchLocalePath(location.pathname, targetLocale)
    navigate(`${newPath}${location.search}${location.hash}`)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 py-4">
          <LocalizedLink routeKey="home" className="flex items-center gap-3">
            {assets.logo ? (
              <img src={assets.logo} alt="Hurra Lingo" className="h-8 w-auto" />
            ) : (
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 text-sm font-bold text-white">
                  HL
                </div>
                <span className="text-lg font-bold text-slate-900">Hurra Lingo</span>
              </div>
            )}
          </LocalizedLink>

          <nav className="hidden items-center gap-6 xl:flex" aria-label={t('nav.mainMenu')}>
            {NAV_ITEMS.map((item) => (
              <AppNavLink
                key={item.key}
                to={item.routeKey ? localizedPath(item.routeKey) : undefined}
                href={
                  item.hash ? `${localizedPath('home')}#${item.hash}` : undefined
                }
              >
                {t(`nav.${item.key}`)}
              </AppNavLink>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              >
                {t('nav.corporate')}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full z-10 mt-2 min-w-44 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {CORPORATE_ITEMS.map((item) => (
                  <AppNavLink
                    key={item.key}
                    to={localizedPath(item.routeKey)}
                    className="block rounded-lg px-3 py-2 hover:bg-primary-50"
                  >
                    {t(`nav.${item.key}`)}
                  </AppNavLink>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} onSelect={handleLanguageSelect} />
            <Button href={authUrls.login} variant="ghost" size="sm">
              {t('nav.login')}
            </Button>
            <Button href={authUrls.signup} size="sm">
              {t('nav.signup')}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label={t('nav.mainMenu')}>
              {NAV_ITEMS.map((item) => (
                <AppNavLink
                  key={item.key}
                  to={item.routeKey ? localizedPath(item.routeKey) : undefined}
                  href={
                    item.hash ? `${localizedPath('home')}#${item.hash}` : undefined
                  }
                  mobile
                  onClick={() => setMobileOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </AppNavLink>
              ))}
              <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {t('nav.corporate')}
              </p>
              {CORPORATE_ITEMS.map((item) => (
                <AppNavLink
                  key={item.key}
                  to={localizedPath(item.routeKey)}
                  mobile
                  onClick={() => setMobileOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </AppNavLink>
              ))}
            </nav>
            <LanguageSwitcher
              locale={locale}
              onSelect={handleLanguageSelect}
              mobile
              className="mt-4 flex-wrap px-1 py-1"
            />
            <div className="mt-4 flex gap-3">
              <Button href={authUrls.login} variant="outline" className="flex-1">
                {t('nav.login')}
              </Button>
              <Button href={authUrls.signup} className="flex-1">
                {t('nav.signup')}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
