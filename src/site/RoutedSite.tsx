import React from 'react';
import RegloSite from './RegloSite';
import { pageFromPath, pathFromPage, LOGIN_URL, FAKE_LOGIN_PATH } from './routes';
import { openMailto, venditeMail, assistenzaMail } from './mailto';

/**
 * Sincronizza la navigazione interna del design (state.page) con l'URL.
 *
 * Sta fuori da RegloSite di proposito: quel file è un porting fedele del
 * riferimento e viene rigenerato da tools/port-logic.mjs, quindi non deve
 * contenere modifiche scritte a mano.
 */
/** Un indirizzo non mappato non esiste: si mostra la 404 del design. */
function pageForCurrentUrl(): string {
  return pageFromPath(window.location.pathname) ?? '404';
}

const Base = RegloSite as unknown as new (props: Record<string, never>) => React.Component<
  Record<string, never>,
  { page: string }
> & {
  componentDidMount(): void;
  componentDidUpdate(p: unknown): void;
  componentWillUnmount(): void;
  renderVals(): Record<string, unknown>;
};

class RoutedSite extends Base {
  private _lastPath = '';

  constructor(props: Record<string, never>) {
    super(props);
    this.state = { ...this.state, page: pageForCurrentUrl() };
  }

  private _onPop = () => {
    const page = pageForCurrentUrl();
    if (page !== this.state.page) this.setState({ page });
  };

  /**
   * Il design mostrerebbe il proprio mockup di login. "Accedi" deve invece
   * portare alla web app vera, quindi sostituiamo `goLogin` qui: RegloSite e'
   * generato da tools/port-logic.mjs e non va modificato a mano.
   */
  renderVals() {
    const v = super.renderVals();
    const st = this.state as Record<string, string | undefined>;
    const txt = (k: string) => (st[k] || '').trim();
    // stessa condizione di validita' dei gestori originali: se passa, loro
    // mostrano la conferma e noi apriamo la mail
    const valido = (msg: string, mail: string) =>
      !!msg && /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(mail);

    const sendVendite = v.sendVendite as () => void;
    const sendAssist = v.sendAssist as () => void;

    return {
      ...v,
      goLogin: () => { window.location.href = LOGIN_URL; },

      // TAMPONE: i form del design non inviano niente, vedi ./mailto.ts
      sendVendite: () => {
        const nome = txt('vendNome');
        const mail = txt('vendEmail');
        sendVendite();
        if (!valido(nome, mail)) return;
        const m = venditeMail(nome, mail, txt('vendIstruttori'), txt('vendMsg'));
        openMailto(m.subject, m.body);
      },
      sendAssist: () => {
        const msg = txt('assistMsg');
        const mail = txt('assistEmail');
        sendAssist();
        if (!valido(msg, mail)) return;
        const m = assistenzaMail(mail, msg);
        openMailto(m.subject, m.body);
      },
    };
  }

  componentDidMount() {
    // chi arriva sul vecchio URL del mockup finisce al login vero
    if (window.location.pathname.replace(/\/+$/, '') === FAKE_LOGIN_PATH) {
      window.location.replace(LOGIN_URL);
      return;
    }
    super.componentDidMount();
    this._lastPath = window.location.pathname;
    window.addEventListener('popstate', this._onPop);
  }

  componentDidUpdate(prev: unknown) {
    super.componentDidUpdate(prev);
    // la 404 non ha un URL proprio: resta su quello digitato
    if (this.state.page === '404') return;
    const want = pathFromPage(this.state.page);
    if (want !== window.location.pathname && want !== this._lastPath) {
      this._lastPath = want;
      window.history.pushState({}, '', want);
    } else {
      this._lastPath = window.location.pathname;
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount?.();
    window.removeEventListener('popstate', this._onPop);
  }
}

export default RoutedSite;
