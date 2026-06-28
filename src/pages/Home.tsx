import { Seo } from "@/components/seo/Seo";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { BrandLogos } from "@/components/sections/BrandLogos";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { PublisherTypesGrid } from "@/components/sections/PublisherTypesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="VSCommission | Affiliate Marketing Plattform für den DACH-Raum"
        description="Die führende Affiliate-Marketing-Plattform für Deutschland, Österreich, Belgien und die Niederlande. Über 12.000 Publisher, 500+ Marken, €25M+ jährliche Provisionen."
        keywords="Affiliate Marketing, Affiliate Netzwerk, Performance Marketing, DACH, Deutschland, Publisher, Werbetreibende"
        path="/"
      />
      <Hero />
      <BrandLogos />
      <StatsBar />
      <ServiceCards />
      <PublisherTypesGrid />
      <HowItWorks />
      <CaseStudiesSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
