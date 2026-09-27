import { colors, fontFamily } from '../brand';

export const PHONE = { w: 320, h: 660, bezel: 11, radius: 54 } as const;

export type PhoneMockProps = {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
  /** alza leggermente il telefono (ombra piu' profonda) */
  lift?: number;
  children?: React.ReactNode;
};

/**
 * iPhone minimale: scocca scura, Dynamic Island, tasti laterali.
 * Le coordinate dei figli sono quelle dello schermo (PHONE.w - 2*bezel).
 */
export const PhoneMock: React.FC<PhoneMockProps> = ({
  x,
  y,
  scale = 1,
  opacity = 1,
  lift = 0,
  children,
}) => {
  const b = PHONE.bezel;
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: PHONE.w,
        height: PHONE.h,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        opacity,
        fontFamily,
      }}
    >
      {/* tasti */}
      {[
        { side: 'left', top: 118, h: 30 },
        { side: 'left', top: 170, h: 56 },
        { side: 'left', top: 236, h: 56 },
        { side: 'right', top: 190, h: 86 },
      ].map((k, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            [k.side]: -3,
            top: k.top,
            width: 4,
            height: k.h,
            borderRadius: 2,
            background: '#2a2a33',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: PHONE.radius,
          background: '#0e0e12',
          boxShadow: `0 ${30 + lift * 20}px ${70 + lift * 40}px rgba(20,20,30,${0.22 + lift * 0.1}), inset 0 0 0 1.5px #3a3a44`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: b,
          top: b,
          right: b,
          bottom: b,
          borderRadius: PHONE.radius - b,
          overflow: 'hidden',
          background: colors.white,
        }}
      >
        {children}
        {/* Dynamic Island */}
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            width: 96,
            height: 28,
            marginLeft: -48,
            borderRadius: 16,
            background: '#000',
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

/** Schermata di blocco: sfondo grigio morbido, ora grande, data. */
export const LockScreen: React.FC<{ date?: string }> = ({ date = 'lunedì 15 settembre' }) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background:
        'radial-gradient(120% 80% at 20% 10%, #ffffff 0%, #eeeef3 45%, #d9d9e1 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily,
    }}
  >
    <div style={{ marginTop: 170, fontSize: 18, fontWeight: 600, color: colors.grey500 }}>
      {date}
    </div>
    <div
      style={{
        fontSize: 86,
        fontWeight: 700,
        letterSpacing: -3,
        color: colors.inkSoft,
        lineHeight: 1,
        marginTop: 4,
      }}
    >
      9:41
    </div>
  </div>
);
