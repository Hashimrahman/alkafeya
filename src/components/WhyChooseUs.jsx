import {
  ShieldCheck,
  UserCheck,
  Headphones,
  BadgeIndianRupee,
  FileCheck2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-scroll'

const features = [
  {
    icon: ShieldCheck,
    title: '100% Trusted',
    description: 'Licensed, IATA-affiliated and trusted by thousands of families for over 15 years.',
  },
  {
    icon: UserCheck,
    title: 'Expert Team',
    description: 'Seasoned travel consultants who know visas, routes and the best seasonal deals.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance before, during and after your trip — wherever you are.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Best Prices',
    description: 'Negotiated airline and hotel rates passed directly to you, with zero hidden fees.',
  },
  {
    icon: FileCheck2,
    title: 'Hassle-Free Visa',
    description: 'End-to-end visa processing with high approval rates and complete documentation help.',
  },
  {
    icon: Sparkles,
    title: 'Tailored Packages',
    description: 'Every itinerary is customised to your budget, dates and travel style.',
  },
]

const highlights = ['Pilgrimage specialists', 'Transparent pricing', 'Personal trip coordinator']

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80&auto=format&fit=crop'

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-20 sm:py-24">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — image + floating card */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={ABOUT_IMG}
              alt="Travellers planning a trip with a map and passport"
              className="h-[420px] w-full object-cover sm:h-[480px]"
              loading="lazy"
            />
          </div>
          {/* decorative accent */}
          <div className="absolute -right-4 -top-4 -z-10 h-28 w-28 rounded-2xl bg-accent/20 lg:-right-6 lg:-top-6 lg:h-40 lg:w-40" />
          <div className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-2xl bg-primary/10 lg:-bottom-6 lg:-left-6 lg:h-40 lg:w-40" />

          {/* Floating stat card */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl sm:left-8 sm:p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <div className="font-heading text-2xl font-bold text-primary-950">50,000+</div>
              <div className="text-sm text-gray-500">Journeys delivered</div>
            </div>
          </div>
        </div>

        {/* Right — heading + features */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Why Choose Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            Travel With Confidence, Every Single Time
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            At Sky Fall International we combine deep expertise with genuine care.
            From your first enquiry to your safe return home, our team makes every step
            simple, transparent and stress-free.
          </p>

          {/* highlight chips */}
          <div className="mt-5 flex flex-wrap gap-3">
            {highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-primary-900 shadow-sm ring-1 ring-gray-100"
              >
                <CheckCircle2 className="h-4 w-4 text-accent-600" />
                {h}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-primary-950">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{f.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Link
            to="contact"
            smooth
            duration={500}
            offset={-72}
            className="mt-9 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-800 hover:shadow-xl"
          >
            Plan My Trip
          </Link>
        </div>
      </div>
    </section>
  )
}
