import Navbar from './components/Navbar'
import LandingSplash from './components/LandingSplash'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Fixed full-screen landing image (with the ad ticker), stays pinned */}
      <LandingSplash />

      {/* Everything below sits one viewport down and scrolls UP over the landing image */}
      <div className="relative z-10 mt-[100vh] bg-white shadow-[0_-24px_60px_-15px_rgba(11,48,82,0.35)]">
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
          <Packages />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
