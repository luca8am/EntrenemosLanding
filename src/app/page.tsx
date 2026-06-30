import { LandingAudience } from "@/components/marketing/LandingAudience";
import { LandingCta } from "@/components/marketing/LandingCta";
import { LandingFooter } from "@/components/marketing/LandingFooter";
import { LandingHeader } from "@/components/marketing/LandingHeader";
import { LandingHero } from "@/components/marketing/LandingHero";
import { LandingPlans } from "@/components/marketing/LandingPlans";
import { LandingProblem } from "@/components/marketing/LandingProblem";
import { LandingScreens } from "@/components/marketing/LandingScreens";
import { LandingSolution } from "@/components/marketing/LandingSolution";
import { ScrollRevealInit } from "@/components/marketing/ScrollRevealInit";
import { TopbarScrollEffect } from "@/components/marketing/TopbarScrollEffect";
import { landingContent } from "@/lib/marketing/landing-content";

export default function HomePage() {
  return (
    <div className="page-shell">
      <ScrollRevealInit />
      <TopbarScrollEffect />
      <div className="page-backdrop" aria-hidden="true" />
      <LandingHeader
        brand={landingContent.brand}
        navigation={landingContent.navigation}
        primaryAction={landingContent.headerAction}
      />
      <main>
        <LandingHero section={landingContent.hero} />
        <LandingProblem section={landingContent.problem} />
        <LandingSolution section={landingContent.solution} />
        <LandingAudience section={landingContent.audience} />
        <LandingScreens section={landingContent.screens} />
        <LandingPlans section={landingContent.plans} />
        <LandingCta section={landingContent.finalCta} />
      </main>
      <LandingFooter footer={landingContent.footer} />
    </div>
  );
}
