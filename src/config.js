export const WHATSAPP_NUMBER = '542346573808'

export const INSTAGRAM_HANDLE = '@blue.eyes.ch'
export const INSTAGRAM_URL = 'https://instagram.com/blue.eyes.ch'

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
