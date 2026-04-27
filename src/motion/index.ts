// Centralized motion tokens. Use these everywhere — never hardcode springs.

export const SPRING = {
  default: { type: 'spring' as const, stiffness: 100, damping: 20 },
  snappy:  { type: 'spring' as const, stiffness: 220, damping: 24 },
  soft:    { type: 'spring' as const, stiffness: 70,  damping: 18 },
  overshoot: { type: 'spring' as const, stiffness: 260, damping: 14 },
} as const;

export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuart: [0.25, 1, 0.5, 1] as const,
};

export const DURATION = {
  fast:   0.18,
  base:   0.32,
  slow:   0.6,
  hero:   0.8,
} as const;
