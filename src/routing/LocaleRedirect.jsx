import { Navigate, useLocation } from 'react-router-dom'
import {
  buildLocalizedPath,
  DEFAULT_LOCALE,
  LEGACY_REDIRECTS,
  isSupportedLocale,
  storageCodeToLocale,
} from './routes'

function readStoredLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem('hurra-lingo-language')
  return stored ? storageCodeToLocale(stored) : DEFAULT_LOCALE
}

export default function LocaleRedirect() {
  const location = useLocation()
  const locale = readStoredLocale()
  return <Navigate to={`/${locale}${location.search}${location.hash}`} replace />
}

export function LegacySlugRedirect({ slug }) {
  const routeKey = LEGACY_REDIRECTS[slug]
  if (!routeKey) {
    return <Navigate to={buildLocalizedPath('home', DEFAULT_LOCALE)} replace />
  }
  return <Navigate to={buildLocalizedPath(routeKey, DEFAULT_LOCALE)} replace />
}

export function InvalidLocaleRedirect() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]

  if (maybeLocale && !isSupportedLocale(maybeLocale)) {
    return (
      <Navigate
        to={`/${DEFAULT_LOCALE}/${segments.slice(1).join('/')}${location.search}${location.hash}`}
        replace
      />
    )
  }

  return <Navigate to={buildLocalizedPath('home', DEFAULT_LOCALE)} replace />
}
