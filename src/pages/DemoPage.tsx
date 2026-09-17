import { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../lib/booking';

/** Redirect verso il calendario Cal.com. Nessuna UI di prodotto: solo funzione. */
export default function DemoPage() {
  useEffect(() => {
    window.location.replace(CAL_BOOKING_URL);
  }, []);

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <p style={{ fontSize: 14, color: '#71717A' }}>Reindirizzamento al calendario…</p>
    </main>
  );
}
