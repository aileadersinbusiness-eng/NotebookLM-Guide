import { UseCase } from '@/types';

export const USE_CASES: UseCase[] = [
  {
    id: 'research-synthesis',
    title: 'Research Synthesis & Analysis',
    shortTitle: 'Research',
    description: 'Transform scattered research papers and articles into an interactive knowledge base',
    problem:
      'You have dozens of research papers, articles, and reports scattered across folders. Finding specific insights takes hours.',
    solution:
      'Upload all your research documents into NotebookLM and use the audio overview and source chat to synthesize findings instantly.',
    benefit: 'Extract key insights from months of research in minutes instead of hours.',
    estimatedTimeSaved: 15,
    relevantRoles: ['researcher', 'consultant', 'student', 'marketer'],
    example:
      'A market researcher compiled 50 industry reports into one NotebookLM notebook and generated an audio summary that highlighted key trends.',
    icon: 'BookOpen',
    color: 'from-blue-500 to-cyan-500',
    metrics: {
      timeReduction: '70% faster research synthesis',
      effortReduction: '90% less manual note-taking',
      accuracyImprovement: 'Zero information gaps',
    },
    steps: [
      'Gather all research documents',
      'Upload to NotebookLM',
      'Generate audio overview',
      'Use source chat for deep dives',
    ],
    tags: ['research', 'analysis', 'synthesis', 'academic'],
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Brainstorming',
    shortTitle: 'Content',
    description: 'Use your brand guidelines and past content as a foundation for new ideas',
    problem:
      'You need to create consistent content but keep losing track of your brand voice, past articles, and style guidelines.',
    solution:
      'Upload brand guidelines, competitor content, and past articles into NotebookLM and use the source chat to generate ideas aligned with your voice.',
    benefit: 'Create on-brand content 5x faster with consistent messaging.',
    estimatedTimeSaved: 8,
    relevantRoles: ['marketer', 'entrepreneur', 'consultant'],
    example:
      'A content marketer uploaded 200 past articles and brand guidelines. Now she uses audio overviews to find inspiration and source chat for quick drafts.',
    icon: 'PenTool',
    color: 'from-purple-500 to-pink-500',
    metrics: {
      timeReduction: '5x faster content ideation',
      effortReduction: 'Reduced brand guideline lookup by 95%',
    },
    steps: [
      'Upload brand guidelines and past content',
      'Create a content inspiration notebook',
      'Reference during brainstorming sessions',
      'Chat with sources for quick drafts',
    ],
    tags: ['content', 'marketing', 'creativity', 'brainstorming'],
  },
  {
    id: 'student-learning',
    title: 'Student Learning & Course Material Mastery',
    shortTitle: 'Learning',
    description: 'Turn lecture notes and textbooks into interactive study guides',
    problem:
      'You have textbooks, lecture notes, and class materials scattered across documents. Studying means endless searching.',
    solution:
      'Upload all course materials to NotebookLM, generate audio summaries, and use interactive source chat to test your understanding.',
    benefit: 'Study faster, retain more, score better.',
    estimatedTimeSaved: 6,
    relevantRoles: ['student', 'researcher'],
    example:
      'A grad student uploaded all semester notes and textbook chapters. She now studies with audio summaries and tests herself using the source chat.',
    icon: 'BookMarked',
    color: 'from-green-500 to-emerald-500',
    metrics: {
      timeReduction: '60% less study time for same retention',
      effortReduction: 'Organized all materials in one place',
    },
    steps: [
      'Compile all course materials into PDFs',
      'Upload to NotebookLM',
      'Generate audio lectures',
      'Create flashcard-style questions in source chat',
    ],
    tags: ['education', 'learning', 'studying', 'retention'],
  },
  {
    id: 'market-research',
    title: 'Market Research & Competitive Intelligence',
    shortTitle: 'Market Research',
    description: 'Consolidate market data, trends, and competitor information into searchable insights',
    problem:
      'Market data is spread across analyst reports, news articles, and spreadsheets. Keeping competitive intel current is a nightmare.',
    solution:
      'Build a living NotebookLM notebook with all market research. Use it to spot trends, answer competitor questions, and brief your team.',
    benefit: 'Make data-driven decisions faster with instant access to competitive intel.',
    estimatedTimeSaved: 12,
    relevantRoles: ['marketer', 'executive', 'entrepreneur', 'consultant'],
    example:
      'A PMM created a quarterly market research notebook. Her team now asks the notebook questions instead of her.',
    icon: 'TrendingUp',
    color: 'from-orange-500 to-red-500',
    metrics: {
      timeReduction: '80% faster competitive analysis',
      effortReduction: 'Reduced internal intel request responses by 75%',
    },
    steps: [
      'Collect industry reports and competitor analyses',
      'Compile market trend data',
      'Upload to NotebookLM',
      'Share source chat with team for instant insights',
    ],
    tags: ['market', 'competitive', 'intelligence', 'trends'],
  },
  {
    id: 'competitor-analysis',
    title: 'Competitor Analysis & Product Benchmarking',
    shortTitle: 'Competitor Analysis',
    description: 'Track and analyze competitor moves, pricing, and positioning at scale',
    problem:
      'You manually track competitor websites, reviews, and announcements. Keeping up is time-consuming and you miss important signals.',
    solution:
      'Upload competitor docs, pricing pages, case studies, and reviews into NotebookLM. Query the source chat to spot patterns and shifts.',
    benefit: 'Stay ahead of competitor moves without dedicating a full-time person.',
    estimatedTimeSaved: 10,
    relevantRoles: ['entrepreneur', 'marketer', 'executive'],
    example:
      'A product manager uploaded 30 competitor websites and created a quarterly benchmark notebook. Now she spots pricing changes immediately.',
    icon: 'Target',
    color: 'from-yellow-500 to-orange-500',
    metrics: {
      timeReduction: '85% faster competitive monitoring',
      effortReduction: 'Automated competitor intel collection',
    },
    steps: [
      'Document all competitors and their offerings',
      'Collect pricing pages and marketing materials',
      'Upload to NotebookLM',
      'Query for comparative insights',
    ],
    tags: ['competitor', 'market', 'benchmarking', 'strategy'],
  },
  {
    id: 'product-strategy',
    title: 'Product Strategy & Roadmap Planning',
    shortTitle: 'Product Strategy',
    description: 'Consolidate user feedback, research, and specs into strategic decisions',
    problem:
      'Product strategy data lives in multiple tools: Notion, spreadsheets, customer interviews, surveys. Decision-making is slow and scattered.',
    solution:
      'Create a product strategy notebook with user feedback, research, competitive data, and internal specs. Chat with it to validate roadmap ideas.',
    benefit: 'Move from months of analysis to weeks of strategic clarity.',
    estimatedTimeSaved: 20,
    relevantRoles: ['executive', 'marketer', 'entrepreneur'],
    example:
      'A startup founder consolidated all customer interviews, market research, and competitor data. In one week, she refined her entire product strategy.',
    icon: 'Zap',
    color: 'from-indigo-500 to-purple-500',
    metrics: {
      timeReduction: '70% faster strategy formulation',
      effortReduction: 'Unified all strategic data sources',
    },
    steps: [
      'Compile customer feedback and interviews',
      'Gather competitive and market research',
      'Collect user testing results',
      'Upload all to NotebookLM',
    ],
    tags: ['product', 'strategy', 'roadmap', 'planning'],
  },
  {
    id: 'internal-knowledge',
    title: 'Internal Knowledge Base & SOPs',
    shortTitle: 'Knowledge Base',
    description: 'Turn scattered SOPs and process docs into a searchable team resource',
    problem:
      'Your team asks you the same questions repeatedly. Processes are documented but nobody can find them. Onboarding takes weeks.',
    solution:
      'Create a NotebookLM notebook with all SOPs, process docs, and FAQs. New hires and team members ask the notebook instead of you.',
    benefit: 'Reduce onboarding time by 50% and free up your time from repetitive questions.',
    estimatedTimeSaved: 25,
    relevantRoles: ['executive', 'consultant', 'entrepreneur'],
    example:
      'A 30-person agency created a NotebookLM with all processes and client information. Onboarding new team members went from 3 weeks to 1 week.',
    icon: 'Layers',
    color: 'from-cyan-500 to-blue-500',
    metrics: {
      timeReduction: '50% faster onboarding',
      effortReduction: '80% reduction in repetitive questions',
    },
    steps: [
      'Consolidate all process documentation',
      'Organize SOPs by department',
      'Upload to NotebookLM',
      'Share with team for instant access',
    ],
    tags: ['operations', 'knowledge', 'processes', 'onboarding'],
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation & Hiring',
    shortTitle: 'Interview Prep',
    description: 'Prepare thoroughly for interviews by synthesizing role requirements and interview materials',
    problem:
      'You have job descriptions, company info, interview guides, and candidate questions in different places. Preparing thoroughly is chaotic.',
    solution:
      'Upload all interview materials and company docs to NotebookLM. Use source chat to prepare questions, research the company, and refine pitch.',
    benefit: 'Go into interviews fully prepared and significantly increase your odds.',
    estimatedTimeSaved: 3,
    relevantRoles: ['student', 'executive', 'entrepreneur'],
    example:
      'A job seeker uploaded company research, interview tips, and her background. She used source chat to craft thoughtful questions.',
    icon: 'Users',
    color: 'from-pink-500 to-rose-500',
    metrics: {
      timeReduction: '70% faster interview prep',
      effortReduction: 'Organized all materials in one place',
    },
    steps: [
      'Research the company and role',
      'Gather interview tips and common questions',
      'Prepare your background story',
      'Upload to NotebookLM for prep',
    ],
    tags: ['hiring', 'interviews', 'preparation', 'career'],
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification & Sales Enablement',
    shortTitle: 'Sales Enablement',
    description: 'Empower sales teams with instant access to product knowledge and customer data',
    problem:
      'Sales reps waste time searching for product info and customer context. Qualification is slow because product knowledge is scattered.',
    solution:
      'Create NotebookLM notebooks with product docs, case studies, customer data, and objection handling. Reps ask instead of searching.',
    benefit: 'Sales cycles shorten by 30% and rep productivity increases by 40%.',
    estimatedTimeSaved: 8,
    relevantRoles: ['marketer', 'executive', 'consultant'],
    example:
      'A SaaS company gave sales reps access to a NotebookLM with product features and customer success stories. Sales cycle dropped 3 weeks.',
    icon: 'Briefcase',
    color: 'from-teal-500 to-cyan-500',
    metrics: {
      timeReduction: '30% shorter sales cycles',
      effortReduction: '40% more leads qualified',
    },
    steps: [
      'Compile all product documentation',
      'Gather case studies and testimonials',
      'Create objection handling guides',
      'Share notebook with sales team',
    ],
    tags: ['sales', 'marketing', 'enablement', 'leads'],
  },
  {
    id: 'strategy-workshop',
    title: 'Strategy Workshop & Team Alignment',
    shortTitle: 'Strategy Workshops',
    description: 'Run faster, more aligned strategy workshops by consolidating all input data',
    problem:
      'Strategy workshops are long, chaotic, and rely on participants remembering scattered data. Alignment is weak.',
    solution:
      'Pre-load strategy workshops with data: market research, customer feedback, competitive data, internal metrics. Run faster, aligned sessions.',
    benefit:
      'Cut workshop time from 3 days to 1 day and achieve better strategic alignment with your team.',
    estimatedTimeSaved: 16,
    relevantRoles: ['executive', 'consultant', 'entrepreneur'],
    example:
      'An executive team used a NotebookLM loaded with quarterly data to condense their annual strategy planning from 3 days to 1.',
    icon: 'Lightbulb',
    color: 'from-amber-500 to-yellow-500',
    metrics: {
      timeReduction: '66% faster strategy workshops',
      effortReduction: 'Better informed decisions',
    },
    steps: [
      'Consolidate all strategic data',
      'Create pre-workshop summary',
      'Share notebook with team before session',
      'Use source chat during workshop',
    ],
    tags: ['strategy', 'alignment', 'workshop', 'leadership'],
  },
];

