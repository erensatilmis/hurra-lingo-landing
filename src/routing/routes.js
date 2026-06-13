export const SUPPORTED_LOCALES = ['tr', 'en', 'de', 'az']
export const DEFAULT_LOCALE = 'tr'

export const LOCALE_LABELS = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
  az: 'AZ',
}

export const FLAG_TO_LOCALE = {
  TR: 'tr',
  EN: 'en',
  DE: 'de',
  AZ: 'az',
}

export const LOCALE_TO_FLAG = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
  az: 'AZ',
}

export const STORAGE_TO_LOCALE = {
  TR: 'tr',
  EN: 'en',
  DE: 'de',
  AZ: 'az',
}

export const LOCALE_TO_STORAGE = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
  az: 'AZ',
}

export const ROUTE_KEYS = {
  home: 'home',
  education: 'education',
  lessons: 'lessons',
  teachers: 'teachers',
  pricing: 'pricing',
  certification: 'certification',
  faq: 'faq',
  references: 'references',
  languageDetail: 'languageDetail',
  contact: 'contact',
  blog: 'blog',
  onboarding: 'onboarding',
}

export const ROUTE_SLUGS = {
  home: { tr: '', en: '', de: '', az: '' },
  education: {
    tr: 'egitim',
    en: 'education',
    de: 'bildung',
    az: 'tehsil',
  },
  lessons: {
    tr: 'dersler',
    en: 'lessons',
    de: 'unterricht',
    az: 'dersler',
  },
  teachers: {
    tr: 'ogretmenler',
    en: 'teachers',
    de: 'lehrer',
    az: 'muellimler',
  },
  pricing: {
    tr: 'ucretler',
    en: 'pricing',
    de: 'preise',
    az: 'qiymetler',
  },
  certification: {
    tr: 'sertifikasyon',
    en: 'certification',
    de: 'zertifizierung',
    az: 'sertifikatlasma',
  },
  faq: { tr: 'sss', en: 'faq', de: 'faq', az: 'sss' },
  references: {
    tr: 'referanslar',
    en: 'references',
    de: 'referenzen',
    az: 'referanslar',
  },
  languageDetail: {
    tr: 'diller',
    en: 'languages',
    de: 'sprachen',
    az: 'diller',
  },
  contact: {
    tr: 'iletisim',
    en: 'contact',
    de: 'kontakt',
    az: 'elaqe',
  },
  blog: { tr: 'blog', en: 'blog', de: 'blog', az: 'blog' },
  onboarding: {
    tr: 'onboarding',
    en: 'onboarding',
    de: 'onboarding',
    az: 'onboarding',
  },
}

const LEGACY_SLUG_TO_ROUTE = Object.entries(ROUTE_SLUGS).flatMap(
  ([routeKey, slugs]) =>
    Object.values(slugs)
      .filter(Boolean)
      .map((slug) => [slug, routeKey]),
)

export const LEGACY_REDIRECTS = Object.fromEntries(LEGACY_SLUG_TO_ROUTE)

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale)
}

export function getSlug(routeKey, locale) {
  return ROUTE_SLUGS[routeKey]?.[locale] ?? ''
}

export function uniqueSlugsForRoute(routeKey) {
  const slugs = ROUTE_SLUGS[routeKey]
  if (!slugs) return []
  return [...new Set(Object.values(slugs).filter(Boolean))]
}

export function buildLocalizedPath(routeKey, locale, params = {}) {
  const slug = getSlug(routeKey, locale)
  const base = `/${locale}`
  if (routeKey === 'home') return base

  if (routeKey === 'languageDetail') {
    return `${base}/${getSlug('languageDetail', locale)}/${params.langId ?? ''}`
  }

  return slug ? `${base}/${slug}` : base
}

function findRouteKeyBySlug(slug, locale) {
  if (uniqueSlugsForRoute('languageDetail').includes(slug)) {
    return 'languageDetail'
  }

  for (const [routeKey, slugs] of Object.entries(ROUTE_SLUGS)) {
    if (routeKey === 'home' || routeKey === 'languageDetail') continue
    if (slugs[locale] === slug) {
      return routeKey
    }
  }

  for (const [routeKey, slugs] of Object.entries(ROUTE_SLUGS)) {
    if (routeKey === 'home' || routeKey === 'languageDetail') continue
    if (Object.values(slugs).includes(slug)) {
      return routeKey
    }
  }

  return null
}

export function resolveRouteFromPathname(pathname) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) {
    return { locale: DEFAULT_LOCALE, routeKey: 'home', params: {} }
  }

  const locale = isSupportedLocale(segments[0]) ? segments[0] : DEFAULT_LOCALE
  const rest = isSupportedLocale(segments[0]) ? segments.slice(1) : segments
  const slug = rest[0] ?? ''

  if (!slug) {
    return { locale, routeKey: 'home', params: {} }
  }

  const routeKey = findRouteKeyBySlug(slug, locale)

  if (routeKey === 'languageDetail') {
    return {
      locale,
      routeKey,
      params: { langId: rest[1] ?? '' },
    }
  }

  if (routeKey) {
    return { locale, routeKey, params: {} }
  }

  return { locale, routeKey: null, params: {} }
}

export function switchLocalePath(pathname, targetLocale) {
  const { routeKey, params } = resolveRouteFromPathname(pathname)
  if (!routeKey) return buildLocalizedPath('home', targetLocale)
  return buildLocalizedPath(routeKey, targetLocale, params)
}

export function getAuthUrls(locale) {
  const lng = { tr: 'tr', en: 'en', de: 'de', az: 'az' }[locale] ?? 'tr'
  return {
    login: `https://www.hurralingo.app/login?lng=${lng}`,
    signup: `https://www.hurralingo.app/signup?lng=${lng}`,
  }
}

export function localeToFlagCode(locale) {
  return LOCALE_TO_FLAG[locale] ?? 'TR'
}

export function flagCodeToLocale(code) {
  return FLAG_TO_LOCALE[code] ?? DEFAULT_LOCALE
}

export function localeToStorageCode(locale) {
  return LOCALE_TO_STORAGE[locale] ?? 'TR'
}

export function storageCodeToLocale(code) {
  return STORAGE_TO_LOCALE[code] ?? DEFAULT_LOCALE
}
