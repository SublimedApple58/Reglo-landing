/**
 * Title, description e canonical per pagina.
 *
 * Il sito e' una SPA: index.html ha un solo <title> e una sola description,
 * quindi tutte e 15 le rotte si presentavano ai motori con lo stesso titolo.
 * Qui ogni vista ha i suoi, applicati al cambio pagina insieme al canonical.
 *
 * Limite noto: essendo applicati da JS, li vede chi esegue JavaScript
 * (Google lo fa; diversi crawler e le preview dei social no). La soluzione
 * completa e' il prerender delle rotte in build — vedi il report dell'audit.
 */
import { PAGE_TO_PATH } from './routes';

/** Host canonico: reglo.it risponde 307 verso www. */
export const ORIGIN = 'https://www.reglo.it';

const SUFFIX = ' | Reglo';

type Meta = { title: string; description: string };

/** Chiavi = `page` di RegloSite, le stesse di PAGE_TO_PATH. */
const META: Record<string, Meta> = {
  home: {
    title: "L'autoscuola del futuro",
    description:
      "Reglo e' la piattaforma operativa per autoscuole: agenda guide, slot automatici, pagamenti e comunicazioni in un'unica app. Slot pieni, meno telefonate.",
  },
  core: {
    title: 'Prenotazioni intelligenti',
    description:
      "Orari, chiusure e limiti li decidi una volta: l'agenda li rispetta da sola. Gli allievi prenotano dall'app solo negli slot che hai aperto tu.",
  },
  prezzi: {
    title: 'Prezzi',
    description:
      'A partire da 26 € al mese per istruttore, migrazione inclusa e nessun costo nascosto. Moduli aggiuntivi attivabili su richiesta.',
  },
  novita: {
    title: 'Novita e changelog',
    description:
      'Tutto quello che rilasciamo su Reglo, in ordine: nuove funzioni, miglioramenti e idee arrivate dalle autoscuole.',
  },
  istruttori: {
    title: 'Gestione degli istruttori',
    description:
      "Ogni istruttore vede le sue guide e le sue ore. Ferie, malattie e cambi orario si ricollocano senza una telefonata in segreteria.",
  },
  segretaria: {
    title: 'Segretaria Virtuale',
    description:
      "Risponde al telefono quando la segreteria e' occupata: dice gli orari, prende le prenotazioni e ti passa solo quello che conta.",
  },
  rinnovi: {
    title: 'Rinnovi automatici',
    description:
      "Reglo avvisa gli allievi prima che la patente scada e propone il medico piu' vicino: il rinnovo si prenota dall'app.",
  },
  med: {
    title: 'Rinnovo patente digitale',
    description:
      'Documenti, questionario patologie e firma dall app: il medico trova le pratiche gia controllate e l autoscuola non gestisce piu carta.',
  },
  team: {
    title: 'Il team',
    description:
      "Chi c'e' dietro Reglo: fondatori, sviluppo, supporto e le persone che parlano ogni giorno con le autoscuole.",
  },
  contatti: {
    title: 'Contatti',
    description:
      'Per una demo, per i prezzi o per un problema sul gestionale: scrivici o prenota una call con il team Reglo.',
  },
  vendite: {
    title: 'Contatta le vendite',
    description:
      "Ti aiutiamo a scegliere il piano, a vedere Reglo sulla tua autoscuola e a passare dal gestionale che usi oggi.",
  },
  assistenza: {
    title: "Contatta l'assistenza",
    description:
      'Domande sul gestionale, problemi da segnalare o funzioni da proporre: risponde una persona, non un ticket.',
  },
  soon: {
    title: 'Reglo Road',
    description: 'Questa pagina sta arrivando. Intanto puoi vedere Reglo dal vivo o scriverci.',
  },
  privacy: {
    title: 'Privacy policy',
    description:
      'Come Reglo tratta i dati raccolti dal sito e i dati degli allievi dentro la piattaforma, e quali sono i tuoi diritti.',
  },
  termini: {
    title: 'Termini e condizioni',
    description:
      "Il contratto del servizio Reglo: licenza d'uso, cosa e' incluso nel canone, moduli opzionali e condizioni di recesso.",
  },
};

const NOT_FOUND: Meta = {
  title: 'Pagina non trovata',
  description: 'La pagina che cerchi non esiste piu o non e mai esistita. Torna alla home di Reglo.',
};

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Allinea title, description, canonical e Open Graph alla vista corrente. */
export function applySeo(page: string): void {
  const meta = META[page] ?? NOT_FOUND;
  const path = PAGE_TO_PATH[page] ?? window.location.pathname;
  const url = ORIGIN + path;

  document.title = meta.title + SUFFIX;
  setMeta('description', meta.description);
  setCanonical(url);
  setProperty('og:title', meta.title + SUFFIX);
  setProperty('og:description', meta.description);
  setProperty('og:url', url);
  setMeta('twitter:title', meta.title + SUFFIX);
  setMeta('twitter:description', meta.description);
}
