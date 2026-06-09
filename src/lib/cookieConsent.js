export const CONSENT_STORAGE_KEY = 'hurra-cookie-consent'
export const CONSENT_VERSION = 1

export const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

function isValidConsent(value) {
  return (
    value &&
    typeof value === 'object' &&
    value.version === CONSENT_VERSION &&
    typeof value.necessary === 'boolean' &&
    typeof value.analytics === 'boolean' &&
    typeof value.marketing === 'boolean'
  )
}

export function readStoredConsent() {
  if (typeof window === 'undefined') return null

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)
    return isValidConsent(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function saveConsent(preferences) {
  const consent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    updatedAt: new Date().toISOString(),
  }

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  applyConsent(consent)
  return consent
}

export function applyConsent(consent) {
  if (!consent?.analytics) {
    // Analytics script'leri burada koşullu yüklenebilir.
    return
  }

  // Örnek: Google Analytics eklendiğinde burada başlatılır.
}
