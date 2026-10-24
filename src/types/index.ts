export type ServiceId = 
  | 'offensive-security'
  | 'website-architecture'
  | 'technical-seo'
  | 'security-audits';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  badge: string;
}

export type ProjectCategory = 
  | 'Offensive Security'
  | 'Website Architecture'
  | 'Technical SEO'
  | 'Full-Stack & Tools';

export interface ProjectDemoLog {
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'error';
  message: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  filterGroup: 'Security' | 'website' | 'Optimization' | 'Tools';
  tagline: string;
  description: string;
  imageUrl?: string;
  impactMetrics: string[];
  technologies: string[];
  deliverables: string[];
  demoType: 'terminal' | 'audit' | 'metrics' | 'architecture';
  terminalCommand?: string;
  demoLogs?: ProjectDemoLog[];
  statHighlights?: { label: string; value: string; detail: string }[];
  architectureLayers?: { layer: string; role: string; status: string }[];
}

export interface ExpertiseGroup {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  service: string;
  projectDetails: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  projectDetails?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar: string;
  quote: string;
  outcome: string;
  projectDomain: string;
}
