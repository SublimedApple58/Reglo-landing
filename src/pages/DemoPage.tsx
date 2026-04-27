import { useEffect } from 'react';
import { CAL_BOOKING_URL } from '../lib/booking';

export default function DemoPage() {
  useEffect(() => {
    window.location.replace(CAL_BOOKING_URL);
  }, []);
  return (
    <main className="min-h-[100dvh] grid place-items-center bg-paper">
      <p className="text-sm text-ink-500 font-mono">Reindirizzamento al calendario…</p>
    </main>
  );
}
