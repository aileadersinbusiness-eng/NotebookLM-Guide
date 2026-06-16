'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface AnimatedMetricsProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedMetrics({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2.5,
}: AnimatedMetricsProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, inView] = useInView({ once: true });

  useEffect(() => {
    if (!inView) return;

    let animationFrameId: number;
    let startTime: number;
    let currentValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      currentValue = Math.floor(value * progress);
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p className="text-slate-300 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}
