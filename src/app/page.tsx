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
import type { Metadata } from "next";
import { siteConfig } from "@/lib/marketing/site-config";

export const metadata: Metadata = {
  alternates: { canonical: `${siteConfig.url}/` },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      description: siteConfig.description,
      inLanguage: "es-AR",
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      logo: `${siteConfig.url}/brand/logo-primary.png`,
      email: siteConfig.email,
      sameAs: [landingContent.footer.instagram.href],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
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
        <LandingScreens section={landingContent.screens} appLinks={landingContent.footer.appLinks} />
        <LandingVision />
        <LandingCta section={landingContent.finalCta} />
      </main>
      <LandingFooter footer={landingContent.footer} />
    </div>
  );
}


