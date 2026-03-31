export interface FAQItem {
  question: string;
  answer: string;
}

export interface CurriculumItem {
  time: string;
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
  icon: string;
}

export interface OutcomeItem {
  id: string;
  title: string;
  description: string;
}

export interface GroupedOutcome {
  groupTitle: string;
  items: OutcomeItem[];
}

export interface DifferenceItem {
  id: string;
  title: string;
  description: string;
}
