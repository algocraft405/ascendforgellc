export const site = {
  legalName: "Ascendforge LLC",
  brandName: "Ascendforge",
  tagline: "Sports gear, stocked and shipped from Oklahoma City.",
  purpose: "Retail ecommerce",
  productFocus: "Sports stuff",
  city: "Oklahoma City",
  region: "OK",
  country: "United States",
  phoneDisplay: "(405) 653-6921",
  phoneTel: "+14056536921",
  email: "ehokc@ascendforge.com",
  hours: [
    { days: "Monday – Friday", time: "09:00–18:00" },
    { days: "Saturday", time: "10:00–16:00" },
    { days: "Sunday", time: "Closed" },
  ],
  freeShippingThreshold: 75,
  timezone: "Central (America/Chicago)",
} as const;

export type CategoryId =
  | "running"
  | "training"
  | "team"
  | "outdoor"
  | "recovery";

export const categories: {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
}[] = [
  {
    id: "running",
    name: "Running",
    short: "Road and trail",
    description:
      "Shoes and kits built for pavement, gravel and the Oklahoma heat. Light enough for tempo work, durable enough for daily miles.",
  },
  {
    id: "training",
    name: "Training",
    short: "Strength floor",
    description:
      "Bars, plates and adjustable bells that stay in a garage gym without rattling themselves apart. Honest weights, no filler.",
  },
  {
    id: "team",
    name: "Team sports",
    short: "Match day",
    description:
      "Match balls and court gear that hold pressure and grip. The pieces rec leagues actually replace twice a season.",
  },
  {
    id: "outdoor",
    name: "Outdoor",
    short: "Trail and weather",
    description:
      "Packs and shells for early starts, sudden rain and the kind of day that starts on a sidewalk and ends on a ridge.",
  },
  {
    id: "recovery",
    name: "Recovery",
    short: "After the session",
    description:
      "Rollers and mobility tools we keep next to the warehouse floor so our own crew uses the same kit we ship.",
  },
];

export const navLinks = [
  { href: "/shop", label: "All gear" },
  { href: "/shop?category=running", label: "Running" },
  { href: "/shop?category=training", label: "Training" },
  { href: "/shop?category=team", label: "Team" },
  { href: "/shop?category=outdoor", label: "Outdoor" },
  { href: "/shop?category=recovery", label: "Recovery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
