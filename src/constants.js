// ------------------------------------------------------------------
//  Central place for site-wide brand, contact details & links.
//  Replace the placeholder phone number / email with the real ones.
// ------------------------------------------------------------------

// Single source of truth for the brand name & tagline.
export const BRAND = {
  name: 'Sky Fall International',
  line1: 'Sky Fall', // logo — first (bold) line
  line2: 'International', // logo — second (small) line
  tagline: 'Where Dreams Come True',
  parent: 'Al Faz International General Trading LLC',
}

// WhatsApp number in international format (no +, spaces or dashes).
export const WHATSAPP_NUMBER = '971543560908'

export const WHATSAPP_MESSAGE = `Hello ${BRAND.name}, I would like to know more about your travel packages.`

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

// Google Apps Script Web App URL that appends enquiry-form submissions to a Google Sheet.
// Setup instructions + the script to paste are in google-apps-script.gs at the project root.
// Until you replace this placeholder, the form falls back to sending the enquiry via WhatsApp.
export const GOOGLE_SHEETS_URL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'

export const CONTACT = {
  phoneDisplay: '+971 54 356 0908',
  phoneHref: 'tel:+971543560908',
  email: 'info@skyfallinternational.com',
  address: [
    'Al Faz International General Trading LLC',
    'M2 Floor, Burj Nahar Complex, Entrance 2',
    'A5 Block, Office No: 06',
    'Muteena, Deira, Dubai, UAE',
  ],
  // Google Maps search query for the embedded map
  mapQuery: 'Burj Nahar Complex, Muteena, Deira, Dubai',
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
  { label: 'Contact', to: 'contact' },
]
