// ------------------------------------------------------------------
//  Central place for site-wide contact details & links.
//  Replace the placeholder phone number / email with the real ones.
// ------------------------------------------------------------------

// Placeholder WhatsApp number (India format). Replace 9XXXXXXXXX with real digits.
export const WHATSAPP_NUMBER = '919XXXXXXXXX'

export const WHATSAPP_MESSAGE =
  'Hello Al Kafeya Travel Solutions, I would like to know more about your travel packages.'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const CONTACT = {
  phoneDisplay: '+91 9XXX XXX XXX',
  phoneHref: 'tel:+919XXXXXXXXX',
  email: 'info@alkafeyatravel.com',
  address: 'Office #204, Business Bay Tower, Hyderabad, Telangana 500001, India',
}

export const SOCIAL = {
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  whatsapp: WHATSAPP_LINK,
}

// Section ids used for navigation
export const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About Us', to: 'why-choose-us' },
  { label: 'Services', to: 'services' },
  { label: 'Packages', to: 'packages' },
  { label: 'Contact', to: 'contact' },
]
