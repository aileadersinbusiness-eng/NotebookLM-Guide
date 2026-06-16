'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { StaggeredReveal } from '@/components/animations/StaggeredReveal';
import { AnimatedMetrics } from '@/components/animations/AnimatedMetrics';
import { ActionPlan } from '@/types';
import { ArrowRight, Download, Mail, Lightbulb, Calendar } from 'lucide-react';
import { containerVariants, itemVariants, slideUpVariants } from '@/lib/animations';
import { calculateEstimatedSavings } from '@/lib/plan-generator';

interface ActionPlanResultsProps {
  plan: ActionPlan;
  onDownload?: () => void;
  onEmail?: () => void;
}

export function ActionPlanResults({ plan, onDownload, onEmail }: ActionPlanResultsProps) {
  const savings = calculateEstimatedSavings(plan.estimatedMonthlyTimeSaved);

  return (
    <section id="results" className="py-20 md:py-32">
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
                Your Personalized <span className="text-gradient">Action Plan</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Based on your responses, here are your top opportunities to implement NotebookLM
                and the expected impact on your business.
              </p>
            </motion.div>
          </motion.div>
        </ScrollTrigger>

        {/* ROI Summary */}
        <ScrollTrigger>
          <motion.div
            variants={slideUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <Card>
              <CardContent className="pt-8">
                <AnimatedMetrics
                  value={Math.round(plan.estimatedMonthlyTimeSaved)}
                  label="Hours Saved Per Month"
                  suffix="h"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8">
                <AnimatedMetrics
                  value={Math.round(savings.monthlySavings)}
                  label="Monthly Value"
                  prefix="$"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8">
                <AnimatedMetrics
                  value={Math.round(savings.yearlySavings)}
                  label="Annual Value"
                  prefix="$"
                />
              </CardContent>
            </Card>
          </motion.div>
        </ScrollTrigger>

        {/* Top Opportunities */}
        <ScrollTrigger>
          <motion.div variants={slideUpVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Top 3 Opportunities</h3>
            <StaggeredReveal>
              {plan.topThreeOpportunities.map((rec, idx) => (
                <Card key={rec.useCaseId} className="mb-4">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-xl font-bold text-accent-400">#{idx + 1}</div>
                          <CardTitle>{rec.title}</CardTitle>
                        </div>
                        <CardDescription>{rec.description}</CardDescription>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-accent-400">
                          {rec.relevanceScore}%
                        </div>
                        <p className="text-xs text-slate-400">Relevance</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-300 mb-2">
                        <span className="font-semibold">Time to Implement:</span> {rec.estimatedTimeToImplement}
                      </p>
                      <p className="text-sm text-slate-300">
                        <span className="font-semibold">Expected Benefit:</span> {rec.expectedBenefit}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-300 mb-2">Get Started:</p>
                      <ul className="space-y-1">
                        {rec.getStartedSteps.map((step, stepIdx) => (
                          <li key={stepIdx} className="text-sm text-slate-400 flex items-start gap-2">
                            <span className="text-accent-400 mt-1">→</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredReveal>
          </motion.div>
        </ScrollTrigger>

        {/* Implementation Timeline */}
        <ScrollTrigger>
          <motion.div variants={slideUpVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Implementation Timeline</h3>
            <Card>
              <CardContent className="pt-8">
                <div className="space-y-6">
                  {plan.implementationSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent-500/20 border border-accent-500/30">
                          <span className="text-accent-400 font-semibold">{idx + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-50 mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-400 mb-2">{step.description}</p>
                        <div className="flex gap-4 text-xs text-slate-500">
                          <span>⏱ {step.estimatedTime}</span>
                          <span>📊 {step.difficulty}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollTrigger>

        {/* Resources */}
        <ScrollTrigger>
          <motion.div variants={slideUpVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Helpful Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {plan.resources.map((resource, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start justify-between">
                      <span>{resource.title}</span>
                      <span className="text-xs font-normal bg-accent-500/20 text-accent-300 px-2 py-1 rounded">
                        {resource.type}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 mb-4">{resource.description}</p>
                    {resource.link && (
                      <Button variant="ghost" size="sm" className="text-accent-400 hover:text-accent-300">
                        Learn More <ArrowRight size={14} className="ml-2" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </ScrollTrigger>

        {/* Action Buttons */}
        <ScrollTrigger>
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12 border-t border-slate-700/30"
          >
            <Button
              variant="default"
              size="lg"
              onClick={onDownload}
              className="w-full sm:w-auto"
            >
              <Download size={18} className="mr-2" />
              Download Plan
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={onEmail}
              className="w-full sm:w-auto"
            >
              <Mail size={18} className="mr-2" />
              Email to Me
            </Button>
          </motion.div>
        </ScrollTrigger>
      </div>
    </section>
  );
}
