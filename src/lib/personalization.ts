import { QuizResponse, ActionPlan, PersonalizationContextType } from '@/types';

export const createInitialState = (): PersonalizationContextType => ({
  responses: null,
  setResponses: () => {},
  generatedPlan: null,
  setGeneratedPlan: () => {},
  completedQuiz: false,
  setCompletedQuiz: () => {},
  clearData: () => {},
});

export const saveToLocalStorage = (key: string, data: unknown): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }
};

export const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
};

export const clearLocalStorage = (): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('notebooklm_responses');
      localStorage.removeItem('notebooklm_plan');
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  }
};

export const validateQuizResponse = (responses: Partial<QuizResponse>): boolean => {
  return (
    !!responses.role &&
    Array.isArray(responses.painPoints) &&
    responses.painPoints.length > 0 &&
    Array.isArray(responses.goals) &&
    responses.goals.length > 0 &&
    !!responses.timeline &&
    !!responses.notebookExperience
  );
};

export const getStorageKey = (namespace: string, key: string): string => {
  return `notebooklm_${namespace}_${key}`;
};
