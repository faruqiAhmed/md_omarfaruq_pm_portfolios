export interface PrdMetadata {
  docOwner: string;
  targetLaunch: string;
  status: 'In Production' | 'Launched' | 'RFC / Proposed' | 'Strategic Teardown';
  approvers: { role: string; name: string }[];
  docId: string;
  lastUpdated: string;
}

export interface GoalsAndNonGoals {
  goals: string[];
  nonGoals: string[];
}

export interface NorthStarAndGuardrails {
  northStar: {
    metric: string;
    target: string;
    rationale: string;
  };
  guardrails: {
    metric: string;
    threshold: string;
    risk: string;
  }[];
}

export interface MarketSizeItem {
  layer: string;
  definition: string;
  estSize: string;
}

export type MarketSize = MarketSizeItem[] | {
  tam: { value: string; description: string };
  sam: { value: string; description: string };
  som: { value: string; description: string };
};

export interface CompetitiveBenchmark {
  capability?: string;
  feature?: string;
  googleMaps?: string;
  appleMaps?: string;
  waze?: string;
}

export interface HeuristicsAuditItem {
  heuristic: string;
  rating: string;
  keyWeakness?: string;
  status?: string;
  observation?: string;
  recommendation?: string;
}

export interface UsabilityIssueSummaryItem {
  issue: string;
  severity: string;
  frequency: string;
}

export interface UxAuditItem {
  issue: string;
  description: string;
  impact: string[];
  recommendations?: string[];
}

export interface StrategicPillar {
  pillar: string;
  goal: string;
  feature: string;
}

export interface OkrItem {
  category: string;
  target: string;
}

export interface ProposedSolution {
  title: string;
  description: string;
  bullets?: string[];
  keyPoints?: string[];
  impact?: string;
}

export interface MilestoneItem {
  milestone: string;
  timeline: string;
}

export interface SixMonthSuccessCriteriaItem {
  metric: string;
  target: string;
  current?: string;
}

export interface EdgeCaseItem {
  feature?: string;
  scenario: string;
  expectedBehavior?: string;
  solution?: string;
}

export interface ArchitectureRiskItem {
  solution?: string;
  component?: string;
  keyComponents?: string;
  primaryRisk?: string;
  risk?: string;
  mitigation?: string;
}

export interface GoToMarketPhase {
  phase: string;
  timeline?: string;
  audience?: string;
  focus: string;
}

export interface PersonaJourney {
  persona?: string;
  personaName?: string;
  journey?: string;
  scenario?: string;
  currentState?: string;
  proposedState?: string;
  impact?: string;
  breaksWhere?: string;
  fix?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  clientOrCompany?: string;
  role: string;
  timeline: string;
  category?: 'Fintech' | 'Mobility & Super-Apps' | 'Platforms & SaaS' | 'Product Teardown';
  heroBadge?: string;
  overview?: string;
  keyMetrics?: { label: string; value: string; detail: string }[];
  problemStatement?: string;
  userResearch?: {
    persona: string;
    painPoints: string[];
    insight: string;
  };
  strategyAndTradeoffs?: {
    approach: string;
    tradeoffsConsidered: string[];
    rationale: string;
  };
  technicalArchitecturePM?: string[];
  executionMilestones?: { phase: string; description: string; result: string }[];
  outcomesAndImpact?: string[];
  retrospective?: string;
  prdMetadata?: PrdMetadata;
  goalsAndNonGoals?: GoalsAndNonGoals;
  northStarAndGuardrails?: NorthStarAndGuardrails;
  googlePillarHighlight?: 'Product Sense' | 'Technical Architecture' | 'Analytical Execution' | 'Leadership';
  keyHighlights?: string[];
  badgeCode?: string;
  statusBadge?: string;
  userPersonas?: {
    name: string;
    role?: string;
    age?: number;
    occupation?: string;
    goals?: string[];
    painPoints: string[];
    needs: string[];
  }[];
  ricePrioritization?: {
    feature: string;
    reach: number;
    impact: number;
    confidence: number;
    effort: number;
    riceScore: number;
    priority: string;
  }[];
  impactEffortMatrix?: {
    feature: string;
    userImpact: string;
    developmentEffort: string;
    decision: string;
  }[];
  uxAudit?: UxAuditItem[];
  userResearchFindings?: {
    finding: string;
    percentage: string;
  }[];
  userResearchSampleSize?: string;
  keyRecommendation?: string;
  userJourneyMap?: {
    stage: string;
    userAction: string;
    painPoint: string;
    opportunity: string;
  }[];
  risksAndMitigation?: {
    risk: string;
    impact: string;
    mitigation: string;
  }[];
  productRoadmap?: {
    phase: string;
    timeline: string;
    items: string[];
  }[];
  proposedSolutions?: ProposedSolution[];
  mvpScope?: string[];
  marketSize?: MarketSize;
  competitiveBenchmark?: CompetitiveBenchmark[];
  heuristicsAudit?: HeuristicsAuditItem[];
  usabilityIssuesSummary?: UsabilityIssueSummaryItem[];
  strategicPillars?: StrategicPillar[];
  okrsList?: OkrItem[];
  milestonesList?: MilestoneItem[];
  sixMonthSuccessCriteria?: SixMonthSuccessCriteriaItem[];
  edgeCases?: EdgeCaseItem[];
  architectureRisks?: ArchitectureRiskItem[];
  goToMarketPhases?: GoToMarketPhase[];
  personaJourneys?: PersonaJourney[];
}

export interface GooglePmPillar {
  id: string;
  title: string;
  badge: string;
  color: 'blue' | 'red' | 'yellow' | 'green';
  googlePrinciple: string;
  summary: string;
  keyCapabilities: {
    capability: string;
    description: string;
    realWorldEvidence: string;
  }[];
  interviewQuestionFraming: string;
}

export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  category: 'pm' | 'engineering' | 'education' | 'recognition';
  highlightBadge: string;
  description: string;
  responsibilities: string[];
  keyWins: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Practitioner';
  context: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  batchOrYear: string;
  credentialUrl?: string;
  description: string;
  curriculumHighlights: string[];
  verificationStatus: 'Verified' | 'Active Credential';
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  readTime: string;
  category: string;
  summary: string;
  takeaways: string[];
  sections: { heading: string; body: string }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  inquiryType: 'Product Management Role' | 'Technical PM Advisory' | 'Project Case Study Walkthrough' | 'General Collaboration';
  timeline: string;
  message: string;
}

