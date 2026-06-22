import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const coreServices = [
  {
    title: 'Umrah Services',
    tag: 'Spiritual',
    description: 'Visa, flights and 5-star stays near the Haram with full guided assistance.',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Worldwide Air Ticketing',
    tag: 'Travel',
    description: 'Best-fare domestic & international flights with flexible dates and 24/7 support.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'UAE Business Setup',
    tag: 'UAE',
    description: 'Company formation, trade licenses, PRO and Amer & Tasheel services made simple.',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Study Abroad',
    tag: 'Europe & Beyond',
    description: 'Admissions and student visas for the UK, Germany, Ireland, Canada and more.',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Holiday Packages',
    tag: 'Tourism',
    description: 'Curated domestic and international getaways tailored to your budget and dates.',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80&auto=format&fit=crop',
  },
]

export default function Packages() {
  const trackRef = useRef(null)

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const slide = el.querySelector('[data-slide]')
    const amount = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.5
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Auto-advance the carousel; pause on hover/touch and honour reduced-motion.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let paused = false
    const pause = () => {
      paused = true
    }
    const resume = () => {
      paused = false
    }

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', resume, { passive: true })

    const id = setInterval(() => {
      if (paused) return
      const slide = el.querySelector('[data-slide]')
      const amount = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.5
      // Loop back to the start once the end is reached.
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: amount, behavior: 'smooth' })
      }
    }, 3500)

    return () => {
      clearInterval(id)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resume)
    }
  }, [])

  return (
    <section id="packages" className="bg-white py-20 sm:py-24">
      <div className="container-px">
        {/* Header with carousel controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What We Do Best
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A quick look at the services our clients rely on most — swipe to explore.
            </p>
          </div>

          {/* Prev / Next (desktop) */}
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track — ~1 slide on mobile, ~2.5 on desktop */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {coreServices.map((service) => (
            <div
              key={service.title}
              data-slide
              className="shrink-0 basis-[85%] snap-start sm:basis-[55%] lg:basis-[40%]"
            >
              <article className="group relative h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-primary-950 shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* readability gradient over the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-950 shadow">
                    {service.tag}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {service.description}
                  </p>
                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    offset={-72}
                    className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="mt-4 text-center text-xs text-gray-400 sm:hidden">Swipe to see more →</p>
      </div>
    </section>
  )
}
