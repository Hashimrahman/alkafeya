import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, Mail, MapPin, GraduationCap } from 'lucide-react'
import { services, getServiceBySlug } from '../data/services'
import { CONTACT, WHATSAPP_NUMBER } from '../constants'
import WhatsAppIcon from '../components/WhatsAppIcon'
import SectionLink from '../components/SectionLink'
import Footer from '../components/Footer'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 pt-[72px] text-center">
        <h1 className="font-heading text-3xl font-bold text-primary-950">Service not found</h1>
        <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </main>
    )
  }

  const Icon = service.icon
  const whatsappMsg = `Hello Sky Fall International, I'd like to know more about your ${service.title}.`
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`
  const otherServices = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <main className="pt-[72px]">
        {/* Banner */}
        <section className="relative isolate overflow-hidden bg-primary-950">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/70 to-primary-900/60" />

          <div className="container-px relative py-16 sm:py-20">
            <SectionLink
              to="services"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-accent-300"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </SectionLink>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-950">
              <Icon className="h-4 w-4" />
              {service.tag}
            </span>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{service.short}</p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-px grid gap-10 lg:grid-cols-3">
            {/* Description + offerings */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-primary-950">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{service.description}</p>

              <h2 className="mt-10 font-heading text-2xl font-bold text-primary-950">
                What We Offer
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span className="text-sm font-medium text-primary-950">{item}</span>
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-4 text-sm italic text-gray-400">{service.note}</p>
              )}

              {service.countries && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-primary-950">
                    Countries We Cover
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {service.countries.map((country) => (
                      <span
                        key={country}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm font-medium text-primary-950"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-600" />
                        {country}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {service.courseTypes && (
                <>
                  <h2 className="mt-10 font-heading text-2xl font-bold text-primary-950">
                    Course Types
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {service.courseTypes.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary"
                      >
                        <GraduationCap className="h-4 w-4 shrink-0" />
                        {course}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <h3 className="font-heading text-lg font-semibold text-primary-950">
                  Enquire about {service.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Talk to our experts — we’ll get back to you quickly.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-whatsapp/30 transition-colors hover:bg-whatsapp-dark"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </a>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-sm">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-accent-600" />
                    {CONTACT.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-accent-600" />
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Other services */}
              <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-primary-950">
                  Other Services
                </h3>
                <ul className="mt-4 space-y-1">
                  {otherServices.map((s) => {
                    const OtherIcon = s.icon
                    return (
                      <li key={s.slug}>
                        <Link
                          to={`/service/${s.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <OtherIcon className="h-4 w-4" />
                          </span>
                          {s.title}
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
