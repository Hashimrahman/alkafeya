import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { services } from '../data/services'

export default function ServicesSection() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Jump to a slide when a position indicator is clicked.
  const scrollToIndex = (i) => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const ratio = services.length > 1 ? i / (services.length - 1) : 0
    el.scrollTo({ left: ratio * max, behavior: 'smooth' })
  }

  // Keep the active indicator in sync with the scroll position.
  const handleTrackScroll = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const frac = max > 0 ? el.scrollLeft / max : 0
    setActiveIndex(Math.round(frac * (services.length - 1)))
  }

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
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="container-px">
        {/* Header with carousel controls */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Our Services
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
              Complete Travel, Visa &amp; Business Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              From company formation and UAE visas to worldwide travel and study abroad — explore
              what we do best.
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

        {/* Carousel track — ~1 card on mobile, ~2.5 on desktop */}
        <div
          ref={trackRef}
          onScroll={handleTrackScroll}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.slug}
                data-slide
                className="shrink-0 basis-[85%] snap-start sm:basis-[55%] lg:basis-[40%]"
              >
                <article className="group relative flex h-[440px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 to-primary-950 shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent" />

                  <div className="relative p-6 sm:p-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-950 shadow">
                      <Icon className="h-3.5 w-3.5" />
                      {service.tag}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{service.short}</p>
                    <Link
                      to={`/service/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-950 transition-all hover:bg-accent"
                    >
                      Know More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </div>
            )
          })}
        </div>

        {/* Position indicators (lines) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((service, i) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${service.title}`}
              aria-current={activeIndex === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-primary' : 'w-4 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
