import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import EducationPage from './pages/EducationPage'
import LessonsPage from './pages/LessonsPage'
import TeachersPage from './pages/TeachersPage'
import PricingPage from './pages/PricingPage'
import CertificationPage from './pages/CertificationPage'
import FaqPage from './pages/FaqPage'
import ReferencesPage from './pages/ReferencesPage'
import LanguageDetailPage from './pages/LanguageDetailPage'
import OnboardingPage from './pages/OnboardingPage'
import BlogPage from './pages/BlogPage'
import LocaleLayout from './routing/LocaleLayout'
import LocaleRedirect, { LegacySlugRedirect } from './routing/LocaleRedirect'
import { LEGACY_REDIRECTS, uniqueSlugsForRoute } from './routing/routes'

function slugRoutes(routeKey, element) {
  return uniqueSlugsForRoute(routeKey).map((slug) => (
    <Route key={`${routeKey}-${slug}`} path={slug} element={element} />
  ))
}

function languageDetailRoutes() {
  return uniqueSlugsForRoute('languageDetail').map((slug) => (
    <Route
      key={`languageDetail-${slug}`}
      path={`${slug}/:langId`}
      element={<LanguageDetailPage />}
    />
  ))
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LocaleRedirect />} />

      <Route path="/:locale" element={<LocaleLayout />}>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {slugRoutes('education', <EducationPage />)}
          {slugRoutes('lessons', <LessonsPage />)}
          {slugRoutes('teachers', <TeachersPage />)}
          {slugRoutes('pricing', <PricingPage />)}
          {slugRoutes('certification', <CertificationPage />)}
          {slugRoutes('faq', <FaqPage />)}
          {slugRoutes('references', <ReferencesPage />)}
          {languageDetailRoutes()}
          {slugRoutes('contact', <ContactPage />)}
          {slugRoutes('blog', <BlogPage />)}
        </Route>
        {slugRoutes('onboarding', <OnboardingPage />)}
      </Route>

      {Object.keys(LEGACY_REDIRECTS).map((slug) => (
        <Route
          key={`legacy-${slug}`}
          path={slug}
          element={<LegacySlugRedirect slug={slug} />}
        />
      ))}

      <Route path="onboarding" element={<Navigate to="/tr/onboarding" replace />} />
      <Route path="*" element={<Navigate to="/tr" replace />} />
    </Routes>
  )
}

export default App
