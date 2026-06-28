export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
}

export const navigationItems: NavItem[] = [
  { label: "Startseite", href: "/" },
  {
    label: "Für Werbetreibende",
    href: "/fuer-werbetreibende",
    children: [
      {
        label: "Lösungen",
        href: "/fuer-werbetreibende/loesungen",
        description: "Maßgeschneiderte Lösungen für Ihr Unternehmen",
      },
      {
        label: "Services",
        href: "/fuer-werbetreibende/services",
        description: "Unsere Performance-Marketing-Services im Überblick",
      },
    ],
  },
  {
    label: "Für Publisher",
    href: "/fuer-publisher",
    children: [
      {
        label: "Publisher-Typen",
        href: "/fuer-publisher/typen",
        description: "Entdecken Sie die verschiedenen Publisher-Kategorien",
      },
      {
        label: "Registrierung",
        href: "/fuer-publisher/registrierung",
        description: "Werden Sie Teil unseres Netzwerks",
      },
    ],
  },
  { label: "Marken & Programme", href: "/marken-programme" },
  {
    label: "Über uns",
    href: "/ueber-uns",
  },
  {
    label: "Ressourcen",
    href: "/ressourcen",
    children: [
      {
        label: "Blog",
        href: "/ressourcen/blog",
        description: "Aktuelle Insights und Branchennews",
      },
      {
        label: "Case Studies",
        href: "/ressourcen/case-studies",
        description: "Erfolgsgeschichten unserer Partner",
      },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerLinks = {
  platform: {
    title: "Plattform",
    links: [
      { label: "Für Werbetreibende", href: "/fuer-werbetreibende" },
      { label: "Für Publisher", href: "/fuer-publisher" },
      { label: "Marken & Programme", href: "/marken-programme" },
      { label: "Über uns", href: "/ueber-uns" },
    ],
  },
  ressourcen: {
    title: "Ressourcen",
    links: [
      { label: "Blog", href: "/ressourcen/blog" },
      { label: "Case Studies", href: "/ressourcen/case-studies" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  rechtliches: {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
      { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
    ],
  },
};
