export const CAL_BOOKING_URL = 'https://cal.com/reglo/analisi-strategica-autoscuola';

export function trackBookingCTA(source: string) {
  const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === 'function') {
    fbq('trackCustom', 'BookingCTA_Click', { source });
  }
}
