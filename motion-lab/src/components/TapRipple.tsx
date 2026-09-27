import { interpolate } from 'remotion';
import { clamp01 } from './geometry';

export type TapRippleProps = {
  x: number;
  y: number;
  /** 0..1 lungo tutto il gesto: arrivo, pressione, onda, uscita */
  progress: number;
  size?: number;
};

/**
 * Indicatore di tocco stile registrazione schermo iOS: il polpastrello
 * arriva, preme (si schiaccia), rilascia un'onda che si allarga e svanisce.
 */
export const TapRipple: React.FC<TapRippleProps> = ({ x, y, progress, size = 46 }) => {
  const p = clamp01(progress);
  if (p <= 0 || p >= 1) return null;

  const arrive = interpolate(p, [0, 0.22], [0, 1], { extrapolateRight: 'clamp' });
  const press = interpolate(p, [0.22, 0.36, 0.5], [1, 0.82, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const leave = interpolate(p, [0.62, 1], [1, 0], { extrapolateLeft: 'clamp' });
  const wave = interpolate(p, [0.34, 0.95], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ position: 'absolute', left: x, top: y, width: 0, height: 0, zIndex: 30 }}>
      <div
        style={{
          position: 'absolute',
          left: -size / 2,
          top: -size / 2,
          width: size,
          height: size,
          borderRadius: '50%',
          border: '2px solid rgba(27,27,31,0.55)',
          transform: `scale(${1 + wave * 1.6})`,
          opacity: wave > 0 ? (1 - wave) * 0.9 : 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: -size / 2,
          top: -size / 2,
          width: size,
          height: size,
          borderRadius: '50%',
          background: 'rgba(27,27,31,0.22)',
          border: '2px solid rgba(255,255,255,0.9)',
          boxShadow: '0 6px 18px rgba(0,0,0,0.18)',
          transform: `scale(${interpolate(arrive, [0, 1], [1.5, 1]) * press})`,
          opacity: arrive * leave,
        }}
      />
    </div>
  );
};
