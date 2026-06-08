import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import AppNavLink from './AppNavLink'
import LanguageSwitcher from './LanguageSwitcher'
import { assets } from '../../assets'
import { useSelectedLanguage } from '../../hooks/useSelectedLanguage'
import {
  authUrls,
  corporateLinks,
  languages,
  navLinks,
} from '../../data/content'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, selectLanguage } = useSelectedLanguage(languages)

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
          <Link to="/" className="flex items-center gap-3">
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
          </Link>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Ana menü">
            {navLinks.map((link) => (
              <AppNavLink key={link.label} href={link.href}>
                {link.label}
              </AppNavLink>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary-700"
              >
                Kurumsal
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full z-10 mt-2 min-w-44 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {corporateLinks.map((link) => (
                  <AppNavLink
                    key={link.label}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 hover:bg-primary-50"
                  >
                    {link.label}
                  </AppNavLink>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher
              activeLanguage={language}
              onSelect={selectLanguage}
            />
            <Button href={authUrls.login} variant="ghost" size="sm">
              Giriş
            </Button>
            <Button href={authUrls.signup} size="sm">
              Kayıt
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobil menü">
              {navLinks.map((link) => (
                <AppNavLink
                  key={link.label}
                  href={link.href}
                  mobile
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </AppNavLink>
              ))}
              <p className="px-3 pt-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Kurumsal
              </p>
              {corporateLinks.map((link) => (
                <AppNavLink
                  key={link.label}
                  href={link.href}
                  mobile
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </AppNavLink>
              ))}
            </nav>
            <LanguageSwitcher
              activeLanguage={language}
              onSelect={selectLanguage}
              mobile
              className="mt-4 flex-wrap px-1 py-1"
            />
            <div className="mt-4 flex gap-3">
              <Button href={authUrls.login} variant="outline" className="flex-1">
                Giriş
              </Button>
              <Button href={authUrls.signup} className="flex-1">
                Kayıt
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
