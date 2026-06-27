import {
  Building2,
  BadgeCheck,
  Plane,
  Globe,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-scroll'
import SectionHeading from './SectionHeading'

const serviceCategories = [
  {
    icon: Building2,
    title: 'UAE Services',
    items: [
      'Company Formation',
      'Business Setup',
      'External Approvals',
      'Trade Licenses — New & Renewal',
      'Ejari, Istidama & Office Spaces',
      'PRO Services',
      'Amer & Tasheel Works',
    ],
  },
  {
    icon: BadgeCheck,
    title: 'UAE Visa Services',
    items: ['Golden Visa', 'Freelance Visa', 'Visit Visa', 'Spouse Visa'],
  },
  {
    icon: Plane,
    title: 'Travel Services',
    items: [
      'Worldwide Air Ticketing',
      'GCC Tourist Visa',
      'Travel Insurance',
      'Holiday Packages',
      'Umrah Services',
      'Global Visa Assistance',
      'Documents Attestation',
      'Passport Services',
      'Hotel Reservation',
    ],
  },
  {
    icon: Globe,
    title: 'Europe Services',
    items: [
      'Student Visa (Higher Studies)',
      'UK Visit Visa (6 Months)',
      'Schengen Visa',
      'Travel Packages',
      'Property Lending Services',
      'Travel Guidance',
      'Money Transfer',
      'Airport Pickup & Drop',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad Services',
    items: ['United Kingdom', 'Germany', 'Austria', 'Ireland', 'Canada'],
    note: "Bachelor's, Master's & diploma courses",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Travel, Visa & Business Solutions"
          subtitle="From company formation and UAE visas to worldwide travel and study abroad — everything you need, handled under one roof."
        />

        {/* Masonry layout (two columns) — cleanly packs categories of very different list lengths */}
        <div className="mt-14 gap-6 sm:columns-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.title}
                className="group mb-6 flex break-inside-avoid flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-950">
                      {category.title}
                    </h3>
                    <span className="text-xs font-medium text-accent-600">
                      {category.items.length} services
                    </span>
                  </div>
                </div>

                {/* Service list */}
                <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {category.note && (
                  <p className="mt-3 text-xs italic text-gray-400">{category.note}</p>
                )}

                <Link
                  to="contact"
                  smooth
                  duration={500}
                  offset={-72}
                  className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-600"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl bg-primary-50 px-6 py-8 text-center sm:flex-row sm:gap-6">
          <p className="font-heading text-lg font-semibold text-primary-950">
            Don't see the service you're looking for?
          </p>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-72}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-800 hover:shadow-xl"
          >
            Talk to Our Experts
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
