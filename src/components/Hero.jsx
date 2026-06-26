import { Link } from 'react-scroll'
import { MessageCircle, Compass, Star, ShieldCheck, Plane } from 'lucide-react'
import { WHATSAPP_LINK } from '../constants'
import ServiceTicker from './ServiceTicker'

const HERO_IMG =
  'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80&auto=format&fit=crop'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Travellers' },
  { value: '120+', label: 'Destinations' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-white"
    >
      {/* Light base gradient — always painted, keeps text readable even if the image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

      {/* Background image (enhancement on top of the light gradient) */}
      <img
        src={HERO_IMG}
        alt="Aerial view of a tropical travel destination"
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
        loading="eager"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      {/* Light overlays — fade the photo into white so dark text stays readable on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />

      {/* Scrolling services ticker overlaid just below the navbar */}
      <ServiceTicker />

      <div className="container-px relative z-10 w-full pt-36 pb-16 sm:pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
            <Plane className="h-4 w-4 -rotate-45 text-accent-500" />
            UK • UAE • Visa • Study Abroad
          </span>

          <h1 className="animate-fade-up mt-6 font-heading text-4xl font-extrabold leading-tight text-primary-950 sm:text-5xl lg:text-6xl">
            <span className="block">
              Begin Your <span className="text-accent-500">Journey</span> With Us
            </span>
            <span className="mt-3 block font-heading text-2xl font-semibold text-primary-700 sm:text-3xl lg:text-4xl">
              Your Travel Partner
            </span>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
            style={{ animationDelay: '0.1s' }}
          >
            Sky Fall International — UK Visa, UAE Visa, Schengen Visa, Air
            Ticketing &amp; Study Abroad, planned end-to-end so you can simply
            enjoy the journey.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '0.2s' }}
          >
            <Link
              to="packages"
              smooth
              duration={600}
              offset={-72}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-primary-950 shadow-xl shadow-accent/30 transition-all hover:bg-accent-400 hover:shadow-2xl"
            >
              <Compass className="h-5 w-5 transition-transform group-hover:rotate-45" />
              Explore Packages
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-all hover:border-primary hover:bg-primary-50"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us on WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent-600" />
              IATA &amp; Govt. Approved
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-5 w-5 fill-accent-500 text-accent-500" />
              4.9/5 from 2,000+ reviews
            </span>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="animate-fade-up mt-14 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur-sm"
          style={{ animationDelay: '0.4s' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-gray-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
