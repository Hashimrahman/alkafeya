import { Link } from 'react-scroll'
import { Globe, Building2, GraduationCap, Briefcase } from 'lucide-react'
import ServiceTicker from './ServiceTicker'

const SPLASH_IMG = '/bg-enhanced.png'

const landingServices = [
  { icon: Globe, label: 'UK Services' },
  { icon: Building2, label: 'UAE Services' },
  { icon: GraduationCap, label: 'Study Abroad' },
  { icon: Briefcase, label: 'Company Formation' },
]

// Fixed, full-screen landing image that stays pinned while the rest of the page
// scrolls up and over it. The scrolling ad ticker sits at the top.
export default function LandingSplash() {
  return (
    <section
      id="home"
      className="fixed inset-0 z-0 h-screen w-full"
      style={{ background: 'linear-gradient(to bottom, #eaf2fb, #d7e6f4)' }}
      aria-label="Sky Fall International"
    >
      <img
        src={SPLASH_IMG}
        alt="Sky Fall International — Where Dreams Come True"
        className="h-full w-full object-cover object-center"
        loading="eager"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      {/* Scrolling ad ticker, pinned at the top of the landing (below the navbar) */}
      <ServiceTicker />

      {/* Four quick-service cards along the bottom of the landing */}
      <div className="absolute inset-x-0 bottom-10 z-20">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {landingServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.label}
                  to="services"
                  smooth
                  duration={500}
                  offset={-72}
                  className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/60 bg-white/85 px-4 py-3.5 shadow-lg backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors group-hover:bg-accent group-hover:text-primary-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-primary-950 sm:text-base">
                    {service.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
