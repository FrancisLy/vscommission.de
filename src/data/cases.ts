export interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  publisherTypes: string[];
  duration: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "anker",
    brand: "Anker",
    category: "Konsumelektronik",
    title: "Wie Anker den DACH-Umsatz in 6 Monaten um 180% steigerte",
    description:
      "Durch die strategische Kombination von Content-Marketing und Influencer-Kooperationen erreichte Anker eine massive Umsatzsteigerung im deutschsprachigen Raum.",
    metrics: [
      { label: "Umsatzwachstum", value: "+180%" },
      { label: "Neukunden", value: "45.000+" },
      { label: "ROI", value: "1:7" },
    ],
    publisherTypes: ["Content", "Influencer", "PPC"],
    duration: "6 Monate",
    image: "anker-case",
  },
  {
    id: "shein",
    brand: "SHEIN",
    category: "Fashion & Lifestyle",
    title: "SHEIN Marktbeitritt in Deutschland: 50.000+ Neukunden im ersten Monat",
    description:
      "Die Integration in das Coupon- und Cashback-Netzwerk ermöglichte SHEIN einen erfolgreichen Markteintritt mit beeindruckenden Akquisitionszahlen.",
    metrics: [
      { label: "Neukunden", value: "50.000+" },
      { label: "Conversion Rate", value: "4,8%" },
      { label: "Aktive Publisher", value: "320" },
    ],
    publisherTypes: ["Coupon", "Cashback", "Influencer"],
    duration: "1 Monat",
    image: "shein-case",
  },
  {
    id: "europcar",
    brand: "Europcar",
    category: "Auto & Mobilität",
    title: "Saisonkampagne Sommer: ROI von 1:8 durch Performance-Marketing",
    description:
      "Die gezielte Sommerkampagne mit PPC- und Display-Werbung führte zu außergewöhnlich guten Buchungszahlen während der Reisesaison.",
    metrics: [
      { label: "ROI", value: "1:8" },
      { label: "Buchungen", value: "+220%" },
      { label: "Kampagnen-Reach", value: "2,5M+" },
    ],
    publisherTypes: ["PPC", "Display", "Email"],
    duration: "3 Monate",
    image: "europcar-case",
  },
];
