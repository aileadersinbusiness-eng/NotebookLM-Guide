'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UseCase } from '@/types';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { cardHoverVariants } from '@/lib/animations';

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
  onLearnMore?: (useCase: UseCase) => void;
}

export function UseCaseCard({ useCase, index, onLearnMore }: UseCaseCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      custom={index}
    >
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Color accent bar */}
        <div
          className={`h-1 bg-gradient-to-r ${useCase.color}`}
        />

        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl">
              {getIconByName(useCase.icon)}
            </div>
            <span className="text-xs font-semibold px-2 py-1 rounded bg-accent-500/20 text-accent-300">
              {useCase.estimatedTimeSaved}h saved
            </span>
          </div>
          <CardTitle>{useCase.title}</CardTitle>
          <CardDescription>{useCase.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Problem statement */}
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              The Problem
            </p>
            <p className="text-sm text-slate-300">{useCase.problem}</p>
          </div>

          {/* Metrics */}
          <div className="space-y-2 pt-2">
            {useCase.metrics.timeReduction && (
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-accent-400" />
                <span className="text-slate-300">{useCase.metrics.timeReduction}</span>
              </div>
            )}
            {useCase.metrics.effortReduction && (
              <div className="flex items-center gap-2 text-sm">
                <Zap size={16} className="text-accent-400" />
                <span className="text-slate-300">{useCase.metrics.effortReduction}</span>
              </div>
            )}
          </div>

          {/* Example */}
          <div className="pt-2 border-t border-slate-700/30">
            <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              Real Example
            </p>
            <p className="text-sm text-slate-400 italic">&quot;{useCase.example}&quot;</p>
          </div>
        </CardContent>

        <div className="p-6 pt-0">
          <Button
            variant="ghost"
            className="w-full justify-between text-accent-400 hover:text-accent-300 group-hover:translate-x-1 transition-transform"
            onClick={() => onLearnMore?.(useCase)}
          >
            Learn More
            <ArrowRight size={16} />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

function getIconByName(name: string) {
  const iconMap: { [key: string]: string } = {
    BookOpen: '📚',
    PenTool: '✍️',
    BookMarked: '📖',
    TrendingUp: '📈',
    Target: '🎯',
    Zap: '⚡',
    Layers: '📑',
    Users: '👥',
    Briefcase: '💼',
    Lightbulb: '💡',
  };

  return iconMap[name] || '📄';
}
