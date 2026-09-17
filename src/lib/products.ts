import { categories, type CategoryId } from "./site";

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  brand: string;
  category: CategoryId;
  price: number;
  compareAt?: number;
  stock: number;
  leadDays: number;
  featured?: boolean;
  hero?: boolean;
  weight: string;
  size: string;
  summary: string;
  why: string;
  features: string[];
  specs: { group: string; rows: { label: string; value: string }[] }[];
};

export const products: Product[] = [
  {
    id: "AF-APEX-KNIT",
    slug: "apex-knit-distance",
    sku: "AF-RK-140",
    name: "Apex Knit Distance",
    brand: "Ascendforge",
    category: "running",
    price: 159,
    compareAt: 199,
    stock: 18,
    leadDays: 2,
    featured: true,
    hero: true,
    weight: "8.4 oz",
    size: "Men 7–13 / Women 6–12",
    summary:
      "A daily trainer with a rockered midsole and a knit upper that dumps heat. The pair we put on first when someone asks what to run Oklahoma summer in.",
    why: "Most “lightweight” trainers sacrifice the foam that actually lasts past 250 miles. Apex Knit Distance keeps a 38 mm stack and a 6 mm drop, so it still feels like a trainer after the first month. The knit is open enough for August, and the outsole is rubber only where we see wear on our own pairs — heel and lateral forefoot — instead of a full plate that adds ounces for no reason.",
    features: [
      "38 mm stack, 6 mm drop",
      "Engineered knit upper, unlined",
      "Blown foam midsole with a mild rocker",
      "Rubber only at high-wear zones",
      "Reflective heel tab for early miles",
    ],
    specs: [
      {
        group: "Fit & build",
        rows: [
          { label: "Weight (US M9)", value: "8.4 oz" },
          { label: "Stack", value: "38 / 32 mm" },
          { label: "Drop", value: "6 mm" },
          { label: "Last", value: "Standard, medium volume" },
        ],
      },
      {
        group: "Use",
        rows: [
          { label: "Best for", value: "Daily miles, easy long runs" },
          { label: "Surface", value: "Road, packed path" },
          { label: "Break-in", value: "None — knit gives immediately" },
        ],
      },
    ],
  },
  {
    id: "AF-TRAIL-GRIP",
    slug: "trailforge-grip-pack",
    sku: "AF-TR-220",
    name: "Trailforge Grip Pack",
    brand: "Ascendforge",
    category: "running",
    price: 179,
    compareAt: 229,
    stock: 11,
    leadDays: 3,
    featured: true,
    weight: "10.1 oz",
    size: "Men 7–13 / Women 6–12",
    summary:
      "A 4 mm lugged outsole and a toe cap that survives limestone. Built for the Wichita Mountains, not a treadmill with a trail setting.",
    why: "Trail shoes either over-protect and feel like hiking boots, or they are road shoes with a chevron printed on the bottom. Trailforge Grip Pack sits in the middle: a rock plate you notice only on shale, and lugs that shed red clay instead of packing it. We stock it because it is the pair our warehouse crew actually wears on weekend loops.",
    features: [
      "4 mm multidirectional lugs",
      "TPU rock plate under the forefoot",
      "Reinforced toe bumper",
      "Gusseted tongue to keep grit out",
      "Sticky rubber on the heel brake",
    ],
    specs: [
      {
        group: "Fit & build",
        rows: [
          { label: "Weight (US M9)", value: "10.1 oz" },
          { label: "Stack", value: "32 / 26 mm" },
          { label: "Lug depth", value: "4 mm" },
          { label: "Drop", value: "6 mm" },
        ],
      },
      {
        group: "Use",
        rows: [
          { label: "Best for", value: "Singletrack, fire roads" },
          { label: "Surface", value: "Dirt, rock, wet grass" },
          { label: "Waterproof", value: "No — drains instead" },
        ],
      },
    ],
  },
  {
    id: "AF-IRON-SET",
    slug: "iron-set-adjustable-dumbbells",
    sku: "AF-ST-550",
    name: "Iron Set Adjustable Dumbbells",
    brand: "Forge Lab",
    category: "training",
    price: 349,
    compareAt: 449,
    stock: 7,
    leadDays: 4,
    featured: true,
    weight: "5–52.5 lb each",
    size: "Pair",
    summary:
      "A pair that replaces a rack: 5 to 52.5 lb in 2.5 lb clicks, with a collar that does not drift mid-set.",
    why: "Cheap selector bells rattle, then the pin walks out on a press. These use a steel spine and a positive-lock collar we have dropped — on purpose — from bench height onto rubber. The handle is 32 mm, closer to a bar than a toy, and the plates are cast iron, not sand. If you only have space for one strength tool, this is the one we sell.",
    features: [
      "5–52.5 lb per hand",
      "2.5 lb increments",
      "Positive-lock steel collar",
      "32 mm knurled handle",
      "Cradle included",
    ],
    specs: [
      {
        group: "Load",
        rows: [
          { label: "Range", value: "5–52.5 lb each" },
          { label: "Increments", value: "2.5 lb" },
          { label: "Handle diameter", value: "32 mm" },
          { label: "Plate material", value: "Cast iron" },
        ],
      },
      {
        group: "Footprint",
        rows: [
          { label: "Length at max", value: "16.5 in" },
          { label: "Stand", value: "Included, powder-coated" },
          { label: "Warranty", value: "3 years mechanical" },
        ],
      },
    ],
  },
  {
    id: "AF-FORGE-BAR",
    slug: "forge-bar-20kg",
    sku: "AF-ST-200",
    name: "Forge Bar 20kg Olympic",
    brand: "Forge Lab",
    category: "training",
    price: 129,
    compareAt: 159,
    stock: 14,
    leadDays: 3,
    featured: true,
    weight: "20 kg / 44 lb",
    size: "86.6 in",
    summary:
      "A 20 kg bar with medium knurl and bronze bushings. The bar we put in a garage gym that will actually get used.",
    why: "Most entry bars are either needle-sharp knurl or so smooth they are a safety problem on a pull. This one is a 1.2 mm hill knurl with no centre knurl, so it is kind to your shins on a clean and still holds chalk on a deadlift. Bronze bushings, not cheap bushings pretending to spin. Rated to 700 lb — more than the plates we stock next to it.",
    features: [
      "20 kg / 28 mm shaft",
      "Bronze bushings",
      "Medium hill knurl, no centre knurl",
      "Dual knurl marks (IWF / IPF)",
      "700 lb static rating",
    ],
    specs: [
      {
        group: "Bar",
        rows: [
          { label: "Weight", value: "20 kg / 44 lb" },
          { label: "Length", value: "86.6 in" },
          { label: "Shaft", value: "28 mm" },
          { label: "Sleeve", value: "16.4 in loadable" },
        ],
      },
      {
        group: "Hardware",
        rows: [
          { label: "Bushings", value: "Bronze" },
          { label: "Finish", value: "Hard chrome" },
          { label: "Rating", value: "700 lb static" },
        ],
      },
    ],
  },
  {
    id: "AF-MATCHDAY",
    slug: "matchday-pro-soccer-ball",
    sku: "AF-TM-05",
    name: "Matchday Pro Soccer Ball",
    brand: "Pitchline",
    category: "team",
    price: 42,
    compareAt: 55,
    stock: 40,
    leadDays: 1,
    featured: true,
    weight: "Size 5, 14.5 oz",
    size: "Size 5",
    summary:
      "A thermally bonded size 5 that holds 8.5–15.6 PSI through a weekend tournament. The ball rec leagues reorder from us.",
    why: "Machine-stitched balls drink water and go heavy by the second half. Matchday Pro is thermally bonded, so it stays round and the weight does not jump after a wet field. We inflate every unit to 12 PSI in the warehouse, leave it overnight, and only ship the ones that hold. That is a boring test. It is also why this is the only size 5 we carry.",
    features: [
      "Thermally bonded 32-panel",
      "FIFA Quality pressure range",
      "Butyl bladder",
      "Textured PU for wet grip",
      "Hand-checked overnight hold",
    ],
    specs: [
      {
        group: "Ball",
        rows: [
          { label: "Size", value: "5" },
          { label: "Circumference", value: "68–70 cm" },
          { label: "Weight", value: "410–450 g" },
          { label: "Pressure", value: "8.5–15.6 PSI" },
        ],
      },
      {
        group: "Build",
        rows: [
          { label: "Construction", value: "Thermal bond" },
          { label: "Bladder", value: "Butyl" },
          { label: "Cover", value: "PU, micro-texture" },
        ],
      },
    ],
  },
  {
    id: "AF-COURTSTRIKE",
    slug: "courtstrike-indoor-basketball",
    sku: "AF-TM-29",
    name: "Courtstrike Indoor Basketball",
    brand: "Pitchline",
    category: "team",
    price: 48,
    compareAt: 64,
    stock: 22,
    leadDays: 1,
    featured: true,
    weight: "29.5 in, 22 oz",
    size: "Size 7",
    summary:
      "Full-grain composite, deep channel, indoor-only. The ball we put on a wood court and nowhere else.",
    why: "An indoor ball on asphalt is a wasted ball. Courtstrike is pebbled composite with a moisture-wicking cover that actually catches a sweaty palm in the fourth quarter. Deep channels for a consistent grip on a jump shot. We do not sell an “indoor/outdoor” version of this one — that cover exists so a store can sell one SKU. This is the indoor SKU.",
    features: [
      "29.5 in official size",
      "Full-grain composite cover",
      "Deep channel for finger placement",
      "Butyl bladder, nylon wound",
      "Indoor hardwood only",
    ],
    specs: [
      {
        group: "Ball",
        rows: [
          { label: "Size", value: "7 / 29.5 in" },
          { label: "Weight", value: "22 oz" },
          { label: "Inflation", value: "7–9 PSI" },
          { label: "Surface", value: "Indoor hardwood" },
        ],
      },
      {
        group: "Build",
        rows: [
          { label: "Cover", value: "Composite leather" },
          { label: "Windings", value: "Nylon" },
          { label: "Bladder", value: "Butyl" },
        ],
      },
    ],
  },
  {
    id: "AF-SUMMIT-32",
    slug: "summit-pack-32l",
    sku: "AF-OD-32",
    name: "Summit Pack 32L",
    brand: "Ridgework",
    category: "outdoor",
    price: 118,
    compareAt: 149,
    stock: 16,
    leadDays: 2,
    featured: true,
    weight: "2.1 lb",
    size: "32 L",
    summary:
      "A 32-litre day pack with a framesheet that does not collapse when you fill a bladder. Carry for a long trail day, not a campus commute.",
    why: "Most “hiking” packs at this volume are laptop bags with a sternum strap. Summit Pack 32L has a PE framesheet, a ventilated back panel, and hipbelt pockets that actually hold a phone and a gel. The 32 litres is enough for a shell, lunch and two litres of water without looking like you are moving house. We load one in the warehouse every week to check the zipper pull still tracks.",
    features: [
      "32 L main volume",
      "PE framesheet + trampoline back",
      "3 L hydration sleeve",
      "Hipbelt pockets both sides",
      "Ice-axe / pole loops",
    ],
    specs: [
      {
        group: "Carry",
        rows: [
          { label: "Volume", value: "32 L" },
          { label: "Weight", value: "2.1 lb" },
          { label: "Torso range", value: "16–20 in" },
          { label: "Hydration", value: "Sleeve, hose port" },
        ],
      },
      {
        group: "Materials",
        rows: [
          { label: "Body", value: "210D ripstop nylon" },
          { label: "Base", value: "420D packcloth" },
          { label: "Weather", value: "DWR, rain cover included" },
        ],
      },
    ],
  },
  {
    id: "AF-STORMSHELL",
    slug: "stormshell-training-jacket",
    sku: "AF-OD-WX",
    name: "Stormshell Training Jacket",
    brand: "Ridgework",
    category: "outdoor",
    price: 89,
    compareAt: 119,
    stock: 24,
    leadDays: 2,
    featured: true,
    weight: "9.6 oz (M)",
    size: "XS–XXL",
    summary:
      "A packable shell that blocks wind and a passing rain without turning into a sauna on a tempo run.",
    why: "Fully taped mountaineering jackets are overkill for a Tuesday interval session, and fashion windbreakers wet through in ten minutes. Stormshell is a 2.5-layer membrane with pit zips and a hood that actually stays on when you turn your head. It packs into its own chest pocket. We hang-dry every return to check the DWR is still doing something — if it is not, it does not go back on the floor.",
    features: [
      "2.5-layer waterproof/breathable",
      "Pit zips",
      "Adjustable hood with visor",
      "Packs into chest pocket",
      "Reflective hits at cuff and hem",
    ],
    specs: [
      {
        group: "Shell",
        rows: [
          { label: "Weight (M)", value: "9.6 oz" },
          { label: "Waterproof", value: "10k / 10k" },
          { label: "Seams", value: "Fully taped" },
          { label: "Fit", value: "Athletic, layer over a mid" },
        ],
      },
      {
        group: "Details",
        rows: [
          { label: "Sizes", value: "XS–XXL" },
          { label: "Pack size", value: "Chest-pocket stuff sack" },
          { label: "Care", value: "Wash cold, re-proof as needed" },
        ],
      },
    ],
  },
  {
    id: "AF-PULSE-ROLL",
    slug: "pulse-recovery-roller",
    sku: "AF-RC-12",
    name: "Pulse Recovery Roller",
    brand: "Reset Co.",
    category: "recovery",
    price: 39,
    compareAt: 49,
    stock: 31,
    leadDays: 1,
    featured: true,
    weight: "1.4 lb",
    size: "12 × 5.5 in",
    summary:
      "A dense EVA roller with a hollow core. Firm enough to do something, short enough to throw in a gym bag.",
    why: "Soft rollers are pillows. Aggressive grid rollers bruise people who then never use them again. Pulse is a middle density EVA with shallow longitudinal grooves — enough texture to catch a calf, not enough to feel like a cheese grater. Twelve inches, so it fits a bag. This is what sits next to our packing table, which is the only endorsement that matters here.",
    features: [
      "12 × 5.5 in compact length",
      "Medium-firm EVA",
      "Hollow core, 1.4 lb",
      "Shallow grooves, not spikes",
      "Wipes clean",
    ],
    specs: [
      {
        group: "Roller",
        rows: [
          { label: "Length", value: "12 in" },
          { label: "Diameter", value: "5.5 in" },
          { label: "Weight", value: "1.4 lb" },
          { label: "Density", value: "Medium-firm EVA" },
        ],
      },
      {
        group: "Use",
        rows: [
          { label: "Best for", value: "Calves, quads, back" },
          { label: "Travel", value: "Fits most gym bags" },
          { label: "Care", value: "Wipe with mild soap" },
        ],
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(category?: CategoryId) {
  if (!category) return products;
  return products.filter((product) => product.category === category);
}

export function relatedProducts(slug: string, limit = 3) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((product) => product.slug !== slug)
    .sort((a, b) => {
      const aSame = a.category === current.category ? 0 : 1;
      const bSame = b.category === current.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, limit);
}

export function categoryCount(id: CategoryId) {
  return products.filter((product) => product.category === id).length;
}

export function categoryLabel(id: CategoryId) {
  return categories.find((category) => category.id === id)?.name ?? id;
}

export const featuredProducts = products.filter((product) => product.featured);

export const heroProduct = products.find((product) => product.hero) ?? products[0];

export function savingsPercent(product: Product) {
  if (!product.compareAt || product.compareAt <= product.price) return 0;
  return Math.round((1 - product.price / product.compareAt) * 100);
}

export function stockLabel(product: Product) {
  if (product.stock <= 0) return "Out of stock";
  if (product.stock <= 3) {
    return `Only ${product.stock} left — ships in ${leadCopy(product.leadDays)}`;
  }
  return `In stock — ships in ${leadCopy(product.leadDays)}`;
}

export function stockTone(product: Product) {
  if (product.stock <= 0) return "text-red-600";
  if (product.stock <= 3) return "text-amber-700";
  return "text-emerald-700";
}

export function leadCopy(days: number) {
  if (days <= 1) return "next business day";
  return `${days} business days`;
}
