export type Point = { x: number; y: number };

/** Punto su una bezier quadratica. */
export const quadPoint = (a: Point, c: Point, b: Point, t: number): Point => {
  const u = 1 - t;
  return {
    x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
    y: u * u * a.y + 2 * u * t * c.y + t * t * b.y,
  };
};

/** Tangente (non normalizzata) su una bezier quadratica. */
export const quadTangent = (a: Point, c: Point, b: Point, t: number): Point => ({
  x: 2 * (1 - t) * (c.x - a.x) + 2 * t * (b.x - c.x),
  y: 2 * (1 - t) * (c.y - a.y) + 2 * t * (b.y - c.y),
});

/**
 * Punto di controllo per una curva "elegante" fra a e b: il punto medio
 * spostato in perpendicolare di `bend` volte la distanza (segno = lato).
 */
export const bendControl = (a: Point, b: Point, bend: number): Point => {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return { x: mx - dy * bend, y: my + dx * bend };
};

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
