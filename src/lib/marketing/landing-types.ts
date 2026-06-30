export interface LandingLink {
  label: string;
  href: string;
}

export interface LandingStat {
  label: string;
  value: string;
}

export interface LandingHeroSection {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: LandingLink;
  secondaryAction: LandingLink;
  notes: string[];
  statusLabel: string;
  statusValue: string;
  floatingCards: LandingStat[];
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

