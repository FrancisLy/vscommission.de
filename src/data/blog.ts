export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "affiliate-trends-2025",
    title: "Affiliate Marketing Trends 2025: Was der DACH-Markt erwartet",
    excerpt:
      "Ein umfassender Blick auf die wichtigsten Entwicklungen im Affiliate Marketing für den deutschsprachigen Raum – von KI-gestütztem Tracking bis hin zu nachhaltigen Partnerschaften.",
    category: "Branchen-Insights",
    date: "15. Juni 2025",
    readTime: "8 Min.",
    author: "VSCommission Team",
    image: "trends-2025",
  },
  {
    id: "influencer-marketing-guide",
    title: "Influencer Marketing im DACH-Raum: Ein Leitfaden für Marken",
    excerpt:
      "Wie Sie Influencer-Kooperationen erfolgreich in Ihre Affiliate-Strategie integrieren und welche rechtlichen Besonderheiten in Deutschland zu beachten sind.",
    category: "Strategie",
    date: "8. Juni 2025",
    readTime: "12 Min.",
    author: "Sarah Müller",
    image: "influencer-guide",
  },
  {
    id: "amazon-affiliate-strategy",
    title: "Amazon Affiliate Programme: So maximieren Sie Ihre Provisionen",
    excerpt:
      "Praxisnahe Tipps und Strategien, um als Publisher im Amazon Associates Programm erfolgreich zu sein und Ihre Einnahmen zu steigern.",
    category: "Publisher-Tipps",
    date: "2. Juni 2025",
    readTime: "6 Min.",
    author: "Markus Weber",
    image: "amazon-strategy",
  },
  {
    id: "cashback-portale-erfolg",
    title: "Warum Cashback-Portale in Deutschland boomen",
    excerpt:
      "Eine Analyse des deutschen Cashback-Marktes und warum diese Publisher-Kategorie für Werbetreibende immer wichtiger wird.",
    category: "Marktanalyse",
    date: "28. Mai 2025",
    readTime: "10 Min.",
    author: "Anna Schmidt",
    image: "cashback-boom",
  },
  {
    id: "cookieless-tracking",
    title: "Cookieless Tracking: Die Zukunft des Affiliate Marketing",
    excerpt:
      "Wie sich das Ende von Third-Party-Cookies auf das Affiliate Marketing auswirkt und welche Lösungen VSCommission anbietet.",
    category: "Technologie",
    date: "20. Mai 2025",
    readTime: "9 Min.",
    author: "VSCommission Team",
    image: "cookieless",
  },
  {
    id: "dsgvo-compliance",
    title: "DSGVO-konformes Affiliate Marketing: Leitfaden 2025",
    excerpt:
      "Alles, was Sie über die rechtlichen Anforderungen im Affiliate Marketing wissen müssen – aktualisiert für 2025.",
    category: "Rechtliches",
    date: "12. Mai 2025",
    readTime: "15 Min.",
    author: "Thomas Becker",
    image: "dsgvo",
  },
];
