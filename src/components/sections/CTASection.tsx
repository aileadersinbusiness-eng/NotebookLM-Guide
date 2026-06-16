'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { containerVariants, itemVariants } from '@/lib/animations';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onStartQuiz?: () => void;
}

export function CTASection({ onStartQuiz }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <ScrollTrigger>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 backdrop-blur-sm">
                <Sparkles size={16} className="text-accent-400" />
                <span className="text-sm text-accent-300">Ready to get started?</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
            >
              Your Business Already Contains
              <span className="text-gradient block mt-2">Valuable Knowledge</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed"
            >
              The challenge isn&rsquo;t creating more information. It&rsquo;s making the information
              you already have easier to find, understand, and use.
            </motion.p>

            {/* Benefit points */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12"
            >
              {[
                {
                  title: 'Save Time',
                  description: 'Cut research and knowledge discovery time by 60-80%',
                },
                {
                  title: 'Improve Decisions',
                  description: 'Access insights faster with searchable knowledge bases',
                },
                {
                  title: 'Scale Knowledge',
                  description: 'Let your team learn from existing documents automatically',
                },
              ].map((benefit) => (
                <motion.div
                  key={benefit.title}
                  className="p-4 rounded-lg glass-effect"
                  whileHover={{ y: -4 }}
                >
                  <h3 className="font-semibold text-accent-400 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                variant="default"
                size="lg"
                onClick={onStartQuiz}
                className="w-full sm:w-auto group"
              >
                Discover Your Opportunities
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://notebooklm.google.com', '_blank')}
                className="w-full sm:w-auto"
              >
                Explore NotebookLM
              </Button>
            </motion.div>

            {/* Trust statement */}
            <motion.p
              variants={itemVariants}
              className="mt-12 text-sm text-slate-500"
            >
              Join thousands of businesses already using NotebookLM to transform their knowledge.
            </motion.p>
          </motion.div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
