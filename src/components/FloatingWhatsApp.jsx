import { Phone } from 'lucide-react'
import { WHATSAPP_LINK, CONTACT } from '../constants'
import WhatsAppIcon from './WhatsAppIcon'

// Floating contact buttons fixed to the bottom-right on every page:
// a Call button stacked above the WhatsApp button (both use the same number).
export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 sm:bottom-7 sm:right-7">
      {/* Call */}
      <a
        href={CONTACT.phoneHref}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary-800 hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition-all hover:bg-whatsapp-dark hover:scale-105"
      >
        {/* pulsing ring */}
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  )
}
