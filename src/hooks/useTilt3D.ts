import { useEffect, useRef, useState } from 'react';

export function useTilt3D(maxTilt = 14, restX = -5, restY = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: restX, y: restY });
  const rafRef = useRef<number>(0);
  const restRef = useRef({ x: restX, y: restY });

  useEffect(() => {
    restRef.current = { x: restX, y: restY };
  }, [restX, restY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setTilt({ x: -dy * maxTilt, y: dx * maxTilt });
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setTilt(restRef.current));
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [maxTilt]);

  return { ref, tilt };
}
