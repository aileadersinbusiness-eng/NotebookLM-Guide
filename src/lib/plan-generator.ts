import { QuizResponse, ActionPlan, Recommendation, ActionPlanStep } from '@/types';
import { USE_CASES, HOURLY_RATE } from './constants';

export function generatePlan(responses: QuizResponse): ActionPlan {
  // Calculate relevant use cases based on role and pain points
  const scoredUseCases = USE_CASES.map((useCase) => {
    let relevanceScore = 0;

    // Score based on role relevance
    if (useCase.relevantRoles.includes(responses.role)) {
      relevanceScore += 30;
    }

    // Score based on pain point alignment
    const painPointMatches = responses.painPoints.filter((painPoint) =>
      [
        'Information scattered',
        'Difficulty finding',
        'Repetitive questions',
        'Slow onboarding',
        'Inconsistent decision-making',
        'Too much time spent on research',
        'Document management',
        'Poor team collaboration',
      ].some((keyword) => painPoint.toLowerCase().includes(keyword.toLowerCase()))
    );
    relevanceScore += painPointMatches.length * 10;

    // Score based on goal alignment
    const goalMatches = responses.goals.filter((goal) =>
      [
        'Save time',
        'Improve decision-making',
        'Better collaboration',
        'Faster onboarding',
        'Consistent knowledge',
        'Reduce repetitive',
        'Customer insights',
        'Competitive advantage',
      ].some((keyword) => goal.toLowerCase().includes(keyword.toLowerCase()))
    );
    relevanceScore += goalMatches.length * 10;

    return { useCase, relevanceScore };
  });

  // Sort and get top recommendations
  const topRecommendations = scoredUseCases
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 5)
    .map((scored) => ({
      useCaseId: scored.useCase.id,
      title: scored.useCase.title,
      description: scored.useCase.solution,
      relevanceScore: scored.relevanceScore,
      estimatedTimeToImplement: `${scored.useCase.estimatedTimeSaved * 2} days`,
      expectedBenefit: scored.useCase.benefit,
      getStartedSteps: scored.useCase.steps,
    }));

  // Generate implementation steps based on timeline
  const implementationSteps = generateImplementationSteps(responses, topRecommendations);

  // Calculate ROI metrics
  const { monthlyTimeSaved, implementationMonths } = calculateROI(responses, topRecommendations);

  // Generate resources
  const resources = [
    {
      title: 'NotebookLM Getting Started Guide',
      description: 'Official guide to uploading documents and creating your first notebook',
      link: 'https://notebooklm.google.com/help',
      type: 'guide' as const,
    },
    {
      title: 'Document Best Practices Template',
      description: 'Template for organizing documents before uploading to NotebookLM',
      link: '#',
      type: 'template' as const,
    },
    {
      title: 'Team Collaboration Playbook',
      description: 'How to set up notebooks for team collaboration and knowledge sharing',
      link: '#',
      type: 'guide' as const,
    },
    {
      title: 'Notebook Setup Examples',
      description: 'Real-world examples of successful NotebookLM implementations',
      link: '#',
      type: 'example' as const,
    },
  ];

  return {
    generatedAt: new Date().toISOString(),
    role: responses.role,
    customRecommendations: topRecommendations,
    estimatedMonthlyTimeSaved: monthlyTimeSaved,
    estimatedImplementationMonths: implementationMonths,
    topThreeOpportunities: topRecommendations.slice(0, 3),
    implementationSteps,
    resources,
    nextStepsChecklistI: generateNextSteps(),
  };
}

function generateImplementationSteps(
  responses: QuizResponse,
  recommendations: Recommendation[]
): ActionPlanStep[] {
  return [
    {
      title: 'Gather Your Documents',
      description: 'Compile all documents related to your first use case recommendation',
      estimatedTime: '1-2 hours',
      resources: ['Document Organization Template'],
      difficulty: 'easy',
    },
    {
      title: 'Create Your First Notebook',
      description: 'Set up your first NotebookLM notebook and upload documents',
      estimatedTime: '1 hour',
      resources: ['NotebookLM Getting Started Guide'],
      difficulty: 'easy',
    },
    {
      title: 'Generate Audio Overview',
      description: 'Create an audio summary of your uploaded documents',
      estimatedTime: '30 minutes',
      resources: ['Tutorial: Audio Overviews'],
      difficulty: 'easy',
    },
    {
      title: 'Test Source Chat',
      description: 'Ask your notebook questions to verify document indexing',
      estimatedTime: '30 minutes',
      resources: ['Best Practices: Source Chat'],
      difficulty: 'easy',
    },
    {
      title: 'Share with Your Team',
      description: 'Set up collaborative access for your team members',
      estimatedTime: '1 hour',
      resources: ['Team Collaboration Playbook'],
      difficulty: 'medium',
    },
  ];
}

function calculateROI(responses: QuizResponse, recommendations: Recommendation[]) {
  const timelineMonths = {
    immediate: 0.5,
    '1month': 1,
    '3months': 3,
    '6months': 6,
  };

  const avgTimeSavedPerUseCase = 12; // hours per month
  const monthlyTimeSaved = recommendations.length * avgTimeSavedPerUseCase;
  const implementationMonths = timelineMonths[responses.timeline as keyof typeof timelineMonths] || 1;

  return {
    monthlyTimeSaved,
    implementationMonths,
  };
}

function generateNextSteps() {
  return [
    {
      title: 'Day 1: Identify Your First Opportunity',
      description: 'Review the top 3 recommendations and pick one to start with',
      day: 1,
      isCompleted: false,
    },
    {
      title: 'Day 2-3: Gather Documents',
      description: 'Collect all documents related to your chosen use case',
      day: 3,
      isCompleted: false,
    },
    {
      title: 'Day 4: Create Your First Notebook',
      description: 'Sign up and create your NotebookLM notebook',
      day: 4,
      isCompleted: false,
    },
    {
      title: 'Day 5: Upload & Test',
      description: 'Upload documents and test the audio overview and source chat',
      day: 5,
      isCompleted: false,
    },
    {
      title: 'Day 6-7: Share with Your Team',
      description: 'Invite team members and get feedback on the notebook',
      day: 7,
      isCompleted: false,
    },
  ];
}

export function calculateEstimatedSavings(monthlyHoursSaved: number): {
  monthlySavings: number;
  yearlySavings: number;
  hourlyValue: number;
} {
  return {
    hourlyValue: HOURLY_RATE,
    monthlySavings: monthlyHoursSaved * HOURLY_RATE,
    yearlySavings: monthlyHoursSaved * HOURLY_RATE * 12,
  };
}
