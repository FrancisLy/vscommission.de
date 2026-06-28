export interface PublisherType {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  avgCommission: string;
  popularFor: string[];
}

export const publisherTypes: PublisherType[] = [
  {
    id: "coupon",
    name: "Coupon-Seiten",
    icon: "TicketPercent",
    description:
      "Gutschein- und Rabattportale, die exklusive Angebote und Promo-Codes für Marken bereitstellen.",
    features: ["Gutscheincodes", "Rabattaktionen", "Saisonale Angebote", "Exklusive Deals"],
    avgCommission: "3% - 15%",
    popularFor: ["E-Commerce", "Fashion", "Elektronik"],
  },
  {
    id: "cashback",
    name: "Cashback-Portale",
    icon: "Wallet",
    description:
      "Plattformen, die Käufern einen Teil ihrer Ausgaben als Cashback zurückerstatten.",
    features: ["Cashback-Raten", "Mitgliederbindung", "Treueprogramme", "Browser-Erweiterungen"],
    avgCommission: "2% - 10%",
    popularFor: ["E-Commerce", "Reisen", "Versicherungen"],
  },
  {
    id: "media-buying",
    name: "Media Buying",
    icon: "Megaphone",
    description:
      "Performance-Marketing-Experten, die Paid Traffic über verschiedene Kanäle einkaufen.",
    features: ["Paid Ads", "Traffic-Arbitrage", "DSP/SSP", "Programmatic Buying"],
    avgCommission: "5% - 25%",
    popularFor: ["Lead-Gen", "E-Commerce", "Apps"],
  },
  {
    id: "ppc",
    name: "PPC / SEM",
    icon: "Search",
    description:
      "Suchmaschinenmarketing-Spezialisten, die gezielte Anzeigen auf Google & Bing schalten.",
    features: ["Google Ads", "Bing Ads", "Keyword-Optimierung", "Bid-Management"],
    avgCommission: "4% - 20%",
    popularFor: ["E-Commerce", "Dienstleistungen", "B2B"],
  },
  {
    id: "influencer",
    name: "Influencer",
    icon: "Users",
    description:
      "Content-Creator und Meinungsführer mit engagierter Community auf Social-Media-Plattformen.",
    features: ["Instagram", "YouTube", "TikTok", "Blog-Beiträge"],
    avgCommission: "5% - 30%",
    popularFor: ["Beauty", "Fashion", "Lifestyle", "Tech"],
  },
  {
    id: "content",
    name: "Content-Publisher",
    icon: "FileText",
    description:
      "Blogger, Redaktionen und Vergleichsportale mit hochwertigem redaktionellem Content.",
    features: ["Vergleichstests", "Ratgeber", "Reviews", "SEO-Content"],
    avgCommission: "3% - 15%",
    popularFor: ["Tech", "Finance", "Reisen", "Produkttests"],
  },
  {
    id: "email",
    name: "Email-Marketing",
    icon: "Mail",
    description:
      "Newsletter-Betreiber mit großen, segmentierten Abonnenten-Listen und hoher Engagement-Rate.",
    features: ["Newsletter", "Drip-Kampagnen", "Segmentierung", "A/B-Testing"],
    avgCommission: "4% - 18%",
    popularFor: ["E-Commerce", "Reisen", "Finance"],
  },
  {
    id: "display",
    name: "Display-Advertising",
    icon: "Monitor",
    description:
      "Verlage und Netzwerke mit Bannerwerbung auf hochfrequentierten Websites.",
    features: ["Banner-Ads", "Native Ads", "Retargeting", "Dynamic Creative"],
    avgCommission: "2% - 12%",
    popularFor: ["Branding", "E-Commerce", "Awareness"],
  },
  {
    id: "mobile",
    name: "Mobile-Marketing",
    icon: "Smartphone",
    description:
      "Mobile-First-Publisher mit Fokus auf In-App-Werbung und mobile-optimierte Landingpages.",
    features: ["In-App-Ads", "Mobile-Optimierung", "Push-Benachrichtigungen", "App-Install-Ads"],
    avgCommission: "3% - 15%",
    popularFor: ["Apps", "Gaming", "E-Commerce"],
  },
  {
    id: "app",
    name: "App-Publisher",
    icon: "AppWindow",
    description:
      "App-Entwickler und Betreiber, die Werbung in ihre mobilen Anwendungen integrieren.",
    features: ["In-App-Käufe", "Rewarded Ads", "App-Installs", "Subscription"],
    avgCommission: "5% - 25%",
    popularFor: ["Mobile Apps", "Gaming", "SaaS"],
  },
];
