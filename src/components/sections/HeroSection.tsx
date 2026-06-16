'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

export function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating document icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 md:left-20 text-accent-400/20"
        >
          <FileText size={120} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-32 right-10 md:right-20 text-accent-500/15"
        >
          <FileText size={100} />
        </motion.div>

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-32 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 backdrop-blur-sm">
              <Sparkles size={16} className="text-accent-400" />
              <span className="text-sm text-accent-300">10 Practical Business Uses</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
          >
            Your Business Already Contains
            <span className="text-gradient block mt-2">Valuable Knowledge</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Turn scattered documents, reports, and resources into searchable, interactive knowledge
            bases. Discover how NotebookLM helps consultants and business owners save time,
            improve decisions, and build confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="default"
              size="lg"
              onClick={onGetStarted}
              className="w-full sm:w-auto"
            >
              Discover Your Opportunities
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('guide');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Guide
            </Button>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24 pt-12 md:pt-16 border-t border-slate-700/30"
          >
            {[
              { value: '10+', label: 'Use Cases' },
              { value: '15min', label: 'To Understand' },
              { value: '∞', label: 'Time Saved' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-2xl md:text-4xl font-bold text-accent-400">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="text-accent-400/50" size={24} />
      </motion.div>
    </section>
  );
}
