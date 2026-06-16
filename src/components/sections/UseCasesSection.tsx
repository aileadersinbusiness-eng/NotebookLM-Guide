'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { UseCaseCard } from './UseCaseCard';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { USE_CASES } from '@/lib/constants';
import { UseCase, UserRole } from '@/types';
import { containerVariants, itemVariants } from '@/lib/animations';

interface UseCasesSectionProps {
  selectedRole?: UserRole;
  onLearnMore?: (useCase: UseCase) => void;
}

export function UseCasesSection({ selectedRole, onLearnMore }: UseCasesSectionProps) {
  const filteredUseCases = useMemo(() => {
    if (!selectedRole) return USE_CASES;
    return USE_CASES.filter((useCase) => useCase.relevantRoles.includes(selectedRole));
  }, [selectedRole]);

  return (
    <section id="use-cases" className="py-20 md:py-32">
      <div className="container-custom">
        <ScrollTrigger>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                10 Practical <span className="text-gradient">Business Uses</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Discover how NotebookLM can transform the way you work. Each use case is proven,
                practical, and immediately applicable to your business.
              </p>
            </motion.div>
          </motion.div>
        </ScrollTrigger>

        {/* Use Cases Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredUseCases.map((useCase, index) => (
            <motion.div key={useCase.id} variants={itemVariants}>
              <UseCaseCard
                useCase={useCase}
                index={index}
                onLearnMore={onLearnMore}
              />
            </motion.div>
          ))}
        </motion.div>

        {selectedRole && filteredUseCases.length < USE_CASES.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 p-6 rounded-lg bg-slate-900/30 border border-slate-700/30"
          >
            <p className="text-slate-300">
              Showing {filteredUseCases.length} of {USE_CASES.length} use cases relevant to{' '}
              <span className="text-accent-400 font-semibold capitalize">{selectedRole}</span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
