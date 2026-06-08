import { useState } from 'react'

const STORAGE_KEY = 'hurra-lingo-language'
const DEFAULT_LANGUAGE = 'TR'

function readStoredLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  const stored = localStorage.getItem(STORAGE_KEY)
  return stored || DEFAULT_LANGUAGE
}

export function useSelectedLanguage(languages) {
  const languageCodes = languages.map((lang) =>
    typeof lang === 'string' ? lang : lang.code,
  )
  const [language, setLanguage] = useState(readStoredLanguage)

  const selectLanguage = (code) => {
    if (!languageCodes.includes(code)) return

    setLanguage(code)
    localStorage.setItem(STORAGE_KEY, code)
  }

  return { language, selectLanguage }
}
