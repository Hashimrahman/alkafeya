import LandingSplash from '../components/LandingSplash'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      {/* Fixed full-screen landing image (with the ad ticker), stays pinned */}
      <LandingSplash />

      {/* Everything below sits one viewport down and scrolls UP over the landing image */}
      <div className="relative z-10 mt-[100vh] bg-white shadow-[0_-24px_60px_-15px_rgba(11,48,82,0.35)]">
        <main>
          <Hero />
          <ServicesSection />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
