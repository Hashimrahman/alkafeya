import { MapPin, Clock, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { WHATSAPP_NUMBER } from '../constants'

const packages = [
  {
    name: 'Dubai Delight',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    price: '₹45,000',
    description:
      'Desert safari, Burj Khalifa, Dhow cruise and a city tour — the complete Dubai experience.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    name: 'Maldives Escape',
    location: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: '₹78,000',
    description:
      'Overwater villas, pristine beaches and snorkelling in crystal-clear lagoons. Pure paradise.',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&auto=format&fit=crop',
    tag: 'Honeymoon',
  },
  {
    name: 'European Wonders',
    location: 'France • Switzerland • Italy',
    duration: '8 Days / 7 Nights',
    price: '₹1,35,000',
    description:
      'Paris, the Swiss Alps and the canals of Venice in one unforgettable multi-country tour.',
    image:
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format&fit=crop',
    tag: 'Premium',
  },
  {
    name: 'Umrah Special',
    location: 'Makkah & Madinah',
    duration: '10 Days / 9 Nights',
    price: '₹85,000',
    description:
      'Visa, flights, 5-star hotels near the Haram and guided Ziyarat with full group assistance.',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80&auto=format&fit=crop',
    tag: 'Spiritual',
  },
]

function enquiryLink(pkg) {
  const msg = `Hello Al Kafeya Travel Solutions, I'm interested in the "${pkg.name}" package (${pkg.price}). Please share more details.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Popular Packages"
          title="Handpicked Tours Our Travellers Love"
          subtitle="Ready-to-book getaways at unbeatable prices. Customisation always available — just ask."
        />

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} — ${pkg.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-950 shadow">
                  {pkg.tag}
                </span>
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  <MapPin className="h-4 w-4" />
                  {pkg.location}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Clock className="h-4 w-4 text-primary" />
                  {pkg.duration}
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold text-primary-950">
                  {pkg.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {pkg.description}
                </p>

                <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-xs text-gray-400">Starting from</div>
                    <div className="font-heading text-xl font-bold text-primary">{pkg.price}</div>
                  </div>
                </div>

                <a
                  href={enquiryLink(pkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent hover:text-primary-950"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
