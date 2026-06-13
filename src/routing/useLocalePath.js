import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import {
  buildLocalizedPath,
  DEFAULT_LOCALE,
  isSupportedLocale,
  resolveRouteFromPathname,
  switchLocalePath,
} from './routes'

export function useLocale() {
  const { locale: paramLocale } = useParams()
  const locale = isSupportedLocale(paramLocale) ? paramLocale : DEFAULT_LOCALE
  return locale
}

export function useLocalePath() {
  const locale = useLocale()

  const localizedPath = useCallback(
    (routeKey, params) => buildLocalizedPath(routeKey, locale, params),
    [locale],
  )

  return { locale, localizedPath }
}

export function useSwitchLocalePath() {
  return useCallback((pathname, targetLocale) => {
    return switchLocalePath(pathname, targetLocale)
  }, [])
}

export function useCurrentRoute() {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '/'
  return resolveRouteFromPathname(pathname)
}
