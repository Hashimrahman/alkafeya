import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { CONTACT, WHATSAPP_LINK, WHATSAPP_NUMBER, GOOGLE_SHEETS_URL } from '../constants'

const contactCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [CONTACT.address],
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: [CONTACT.phoneDisplay],
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const sheetsConfigured = GOOGLE_SHEETS_URL && !GOOGLE_SHEETS_URL.includes('PASTE_YOUR')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Fallback: until the Google Sheet is connected, forward the enquiry via WhatsApp.
    if (!sheetsConfigured) {
      const msg = `New enquiry from the website%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`
      globalThis.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener')
      setSubmitted(true)
      setForm({ name: '', phone: '', message: '' })
      return
    }

    // Save the enquiry to Google Sheets via the Apps Script web app.
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('phone', form.phone)
      formData.append('message', form.message)

      // Apps Script web apps redirect cross-origin, so we use no-cors (fire-and-forget).
      await fetch(GOOGLE_SHEETS_URL, { method: 'POST', mode: 'no-cors', body: formData })

      setSubmitted(true)
      setForm({ name: '', phone: '', message: '' })
    } catch {
      setError('Sorry, something went wrong. Please try again or reach us on WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Plan Your Next Journey"
          subtitle="Have a question or ready to book? Reach out and our travel experts will respond quickly."
        />

        {/* Contact info cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {contactCards.map((c) => {
            const Icon = c.icon
            return (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-primary-950">{c.title}</h3>
                  {c.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm leading-relaxed text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
              </a>
            )
          })}
        </div>

        {/* Map + form */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Map + WhatsApp */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                title="Sky Fall International location"
                src="https://www.google.com/maps?q=Hyderabad,Telangana,India&z=12&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl bg-whatsapp p-6 text-white shadow-lg shadow-whatsapp/30 transition-colors hover:bg-whatsapp-dark"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="h-9 w-9" />
                <div>
                  <div className="font-heading text-lg font-semibold">Chat on WhatsApp</div>
                  <div className="text-sm text-white/90">Fastest way to reach us — we reply in minutes</div>
                </div>
              </div>
              <Send className="hidden h-6 w-6 sm:block" />
            </a>
          </div>

          {/* Enquiry form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-primary-950">Send an Enquiry</h3>
            <p className="mt-1 text-sm text-gray-500">
              Fill in your details and we'll get right back to you.
            </p>

            {submitted ? (
              <div className="mt-6 flex flex-col items-center justify-center rounded-xl bg-primary-50 p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-whatsapp" />
                <p className="mt-3 font-heading text-lg font-semibold text-primary-950">
                  Thank you!
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {sheetsConfigured
                    ? "Your enquiry has been received. Our team will be in touch shortly."
                    : "Your enquiry has been prepared in WhatsApp. We'll be in touch shortly."}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-primary hover:text-accent-600"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us where you'd like to go..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {error && (
                  <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
