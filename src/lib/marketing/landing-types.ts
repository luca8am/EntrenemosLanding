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

export interface ScreensSection {
  eyebrow: string;
  title: string;
  description: string;
  independentNote: string;
  slides: EcosystemSlide[];
}

export interface EcosystemSlide {
  id: "planificar" | "entrenar" | "registrar" | "evaluar" | "continuar";
  label: string;
  role: string;
  roleTone: "trainer" | "athlete" | "shared";
  title: string;
  description: string;
  media: {
    src: string;
    alt: string;
    kind: "web" | "mobile";
    crop: "web-create-template" | "mobile-routine" | "mobile-register" | "mobile-evaluate" | "mobile-history-month";
    width: number;
    height: number;
  };
}


export interface FooterContent {
  description: string;
  links: LandingLink[];
  legalLinks: LandingLink[];
  contact: string;
  instagram: LandingLink;
  appLinks: LandingLink[];
}

