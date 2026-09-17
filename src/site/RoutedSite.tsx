import React from 'react';
import RegloSite from './RegloSite';
import { pageFromPath, pathFromPage } from './routes';

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
> & { componentDidMount(): void; componentDidUpdate(p: unknown): void; componentWillUnmount(): void };

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

  componentDidMount() {
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
