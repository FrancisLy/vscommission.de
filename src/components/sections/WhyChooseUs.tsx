import { Section, SectionHeader } from "@/components/ui/Section";
import { Shield, Globe, Zap, Award, Headphones, Lock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "DACH-Expertise",
    description:
      "Spezialisiert auf den deutschsprachigen Raum mit tiefem Verständnis für lokale Märkte, rechtliche Anforderungen und Konsumentenverhalten.",
  },
  {
    icon: Shield,
    title: "Betrugsschutz",
    description:
      " fortschrittliche KI-gestützte Betrugserkennung schützt Ihre Kampagnen vor Click-Fraud und unzulässigen Praktiken.",
  },
  {
    icon: Zap,
    title: "Schnelle Integration",
    description:
      "Plug & Play-Integration mit allen gängigen E-Commerce-Plattformen. Shopify, WooCommerce, Magento und mehr.",
  },
  {
    icon: Award,
    title: "Top-Provisionen",
    description:
      "Wir bieten die wettbewerbsfähigsten Provisionen im Markt, um die besten Publisher für Ihr Programm zu gewinnen.",
  },
  {
    icon: Headphones,
    title: "Persönlicher Support",
    description:
      "Dedizierte Account-Manager mit tiefgehender Branchenerfahrung stehen Ihnen während der gesamten Laufzeit zur Seite.",
  },
  {
    icon: Lock,
    title: "DSGVO-konform",
    description:
      "Vollständige DSGVO-Konformität mit Server-Standort in Deutschland und zertifiziertem Datenschutz-Management.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-bg-light">
      <SectionHeader
        eyebrow="Warum VSCommission?"
        title="Ihr Vorteil im DACH-Markt"
        description="Wir kombinieren lokale Expertise mit fortschrittlicher Technologie, um Ihnen den bestmöglichen Erfolg im Affiliate Marketing zu ermöglichen."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
