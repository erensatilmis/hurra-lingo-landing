import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  storageCodeToLocale,
} from '../routing/routes'

import trCommon from '../locales/tr/common.json'
import trHome from '../locales/tr/home.json'
import trEducation from '../locales/tr/education.json'
import trLessons from '../locales/tr/lessons.json'
import trFaq from '../locales/tr/faq.json'
import trPricing from '../locales/tr/pricing.json'
import trCertification from '../locales/tr/certification.json'
import trReferences from '../locales/tr/references.json'
import trTeachers from '../locales/tr/teachers.json'
import trOnboarding from '../locales/tr/onboarding.json'
import trLanguagePages from '../locales/tr/languagePages.json'
import trCookie from '../locales/tr/cookie.json'
import trChatbot from '../locales/tr/chatbot.json'
import trPayment from '../locales/tr/payment.json'

import enCommon from '../locales/en/common.json'
import enHome from '../locales/en/home.json'
import enEducation from '../locales/en/education.json'
import enLessons from '../locales/en/lessons.json'
import enFaq from '../locales/en/faq.json'
import enPricing from '../locales/en/pricing.json'
import enCertification from '../locales/en/certification.json'
import enReferences from '../locales/en/references.json'
import enTeachers from '../locales/en/teachers.json'
import enOnboarding from '../locales/en/onboarding.json'
import enLanguagePages from '../locales/en/languagePages.json'
import enCookie from '../locales/en/cookie.json'
import enChatbot from '../locales/en/chatbot.json'
import enPayment from '../locales/en/payment.json'

import deCommon from '../locales/de/common.json'
import deHome from '../locales/de/home.json'
import deEducation from '../locales/de/education.json'
import deLessons from '../locales/de/lessons.json'
import deFaq from '../locales/de/faq.json'
import dePricing from '../locales/de/pricing.json'
import deCertification from '../locales/de/certification.json'
import deReferences from '../locales/de/references.json'
import deTeachers from '../locales/de/teachers.json'
import deOnboarding from '../locales/de/onboarding.json'
import deLanguagePages from '../locales/de/languagePages.json'
import deCookie from '../locales/de/cookie.json'
import deChatbot from '../locales/de/chatbot.json'
import dePayment from '../locales/de/payment.json'

import azCommon from '../locales/az/common.json'
import azHome from '../locales/az/home.json'
import azEducation from '../locales/az/education.json'
import azLessons from '../locales/az/lessons.json'
import azFaq from '../locales/az/faq.json'
import azPricing from '../locales/az/pricing.json'
import azCertification from '../locales/az/certification.json'
import azReferences from '../locales/az/references.json'
import azTeachers from '../locales/az/teachers.json'
import azOnboarding from '../locales/az/onboarding.json'
import azLanguagePages from '../locales/az/languagePages.json'
import azCookie from '../locales/az/cookie.json'
import azChatbot from '../locales/az/chatbot.json'
import azPayment from '../locales/az/payment.json'

const STORAGE_KEY = 'hurra-lingo-language'

function readStoredLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? storageCodeToLocale(stored) : DEFAULT_LOCALE
}

const namespaces = [
  'common',
  'home',
  'education',
  'lessons',
  'faq',
  'pricing',
  'certification',
  'references',
  'teachers',
  'onboarding',
  'languagePages',
  'cookie',
  'chatbot',
  'payment',
]

const localeBundles = {
  tr: {
    common: trCommon,
    home: trHome,
    education: trEducation,
    lessons: trLessons,
    faq: trFaq,
    pricing: trPricing,
    certification: trCertification,
    references: trReferences,
    teachers: trTeachers,
    onboarding: trOnboarding,
    languagePages: trLanguagePages,
    cookie: trCookie,
    chatbot: trChatbot,
    payment: trPayment,
  },
  en: {
    common: enCommon,
    home: enHome,
    education: enEducation,
    lessons: enLessons,
    faq: enFaq,
    pricing: enPricing,
    certification: enCertification,
    references: enReferences,
    teachers: enTeachers,
    onboarding: enOnboarding,
    languagePages: enLanguagePages,
    cookie: enCookie,
    chatbot: enChatbot,
    payment: enPayment,
  },
  de: {
    common: deCommon,
    home: deHome,
    education: deEducation,
    lessons: deLessons,
    faq: deFaq,
    pricing: dePricing,
    certification: deCertification,
    references: deReferences,
    teachers: deTeachers,
    onboarding: deOnboarding,
    languagePages: deLanguagePages,
    cookie: deCookie,
    chatbot: deChatbot,
    payment: dePayment,
  },
  az: {
    common: azCommon,
    home: azHome,
    education: azEducation,
    lessons: azLessons,
    faq: azFaq,
    pricing: azPricing,
    certification: azCertification,
    references: azReferences,
    teachers: azTeachers,
    onboarding: azOnboarding,
    languagePages: azLanguagePages,
    cookie: azCookie,
    chatbot: azChatbot,
    payment: azPayment,
  },
}

i18n.use(initReactI18next).init({
  resources: localeBundles,
  lng: readStoredLocale(),
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: SUPPORTED_LOCALES,
  ns: namespaces,
  defaultNS: 'common',
  interpolation: { escapeValue: false },
})

export default i18n
