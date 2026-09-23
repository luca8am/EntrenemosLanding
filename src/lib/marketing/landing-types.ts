export interface LandingLink {
  label: string;
  href: string;
}

export interface LandingHeroSection {
  title: string;
  description: string;
  primaryAction: LandingLink;
}

export interface FocusSection {
  eyebrow: string;
  title: string;
  description: string;
  solutionTitle: string;
  solutionDescription: string;
  manifestoBrand: string;
  manifestoLead: string;
  trainersLabel: string;
  athletesLabel: string;
  platformClaim: string;
  protagonistsClaim: string;
  objectiveClaim: string;
  progressClaim: string;
}

export interface LandingCard {
  title: string;
  description: string;
  label?: string;
  tone?: "default" | "accent";
}

export interface AudienceProfile {
  id: "atleta" | "entrenador";
  trigger: string;
  kicker: string;
  title: string;
  description: string;
  points: LandingCard[];
}

export interface ScreensSection {
  eyebrow: string;
  title: string;
  description: string;
  mobileTitle: string;
  mobileDescription: string;
  webTitle: string;
  webDescription: string;
  features: LandingCard[];
}

export interface FooterContent {
  description: string;
  links: LandingLink[];
  contact: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  actionLabel: string;
  actionHref: string;
  highlight?: boolean;
  isContact?: boolean;
}

export interface PlansSection {
  eyebrow: string;
  title: string;
  description: string;
  plans: PricingPlan[];
}

