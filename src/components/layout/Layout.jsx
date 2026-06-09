import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import ChatBotWidget from './ChatBotWidget'
import CookieConsent from './CookieConsent'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
      <ChatBotWidget />
      <CookieConsent />
    </>
  )
}
