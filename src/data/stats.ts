export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const platformStats: Stat[] = [
  {
    value: 12000,
    suffix: "+",
    label: "Aktive Publisher",
    description: "Über 12.000 verifizierte Publisher im Netzwerk",
  },
  {
    value: 500,
    suffix: "+",
    label: "Marken & Programme",
    description: "Mehr als 500 Marken vertrauen auf uns",
  },
  {
    value: 25,
    suffix: "M €",
    label: "Jährliche Provisionen",
    description: "Über 25 Millionen Euro Provision jährlich",
  },
  {
    value: 35,
    suffix: "%",
    label: "Conversion-Steigerung",
    description: "Durchschnittliche Conversion-Verbesserung",
  },
];

export const marketStats = {
  countries: 4,
  countriesList: ["Deutschland", "Österreich", "Belgien", "Niederlande"],
  languageReach: "100+ Mio. Deutschsprachige",
  marketShare: "Top 5 im DACH-Raum",
};
