/**
 * Segnaposto temporaneo.
 *
 * Il sito è stato svuotato in attesa del nuovo design approvato (HTML grezzo
 * da riprodurre pixel-perfect). Tutte le rotte pubbliche puntano qui finché
 * le pagine reali non vengono innestate — così nessun URL già indicizzato
 * restituisce un errore.
 */
export default function Placeholder() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <p style={{ fontSize: 14, color: '#71717A' }}>Reglo — nuovo sito in arrivo.</p>
    </main>
  );
}
