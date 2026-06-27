import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServiceDetailPage from './pages/ServiceDetailPage'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:slug" element={<ServiceDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  )
}
