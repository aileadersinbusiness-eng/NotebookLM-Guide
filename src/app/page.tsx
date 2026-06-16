'use client';

import React, { useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { KnowledgeScanner } from '@/components/sections/KnowledgeScanner';
import { ActionPlanResults } from '@/components/sections/ActionPlanResults';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { usePersonalization } from '@/hooks/usePersonalization';
import { generatePlan } from '@/lib/plan-generator';
import { QuizResponse } from '@/types';

export default function Home() {
  const scannerRef = useRef<HTMLDivElement>(null);
  const { responses, setResponses, generatedPlan, setGeneratedPlan, setCompletedQuiz } =
    usePersonalization();

  const handleGetStarted = () => {
    scannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuizComplete = (quizResponses: QuizResponse) => {
    // Save responses to context
    setResponses(quizResponses);
    setCompletedQuiz(true);

    // Generate plan
    const plan = generatePlan(quizResponses);
    setGeneratedPlan(plan);

    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  const handleDownloadPlan = async () => {
    if (!generatedPlan) return;

    // TODO: Implement PDF download
    console.log('Downloading plan:', generatedPlan);
    // This will be implemented in a future phase
  };

  const handleEmailPlan = async () => {
    if (!generatedPlan) return;

    // TODO: Implement email sending
    console.log('Emailing plan:', generatedPlan);
    // This will be implemented in a future phase
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <HeroSection onGetStarted={handleGetStarted} />

      <div ref={scannerRef}>
        <KnowledgeScanner
          onComplete={handleQuizComplete}
          onSkip={() => {
            const useCasesSection = document.getElementById('use-cases');
            useCasesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {generatedPlan && (
        <ActionPlanResults
          plan={generatedPlan}
          onDownload={handleDownloadPlan}
          onEmail={handleEmailPlan}
        />
      )}

      <UseCasesSection selectedRole={responses?.role} />
    </main>
  );
}
