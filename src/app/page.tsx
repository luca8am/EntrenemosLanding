import { LandingCta } from "@/components/marketing/LandingCta";
import { LandingFocus } from "@/components/marketing/LandingFocus";
import { LandingFooter } from "@/components/marketing/LandingFooter";
import { LandingHeader } from "@/components/marketing/LandingHeader";
import { LandingHero } from "@/components/marketing/LandingHero";
import { LandingVision } from "@/components/marketing/LandingVision";
import { LandingScreens } from "@/components/marketing/LandingScreens";
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
        <LandingFocus section={landingContent.focus} />
        <LandingScreens section={landingContent.screens} />
        <LandingVision />
        <LandingCta section={landingContent.finalCta} />
      </main>
      <LandingFooter footer={landingContent.footer} />
    </div>
  );
}


