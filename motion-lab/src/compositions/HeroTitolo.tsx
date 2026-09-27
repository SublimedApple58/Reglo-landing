import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { colors, fontFamily } from '../brand';

export type HeroTitoloProps = {
  titolo: string;
  sottotitolo: string;
};

/**
 * Prima prova: il titolo della sezione loghi che entra parola per parola,
 * poi logo e sottotitolo. Tutto guidato da useCurrentFrame (niente CSS
 * animations: in Remotion non vengono renderizzate).
 */
export const HeroTitolo: React.FC<HeroTitoloProps> = ({ titolo, sottotitolo }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const parole = titolo.split(' ');
  const passo = Math.round(0.08 * fps);

  const logoIn = spring({ frame: frame - Math.round(0.2 * fps), fps, config: { damping: 200 } });

  const sottoStart = Math.round(0.5 * fps) + parole.length * passo;
  const sottoIn = spring({ frame: frame - sottoStart, fps, config: { damping: 200 } });

  // uscita dolce nell'ultimo mezzo secondo, cosi' il loop in studio non scatta
  const uscita = interpolate(frame, [durationInFrames - 0.5 * fps, durationInFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily,
        opacity: uscita,
      }}
    >
      <Img
        src={staticFile('logo-reglo-dark.png')}
        style={{
          height: 64,
          marginBottom: 56,
          opacity: logoIn,
          transform: `translateY(${interpolate(logoIn, [0, 1], [16, 0])}px)`,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: 1640,
          columnGap: 26,
          rowGap: 6,
        }}
      >
        {parole.map((parola, i) => {
          const p = spring({
            frame: frame - Math.round(0.5 * fps) - i * passo,
            fps,
            config: { damping: 20, stiffness: 200 },
          });
          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                fontSize: 104,
                fontWeight: 800,
                letterSpacing: -4,
                lineHeight: 1.06,
                color: colors.black,
                opacity: p,
                transform: `translateY(${interpolate(p, [0, 1], [40, 0])}px)`,
              }}
            >
              {parola}
            </span>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 44,
          fontSize: 36,
          fontWeight: 500,
          color: colors.grey500,
          opacity: sottoIn,
          transform: `translateY(${interpolate(sottoIn, [0, 1], [20, 0])}px)`,
        }}
      >
        {sottotitolo}
      </div>
    </AbsoluteFill>
  );
};
