import { Star, ShieldCheck, Plane } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Travellers' },
  { value: '120+', label: 'Destinations' },
]

const IMG_AIRPLANE =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop'
const IMG_DUBAI =
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop'
const IMG_MALDIVES =
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80&auto=format&fit=crop'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-px relative z-10 grid w-full items-center gap-12 pt-28 pb-16 lg:grid-cols-2 lg:gap-10">
        {/* Left — text */}
        <div>
          {/* Eyebrow badge */}
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary">
            <Plane className="h-4 w-4 -rotate-45 text-accent-500" />
            UK • UAE • Visa • Study Abroad
          </span>

          <h1 className="animate-fade-up mt-6 font-heading text-4xl font-extrabold leading-tight text-primary-950 sm:text-5xl">
            <span className="block">
              Begin Your <span className="text-accent-500">Journey</span> With Us
            </span>
            <span className="mt-3 block font-heading text-2xl font-semibold text-primary-700 sm:text-3xl">
              Your Travel Partner
            </span>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-gray-600"
            style={{ animationDelay: '0.1s' }}
          >
            Sky Fall International — UK Visa, UAE Visa, Schengen Visa, Air
            Ticketing &amp; Study Abroad, planned end-to-end so you can simply
            enjoy the journey.
          </p>

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

          {/* Stats strip */}
          <div
            className="animate-fade-up mt-10 grid max-w-xl grid-cols-3 gap-4 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur-sm"
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

        {/* Right — image collage */}
        <div className="animate-fade-up relative mx-auto w-full max-w-md lg:max-w-none">
          {/* decorative accents (behind images via DOM order) */}
          <div className="pointer-events-none absolute -right-6 -top-8 h-44 w-44 rounded-3xl bg-accent/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-6 h-44 w-44 rounded-full bg-primary/15 blur-2xl" />

          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={IMG_AIRPLANE}
              alt="Aeroplane wing above the clouds"
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-xl sm:h-64"
            />
            <img
              src={IMG_DUBAI}
              alt="Dubai skyline"
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover shadow-lg sm:h-48"
            />
            <img
              src={IMG_MALDIVES}
              alt="Maldives overwater villas"
              loading="lazy"
              className="h-40 w-full rounded-2xl object-cover shadow-lg sm:h-48"
            />
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-gray-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <div className="font-heading text-base font-bold text-primary-950">100% Trusted</div>
              <div className="text-xs text-gray-500">IATA &amp; Govt. approved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
