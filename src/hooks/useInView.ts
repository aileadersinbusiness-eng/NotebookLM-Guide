import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  threshold?: number | number[];
}

export function useInView(options: UseInViewOptions = {}): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.once && element) {
          observer.unobserve(element);
        }
      } else if (!options.once) {
        setInView(false);
      }
    }, {
      rootMargin: options.margin || '0px',
      threshold: options.threshold || 0.1,
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.once, options.margin, options.threshold]);

  return [ref, inView];
}
