export type UserRole =
  | 'researcher'
  | 'marketer'
  | 'consultant'
  | 'entrepreneur'
  | 'student'
  | 'executive'
  | 'other';

export interface QuizResponse {
  role: UserRole;
  department?: string;
  painPoints: string[];
  goals: string[];
  documents: string[];
  teamSize?: string;
  timeline: 'immediate' | '1month' | '3months' | '6months';
  notebookExperience: 'none' | 'beginner' | 'intermediate' | 'advanced';
}

export interface ActionPlanStep {
  title: string;
  description: string;
  estimatedTime: string;
  resources: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Recommendation {
  useCaseId: string;
  title: string;
  description: string;
  relevanceScore: number;
  estimatedTimeToImplement: string;
  expectedBenefit: string;
  getStartedSteps: string[];
}

export interface ActionPlan {
  generatedAt: string;
  role: UserRole;
  customRecommendations: Recommendation[];
  estimatedMonthlyTimeSaved: number;
  estimatedImplementationMonths: number;
  topThreeOpportunities: Recommendation[];
  implementationSteps: ActionPlanStep[];
  resources: Resource[];
  nextStepsChecklistI: NextStep[];
}

export interface Resource {
  title: string;
  description: string;
  link?: string;
  type: 'template' | 'guide' | 'tool' | 'example';
}

export interface NextStep {
  title: string;
  description: string;
  day: number;
  isCompleted?: boolean;
}

export interface UseCase {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  problem: string;
  solution: string;
  benefit: string;
  estimatedTimeSaved: number;
  relevantRoles: UserRole[];
  example: string;
  icon: string;
  color: string;
  metrics: {
    timeReduction: string;
    effortReduction: string;
    accuracyImprovement?: string;
  };
  steps: string[];
  tags: string[];
}

export interface PersonalizationContextType {
  responses: QuizResponse | null;
  setResponses: (responses: QuizResponse) => void;
  generatedPlan: ActionPlan | null;
  setGeneratedPlan: (plan: ActionPlan) => void;
  completedQuiz: boolean;
  setCompletedQuiz: (completed: boolean) => void;
  clearData: () => void;
}

export interface ROIMetrics {
  hoursSavedPerMonth: number;
  weeksSavedPerYear: number;
  hoursFreedForStrategy: number;
  hoursCostSavings: number;
  documentSearchTimeReduction: number;
  onboardingTimeReduction: number;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'radio' | 'checkbox' | 'select' | 'textarea';
  required: boolean;
  options?: { value: string; label: string }[];
  helpText?: string;
}
