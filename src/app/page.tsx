import { LandingAudience } from "@/components/marketing/LandingAudience";
import { LandingCta } from "@/components/marketing/LandingCta";
import { LandingFooter } from "@/components/marketing/LandingFooter";
import { LandingHeader } from "@/components/marketing/LandingHeader";
import { LandingHero } from "@/components/marketing/LandingHero";
import { LandingProblem } from "@/components/marketing/LandingProblem";
import { LandingScreens } from "@/components/marketing/LandingScreens";
import { LandingSolution } from "@/components/marketing/LandingSolution";
import { landingContent } from "@/lib/marketing/landing-content";

export default function HomePage() {
  return (
    <div className="page-shell">
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
        <LandingCta section={landingContent.finalCta} />
      </main>
      <LandingFooter footer={landingContent.footer} />
    </div>
  );
}