export const USER_ROLES = [
  { value: 'researcher', label: 'Researcher / Analyst' },
  { value: 'marketer', label: 'Marketer / Content Creator' },
  { value: 'consultant', label: 'Consultant / Advisor' },
  { value: 'entrepreneur', label: 'Entrepreneur / Founder' },
  { value: 'student', label: 'Student' },
  { value: 'executive', label: 'Executive / Manager' },
  { value: 'other', label: 'Other' },
];

export const PAIN_POINTS = [
  'Information scattered across multiple documents',
  'Difficulty finding specific insights quickly',
  'Repetitive questions from team members',
  'Slow onboarding process',
  'Inconsistent decision-making',
  'Too much time spent on research',
  'Document management chaos',
  'Poor team collaboration',
];

export const GOALS = [
  'Save time on daily tasks',
  'Improve decision-making speed',
  'Better team collaboration',
  'Faster onboarding',
  'Consistent knowledge sharing',
  'Reduce repetitive work',
  'Better customer insights',
  'Competitive advantage',
];

export const TIMELINE_OPTIONS = [
  { value: 'immediate', label: 'Start immediately' },
  { value: '1month', label: 'Within 1 month' },
  { value: '3months', label: 'Within 3 months' },
  { value: '6months', label: 'Within 6 months' },
];

export const EXPERIENCE_LEVELS = [
  { value: 'none', label: 'Never used NotebookLM' },
  { value: 'beginner', label: 'Just getting started' },
  { value: 'intermediate', label: 'Used it a few times' },
  { value: 'advanced', label: 'Use it regularly' },
];

export const HOURLY_RATE = 75;

export const ANIMATION_DEFAULTS = {
  duration: 0.6,
  ease: 'easeInOut',
  stagger: 0.05,
};
