import { useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { InvalidLocaleRedirect } from './LocaleRedirect'
import { isSupportedLocale, localeToStorageCode } from './routes'

const STORAGE_KEY = 'hurra-lingo-language'

export default function LocaleLayout() {
  const { locale } = useParams()
  const location = useLocation()
  const { i18n, t } = useTranslation('common')

  useEffect(() => {
    if (!isSupportedLocale(locale)) return

    if (i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }

    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, localeToStorageCode(locale))
  }, [locale, i18n])

  useEffect(() => {
    document.title = t('meta.title')
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', t('meta.description'))
    }
  }, [locale, location.pathname, t])

  if (!isSupportedLocale(locale)) {
    return <InvalidLocaleRedirect />
  }

  return <Outlet />
}
