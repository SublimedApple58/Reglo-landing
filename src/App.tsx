import RoutedSite from './site/RoutedSite';

/**
 * Il design gestisce la navigazione internamente (state.page); RoutedSite la
 * tiene allineata all'URL. Il rewrite catch-all in vercel.json fa sì che ogni
 * slug serva index.html.
 */
function App() {
  return <RoutedSite />;
}

export default App;
