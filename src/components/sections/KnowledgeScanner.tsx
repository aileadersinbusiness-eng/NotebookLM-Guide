'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { QuizResponse } from '@/types';
import { USER_ROLES, PAIN_POINTS, GOALS, TIMELINE_OPTIONS, EXPERIENCE_LEVELS } from '@/lib/constants';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';
import { containerVariants, itemVariants } from '@/lib/animations';

interface KnowledgeScannerProps {
  onComplete: (responses: QuizResponse) => void;
  onSkip?: () => void;
}

export function KnowledgeScanner({ onComplete, onSkip }: KnowledgeScannerProps) {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState<Partial<QuizResponse>>({
    painPoints: [],
    goals: [],
    documents: [],
  });

  const handleRoleChange = (role: string) => {
    setResponses((prev) => ({ ...prev, role: role as any }));
  };

  const handlePainPointToggle = (point: string) => {
    setResponses((prev) => {
      const painPoints = prev.painPoints || [];
      if (painPoints.includes(point)) {
        return { ...prev, painPoints: painPoints.filter((p) => p !== point) };
      } else {
        return { ...prev, painPoints: [...painPoints, point] };
      }
    });
  };

  const handleGoalToggle = (goal: string) => {
    setResponses((prev) => {
      const goals = prev.goals || [];
      if (goals.includes(goal)) {
        return { ...prev, goals: goals.filter((g) => g !== goal) };
      } else {
        return { ...prev, goals: [...goals, goal] };
      }
    });
  };

  const handleTimelineChange = (timeline: string) => {
    setResponses((prev) => ({ ...prev, timeline: timeline as any }));
  };

  const handleExperienceChange = (experience: string) => {
    setResponses((prev) => ({ ...prev, notebookExperience: experience as any }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!responses.role;
      case 2:
        return (responses.painPoints || []).length > 0;
      case 3:
        return (responses.goals || []).length > 0;
      case 4:
        return !!responses.timeline && !!responses.notebookExperience;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    if (canProceed() && step === 4) {
      onComplete(responses as QuizResponse);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">What best describes your role?</h3>
            <RadioGroup value={responses.role || ''} onValueChange={handleRoleChange}>
              {USER_ROLES.map((role) => (
                <motion.div
                  key={role.value}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-slate-900/30 transition-colors"
                >
                  <input
                    type="radio"
                    id={role.value}
                    name="role"
                    value={role.value}
                    checked={responses.role === role.value}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor={role.value} className="flex-1 cursor-pointer">
                    {role.label}
                  </label>
                </motion.div>
              ))}
            </RadioGroup>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">What challenges do you face? (Select all that apply)</h3>
            <div className="space-y-3">
              {PAIN_POINTS.map((point) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-slate-900/30 transition-colors"
                >
                  <Checkbox
                    id={point}
                    checked={responses.painPoints?.includes(point) || false}
                    onCheckedChange={() => handlePainPointToggle(point)}
                  />
                  <label htmlFor={point} className="flex-1 cursor-pointer">
                    {point}
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">What are your goals? (Select all that apply)</h3>
            <div className="space-y-3">
              {GOALS.map((goal) => (
                <motion.div
                  key={goal}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-slate-900/30 transition-colors"
                >
                  <Checkbox
                    id={goal}
                    checked={responses.goals?.includes(goal) || false}
                    onCheckedChange={() => handleGoalToggle(goal)}
                  />
                  <label htmlFor={goal} className="flex-1 cursor-pointer">
                    {goal}
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">What&apos;s your timeline?</h3>
              <RadioGroup value={responses.timeline || ''} onValueChange={handleTimelineChange}>
                {TIMELINE_OPTIONS.map((option) => (
                  <motion.div
                    key={option.value}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-slate-900/30 transition-colors"
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="timeline"
                      value={option.value}
                      checked={responses.timeline === option.value}
                      onChange={(e) => handleTimelineChange(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </label>
                  </motion.div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-700/30">
              <h3 className="text-2xl font-bold">NotebookLM experience?</h3>
              <RadioGroup value={responses.notebookExperience || ''} onValueChange={handleExperienceChange}>
                {EXPERIENCE_LEVELS.map((level) => (
                  <motion.div
                    key={level.value}
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-4 rounded-lg cursor-pointer hover:bg-slate-900/30 transition-colors"
                  >
                    <input
                      type="radio"
                      id={level.value}
                      name="experience"
                      value={level.value}
                      checked={responses.notebookExperience === level.value}
                      onChange={(e) => handleExperienceChange(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor={level.value} className="flex-1 cursor-pointer">
                      {level.label}
                    </label>
                  </motion.div>
                ))}
              </RadioGroup>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollTrigger>
      <section id="scanner" className="py-20 md:py-32">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Knowledge Opportunity Scanner</CardTitle>
              <CardDescription>
                Answer a few quick questions to discover how NotebookLM can benefit your business.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-slate-400">
                    Step {step} of 4
                  </span>
                  <span className="text-sm text-slate-400">
                    {Math.round((step / 4) * 100)}%
                  </span>
                </div>
                <motion.div
                  className="h-2 bg-slate-800 rounded-full overflow-hidden"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-full bg-gradient-to-r from-accent-400 to-accent-600" />
                </motion.div>
              </div>

              {/* Form */}
              <div className="mb-8">{renderStep()}</div>

              {/* Navigation */}
              <div className="flex gap-4 justify-between">
                <Button
                  variant="secondary"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                >
                  Back
                </Button>

                {step < 4 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                  >
                    Get My Action Plan
                  </Button>
                )}
              </div>

              {onSkip && (
                <button
                  onClick={onSkip}
                  className="w-full mt-4 text-sm text-slate-400 hover:text-slate-200 transition-colors py-2"
                >
                  Skip for now
                </button>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </ScrollTrigger>
  );
}
