import { interpolate, Img, staticFile } from 'remotion';
import { colors, fontFamily } from '../brand';
import { clamp01 } from './geometry';

export type NotificationProps = {
  /** 0..1 (spring): il banner scende dall'alto */
  enter: number;
  /** 0..1: pressione del dito */
  press?: number;
  /** 0..1: il banner si ritira (verso l'alto) e svanisce */
  exit?: number;
  title: string;
  body: string;
  time?: string;
  top?: number;
  /** 'app' = icona Reglo, 'success' = spunta verde (conferma) */
  icon?: 'app' | 'success';
};

/** Banner push stile iOS: vetro chiaro, icona app, titolo e testo. */
export const Notification: React.FC<NotificationProps> = ({
  enter,
  press = 0,
  exit = 0,
  title,
  body,
  time = 'ora',
  top = 54,
  icon = 'app',
}) => {
  const e = enter;
  const x = clamp01(exit);
  if (e <= 0.001 || x >= 0.999) return null;
  const y = interpolate(e, [0, 1], [-150, 0]) - x * 40;
  const scale = (1 - 0.035 * clamp01(press)) * interpolate(x, [0, 1], [1, 0.94]);

  return (
    <div
      style={{
        position: 'absolute',
        left: 10,
        right: 10,
        top,
        padding: '13px 14px',
        borderRadius: 24,
        background: 'rgba(255,255,255,0.86)',
        boxShadow: '0 12px 30px rgba(20,20,30,0.16), 0 0 0 1px rgba(20,20,30,0.04)',
        display: 'flex',
        gap: 11,
        alignItems: 'flex-start',
        transform: `translateY(${y}px) scale(${scale})`,
        opacity: clamp01(e * 1.4) * (1 - x),
        fontFamily,
        zIndex: 20,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          flexShrink: 0,
          borderRadius: 10,
          background: icon === 'success' ? colors.success : colors.white,
          border: icon === 'success' ? 'none' : `1px solid ${colors.line}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon === 'success' ? (
          <svg width="20" height="20" viewBox="0 0 14 14">
            <path
              d="M2.5 7.4 L5.6 10.3 L11.5 3.9"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <Img src={staticFile('logo-reglo-dark.png')} style={{ width: 24, height: 24 }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: colors.black }}>{title}</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: colors.grey600 }}>{time}</span>
        </div>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 500,
            lineHeight: 1.3,
            color: colors.inkSoft,
            marginTop: 2,
          }}
        >
          {body}
        </div>
      </div>
    </div>
  );
};
