export type City = 'bengaluru' | 'mumbai';

export interface ComparisonItem {
  id: string;
  category: string;
  propsochFeature: string;
  propsochDetail: string;
  competitorFeature: string;
  competitorDetail: string;
  isPositiveForPropsoch: boolean;
}

export interface RoadmapStep {
  stepNumber: string;
  timeline: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverable: string;
  deliverableBadge: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  property: string;
  quote: string;
  highlights: string[];
  savingsAmount: string;
  avatarUrl: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  category: 'service' | 'fees' | 'why-us' | 'trust';
  question: string;
  answer: string;
  highlight?: string;
}

export interface InspectionPoint {
  id: string;
  title: string;
  brochureClaim: string;
  architectFinding: string;
  severity: 'critical' | 'moderate' | 'verified';
  icon: string;
}
