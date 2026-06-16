'use client';

import React, { useRef, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { KnowledgeScanner } from '@/components/sections/KnowledgeScanner';
import { usePersonalization } from '@/hooks/usePersonalization';
import { generatePlan } from '@/lib/plan-generator';
import { QuizResponse } from '@/types';

export default function Home() {
  const scannerRef = useRef<HTMLDivElement>(null);
  const { setResponses, setGeneratedPlan, setCompletedQuiz } = usePersonalization();

  const handleGetStarted = () => {
    scannerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuizComplete = (responses: QuizResponse) => {
    // Save responses to context
    setResponses(responses);
    setCompletedQuiz(true);

    // Generate plan
    const plan = generatePlan(responses);
    setGeneratedPlan(plan);

    // Scroll to results (we'll create a results section next)
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      <HeroSection onGetStarted={handleGetStarted} />

      <div ref={scannerRef}>
        <KnowledgeScanner
          onComplete={handleQuizComplete}
          onSkip={() => {
            // Navigate to use cases section
            const useCasesSection = document.getElementById('use-cases');
            useCasesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* Placeholder for additional sections */}
      <section id="results" className="py-20 md:py-32 container-custom">
        <h2 className="text-4xl font-bold">Your Personalized Action Plan</h2>
        <p className="text-slate-400 mt-4">Coming soon...</p>
      </section>

      <section id="use-cases" className="py-20 md:py-32 container-custom">
        <h2 className="text-4xl font-bold">10 Use Cases</h2>
        <p className="text-slate-400 mt-4">Coming soon...</p>
      </section>
    </main>
  );
}
