/**
 * Token del sito Reglo, copiati da reglo-landing (stessi hex e stesso font),
 * cosi' le prove qui somigliano a quello che finira' davvero sul sito.
 */
import { loadFont } from '@remotion/google-fonts/Figtree';

export const { fontFamily } = loadFont('normal', {
  weights: ['500', '600', '700', '800'],
  subsets: ['latin'],
});

export const colors = {
  black: '#000000',
  white: '#ffffff',
  ink: '#1b1b1f', // il "nero" dei componenti del sito
  inkSoft: '#24243a',
  grey100: '#ececef',
  grey50: '#f5f5f7',
  line: '#ececf0',
  cardMuted: '#f0f0f4',
  grey300: '#d4d4dc',
  grey400: '#b6b6c2',
  grey500: '#6a6a74',
  grey600: '#8a8a95',
  // accenti gia' usati sul sito (con parsimonia)
  success: '#3f8a64',
  successSoft: '#eaf4ee',
  danger: '#be1250',
} as const;
