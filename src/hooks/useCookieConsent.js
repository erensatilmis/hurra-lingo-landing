import { useEffect, useState } from 'react'
import {
  applyConsent,
  defaultPreferences,
  readStoredConsent,
  saveConsent,
} from '../lib/cookieConsent'

export function useCookieConsent() {
  const [consent, setConsent] = useState(() => readStoredConsent())
  const [visible, setVisible] = useState(() => !readStoredConsent())
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState(() => {
    const stored = readStoredConsent()
    return stored
      ? { analytics: stored.analytics, marketing: stored.marketing }
      : { ...defaultPreferences }
  })

  useEffect(() => {
    if (consent) {
      applyConsent(consent)
    }
  }, [consent])

  const acceptAll = () => {
    const next = saveConsent({ analytics: true, marketing: true })
    setConsent(next)
    setVisible(false)
    setShowPreferences(false)
  }

  const rejectAll = () => {
    const next = saveConsent({ analytics: false, marketing: false })
    setConsent(next)
    setVisible(false)
    setShowPreferences(false)
  }

  const savePreferences = () => {
    const next = saveConsent(preferences)
    setConsent(next)
    setVisible(false)
    setShowPreferences(false)
  }

  const openPreferences = () => {
    setPreferences({
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    })
    setShowPreferences(true)
  }

  const reopenBanner = () => {
    setPreferences({
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    })
    setShowPreferences(false)
    setVisible(true)
  }

  return {
    consent,
    visible,
    showPreferences,
    preferences,
    setPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    reopenBanner,
    setShowPreferences,
  }
}
