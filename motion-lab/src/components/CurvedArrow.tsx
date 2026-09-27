import { bendControl, clamp01, quadPoint, quadTangent, type Point } from './geometry';
import { colors } from '../brand';

export type CurvedArrowProps = {
  from: Point;
  to: Point;
  /** curvatura: frazione della distanza, il segno sceglie il lato */
  bend?: number;
  /** punto di controllo esplicito (vince su bend) */
  control?: Point;
  /** 0..1: dove e' arrivata la testa */
  head: number;
  /** 0..1: da dove parte la coda (la freccia "vola" se tail sale dopo head) */
  tail?: number;
  color?: string;
  width?: number;
  opacity?: number;
};

const STEPS = 48;

/**
 * Freccia curva che "vola": disegna solo il tratto di curva fra tail e head
 * e mette la punta orientata sulla tangente. Tutto calcolato per frame,
 * niente dasharray ne' getPointAtLength.
 */
export const CurvedArrow: React.FC<CurvedArrowProps> = ({
  from,
  to,
  bend = 0.25,
  control,
  head,
  tail = 0,
  color = colors.ink,
  width = 3,
  opacity = 1,
}) => {
  const h = clamp01(head);
  const t0 = clamp01(tail);
  if (h <= t0 + 0.001) return null;

  const c = control ?? bendControl(from, to, bend);
  let d = '';
  for (let i = 0; i <= STEPS; i++) {
    const t = t0 + ((h - t0) * i) / STEPS;
    const p = quadPoint(from, c, to, t);
    d += `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
  }

  const tip = quadPoint(from, c, to, h);
  const tg = quadTangent(from, c, to, h);
  const angle = (Math.atan2(tg.y, tg.x) * 180) / Math.PI;
  // la punta compare subito e sparisce quando la coda la raggiunge
  const tipOpacity = clamp01((h - t0) * 12);

  return (
    <g opacity={opacity}>
      <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
      <g transform={`translate(${tip.x} ${tip.y}) rotate(${angle})`} opacity={tipOpacity}>
        <circle r={width * 5} fill={color} opacity={0.08} />
        <path
          d={`M ${-width * 3.6} ${-width * 2.6} L 0 0 L ${-width * 3.6} ${width * 2.6}`}
          fill="none"
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
};
