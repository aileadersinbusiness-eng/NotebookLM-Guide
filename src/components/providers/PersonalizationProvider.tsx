'use client';

import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { QuizResponse, ActionPlan, PersonalizationContextType } from '@/types';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
  clearLocalStorage,
} from '@/lib/personalization';

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export function PersonalizationProvider({ children }: { children: ReactNode }) {
  const [responses, setResponsesState] = useState<QuizResponse | null>(() =>
    loadFromLocalStorage('notebooklm_responses', null)
  );

  const [generatedPlan, setGeneratedPlanState] = useState<ActionPlan | null>(() =>
    loadFromLocalStorage('notebooklm_plan', null)
  );

  const [completedQuiz, setCompletedQuizState] = useState<boolean>(() =>
    loadFromLocalStorage('notebooklm_completed_quiz', false)
  );

  const setResponses = useCallback((newResponses: QuizResponse) => {
    setResponsesState(newResponses);
    saveToLocalStorage('notebooklm_responses', newResponses);
  }, []);

  const setGeneratedPlan = useCallback((plan: ActionPlan) => {
    setGeneratedPlanState(plan);
    saveToLocalStorage('notebooklm_plan', plan);
  }, []);

  const setCompletedQuiz = useCallback((completed: boolean) => {
    setCompletedQuizState(completed);
    saveToLocalStorage('notebooklm_completed_quiz', completed);
  }, []);

  const clearData = useCallback(() => {
    setResponsesState(null);
    setGeneratedPlanState(null);
    setCompletedQuizState(false);
    clearLocalStorage();
  }, []);

  const value: PersonalizationContextType = {
    responses,
    setResponses,
    generatedPlan,
    setGeneratedPlan,
    completedQuiz,
    setCompletedQuiz,
    clearData,
  };

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalizationContext(): PersonalizationContextType {
  const context = React.useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error('usePersonalizationContext must be used within PersonalizationProvider');
  }
  return context;
}
