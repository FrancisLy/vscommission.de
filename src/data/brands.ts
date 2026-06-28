export interface Brand {
  name: string;
  category: string;
  logo: string;
  color: string;
}

export const brands: Brand[] = [
  { name: "Europcar", category: "Auto & Mobilität", logo: "Europcar", color: "#0066B3" },
  { name: "OTTO", category: "E-Commerce", logo: "OTTO", color: "#D4021D" },
  { name: "AliExpress", category: "E-Commerce", logo: "AliExpress", color: "#FF4747" },
  { name: "Anker", category: "Konsumelektronik", logo: "Anker", color: "#00A0E9" },
  { name: "Eufy", category: "Smart Home", logo: "eufy", color: "#00A651" },
  { name: "SHEIN", category: "Fashion & Lifestyle", logo: "SHEIN", color: "#000000" },
  { name: "MediaMarkt", category: "Konsumelektronik", logo: "MediaMarkt", color: "#DF0000" },
  { name: "Roborock", category: "Smart Home", logo: "Roborock", color: "#1A1A1A" },
  { name: "Aiper", category: "Smart Home", logo: "Aiper", color: "#0066FF" },
  { name: "Myprotein", category: "Health & Nutrition", logo: "MYPROTEIN", color: "#00A19C" },
  { name: "Amazon", category: "E-Commerce", logo: "amazon", color: "#FF9900" },
  { name: "Lidl", category: "Einzelhandel", logo: "Lidl", color: "#0050AA" },
];

export const brandCategories = [
  "Alle",
  "E-Commerce",
  "Konsumelektronik",
  "Smart Home",
  "Fashion & Lifestyle",
  "Auto & Mobilität",
  "Health & Nutrition",
  "Einzelhandel",
];
