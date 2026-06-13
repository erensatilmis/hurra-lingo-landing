import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  switchLocalePath,
  isSupportedLocale,
  DEFAULT_LOCALE,
  flagCodeToLocale,
  localeToStorageCode,
} from '../routing/routes'

export { flagCodeToLocale } from '../routing/routes'

export function useLanguageSwitch() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const locale = isSupportedLocale(i18n.language) ? i18n.language : DEFAULT_LOCALE

  const switchLanguage = useCallback(
    (flagCode) => {
      const targetLocale = flagCodeToLocale(flagCode)
      if (targetLocale === locale) return

      i18n.changeLanguage(targetLocale)
      localStorage.setItem('hurra-lingo-language', localeToStorageCode(targetLocale))
      const newPath = switchLocalePath(location.pathname, targetLocale)
      navigate(`${newPath}${location.search}${location.hash}`)
    },
    [i18n, locale, navigate, location.pathname, location.search, location.hash],
  )

  return { locale, switchLanguage }
}
