import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    name: 'Ahmed Rahman',
    role: 'Umrah Pilgrim',
    rating: 5,
    quote:
      'Our Umrah trip was flawless from start to finish. The hotel was steps from the Haram and the team guided us at every stage. Truly stress-free and spiritual.',
    initials: 'AR',
    color: 'bg-primary',
  },
  {
    name: 'Priya Sharma',
    role: 'Maldives Holiday',
    rating: 5,
    quote:
      'Booked our honeymoon to the Maldives and it exceeded every expectation. Great prices, beautiful resort and the coordinator was available 24/7. Highly recommend!',
    initials: 'PS',
    color: 'bg-accent-600',
  },
  {
    name: 'Mohammed Faisal',
    role: 'UAE Visa & Tour',
    rating: 5,
    quote:
      'My UAE visa was approved in record time and the Dubai tour was perfectly planned. Professional, transparent and genuinely caring. My family travels only with Sky Fall International now.',
    initials: 'MF',
    color: 'bg-primary-600',
  },
]

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-24">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-100/60 blur-3xl" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Travellers Say"
          subtitle="Real stories from thousands of happy pilgrims, families and explorers."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl bg-white p-7 shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-100" />

              {/* stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-heading text-sm font-bold text-white ${t.color}`}
                >
                  {t.initials}
                </span>
                <div>
                  <div className="font-heading font-semibold text-primary-950">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
