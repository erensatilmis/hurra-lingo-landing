import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="egitim" element={<EducationPage />} />
        <Route path="dersler" element={<LessonsPage />} />
        <Route path="ogretmenler" element={<TeachersPage />} />
        <Route path="ucretler" element={<PricingPage />} />
        <Route path="sertifikasyon" element={<CertificationPage />} />
        <Route path="sss" element={<FaqPage />} />
        <Route path="referanslar" element={<ReferencesPage />} />
        <Route path="diller/:langId" element={<LanguageDetailPage />} />
        <Route path="iletisim" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
      <Route path="onboarding" element={<OnboardingPage />} />
    </Routes>
  )
}

export default App
