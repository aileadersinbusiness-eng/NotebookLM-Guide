import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollAnimation(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = performance.now();
      const currentPosition = window.scrollY;
      const timeDelta = now - lastTime;
      const positionDelta = currentPosition - lastPosition;

      if (timeDelta > 0) {
        const currentVelocity = positionDelta / timeDelta;
        setVelocity(currentVelocity);
      }

      setLastPosition(currentPosition);
      setLastTime(now);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastPosition, lastTime]);

  return velocity;
}
