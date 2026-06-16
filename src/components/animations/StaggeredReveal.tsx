'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface StaggeredRevealProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

const itemVariants: Variants = {
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

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0 },
  },
};

const reducedMotionItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function StaggeredReveal({
  children,
  delay = 0,
  staggerDelay,
  once = true,
  className = '',
}: StaggeredRevealProps) {
  const [ref, inView] = useInView({ once, margin: '-100px' });
  const prefersReducedMotion = usePrefersReducedMotion();

  const finalContainerVariants = prefersReducedMotion ? reducedMotionVariants : containerVariants;
  const finalItemVariants = prefersReducedMotion ? reducedMotionItemVariants : itemVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={finalContainerVariants}
      transition={{ delay }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={finalItemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
