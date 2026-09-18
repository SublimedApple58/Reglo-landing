/**
 * Dove porta "Accedi" a seconda del dispositivo.
 *
 * Su desktop il pulsante porta al login della web app (vedi LOGIN_URL in
 * ./routes.ts): e' li' che si gestisce l'autoscuola.
 *
 * Su telefono no: la web app non e' pensata per uno schermo da 390px, e chi
 * apre il sito dal telefono vuole l'app Reglo. Quindi "Accedi" porta allo
 * store del dispositivo, che apre l'app se e' gia' installata e la fa
 * scaricare altrimenti.
 *
 * Gli URL sono gli stessi che usa la web app per i link istruttore
 * (`reglo/lib/autoscuole/instructor-link-deeplink.ts`): se cambia l'id App
 * Store o il package Android vanno aggiornati in tutti e due i posti.
 */
import { LOGIN_URL } from './routes';

export const APP_STORE_URL = 'https://apps.apple.com/app/id6759302065';
export const ANDROID_PACKAGE = 'com.tiziano.developer.reglomobile';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=' + ANDROID_PACKAGE;

export type MobilePlatform = 'ios' | 'android' | 'other';

/**
 * Riconoscimento del sistema operativo, non della larghezza della finestra.
 *
 * Qui il media query di ./mobileHero.ts non basta e non va bene: serve sapere
 * QUALE store aprire, e una finestra desktop stretta non e' un telefono (non
 * c'e' nessuna app da installare, mandarla allo store la lascerebbe senza
 * login). Stessa logica di `detectMobilePlatform` nella web app.
 *
 * L'iPad dichiara "Macintosh" da iPadOS 13: lo si riconosce dal fatto che uno
 * schermo tattile con piu' di un dito non esiste sui Mac. L'app supporta il
 * tablet, quindi anche li' si va all'App Store.
 */
export function detectMobilePlatform(
  ua: string = navigator.userAgent,
  touchPoints: number = navigator.maxTouchPoints || 0,
): MobilePlatform {
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  if (/macintosh/i.test(ua) && touchPoints > 1) return 'ios';
  return 'other';
}

/** Store del dispositivo, oppure null se non e' un telefono. */
export function storeUrl(platform: MobilePlatform = detectMobilePlatform()): string | null {
  if (platform === 'ios') return APP_STORE_URL;
  if (platform === 'android') return PLAY_STORE_URL;
  return null;
}

/** Destinazione di "Accedi": lo store sul telefono, la web app altrove. */
export function loginTarget(): string {
  return storeUrl() ?? LOGIN_URL;
}
