/**
 * I tre moduli .jsx del design sono IIFE che si appoggiano a `React` e
 * `ReactDOM` globali e si registrano su `window`. Questo file li prepara e
 * DEVE essere importato prima di loro: gli import ES vengono valutati in
 * ordine, quindi basta tenerlo per primo in index.ts.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM & typeof ReactDOMClient;
  }
}

window.React = React;
window.ReactDOM = { ...ReactDOM, ...ReactDOMClient };
