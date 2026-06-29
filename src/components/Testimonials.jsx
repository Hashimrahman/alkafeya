import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    name: 'Aisha Khan',
    role: "Master's in the UK",
    rating: 5,
    quote:
      'Sky Fall guided me from choosing my university to my student visa. I’m now studying in Manchester — couldn’t have done it without them!',
    initials: 'AK',
    color: 'bg-primary',
  },
  {
    name: 'Rohan Verma',
    role: 'MSc in Germany',
    rating: 5,
    quote:
      'From admissions to the visa interview, the team was with me at every step. Got my Germany student visa completely stress-free.',
    initials: 'RV',
    color: 'bg-accent-600',
  },
  {
    name: 'Sana Sheikh',
    role: 'UK Visit Visa',
    rating: 5,
    quote:
      'My UK visit visa was approved quickly with zero hassle. Professional, responsive and genuinely helpful throughout the process.',
    initials: 'SS',
    color: 'bg-primary-600',
  },
  {
    name: 'Abdullah Rahman',
    role: 'Umrah Pilgrim',
    rating: 5,
    quote:
      'Our Umrah package was flawless — visa, flights and a hotel right by the Haram. A truly blessed, worry-free journey.',
    initials: 'AR',
    color: 'bg-accent-700',
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
          title="What Our Clients Say"
          subtitle="Real stories from our students, travellers and pilgrims."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1.5"
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
