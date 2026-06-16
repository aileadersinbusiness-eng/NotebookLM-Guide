'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ScrollTriggerProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function ScrollTrigger({
  children,
  variants = defaultVariants,
  delay = 0,
  once = true,
  className = '',
}: ScrollTriggerProps) {
  const [ref, inView] = useInView({ once, margin: '-100px' });
  const prefersReducedMotion = usePrefersReducedMotion();

  const reducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const finalVariants = prefersReducedMotion ? reducedVariants : variants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={finalVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
