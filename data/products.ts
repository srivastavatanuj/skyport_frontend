import {
  Fuel,
  Recycle,
  Layers3,
  PanelTop,
  Nut,
  Wheat,
  Globe,
  ShieldCheck,
  BadgeDollarSign,
  Truck,
} from "lucide-react";

export const productsHero = {
  title: "Premium Products",
  description:
    "A wide range of high-quality products sourced from trusted manufacturers and suppliers worldwide.",

  backgroundImage: "/images/products/hero.png",

  highlights: [
    {
      icon: ShieldCheck,
      title: "Quality Assured",
    },
    {
      icon: Globe,
      title: "Sourced Worldwide",
    },
    {
      icon: Truck,
      title: "On-time Delivery",
    },
  ],
};

export const productCategories = [
  {
    id: "energy",
    title: "Energy",
    slug: "energy",
    icon: Fuel,
  },
  {
    id: "scrap",
    title: "Metal Scraps",
    slug: "scrap",
    icon: Recycle,
  },
  {
    id: "plywood",
    title: "Plywood",
    slug: "plywood",
    icon: PanelTop,
  },
  {
    id: "laminate",
    title: "Decorative Laminates",
    slug: "laminate",
    icon: Layers3,
  },
  {
    id: "dry-fruits",
    title: "Dry Fruits",
    slug: "dry-fruits",
    icon: Nut,
  },
  {
    id: "agri",
    title: "Agri Commodities",
    slug: "agri",
    icon: Wheat,
  },
];

export const products = [
  {
    id: 1,
    slug: "diesel-en590-10ppm",
    category: "energy",
    title: "Diesel EN590 10ppm",
    image: "/images/products/diesel.jpg",
    icon: Fuel,
    description:
      "High-quality automotive diesel with ultra-low sulphur content.",
  },

  {
    id: 2,
    slug: "copper-scrap",
    category: "scrap",
    title: "Copper Scrap",
    image: "/images/products/copper.jpg",
    icon: Recycle,
    description:
      "Premium-grade copper scrap for recycling and manufacturing.",
  },

  {
    id: 3,
    slug: "mr-plywood",
    category: "plywood",
    title: "MR Grade Plywood",
    image: "/images/products/plywood.jpg",
    icon: PanelTop,
    description:
      "Premium interior plywood for furniture and construction.",
  },

  {
    id: 4,
    slug: "decorative-laminates",
    category: "laminate",
    title: "Decorative Laminates",
    image: "/images/products/laminate.jpg",
    icon: Layers3,
    description:
      "Stylish decorative laminates in various finishes.",
  },

  {
    id: 5,
    slug: "premium-dry-fruits",
    category: "dry-fruits",
    title: "Premium Dry Fruits",
    image: "/images/products/dryfruits.jpg",
    icon: Nut,
    description:
      "Fresh and premium quality almonds, cashews and walnuts.",
  },

  {
    id: 6,
    slug: "basmati-rice",
    category: "agri",
    title: "Basmati Rice",
    image: "/images/products/rice.jpg",
    icon: Wheat,
    description:
      "Long-grain premium basmati rice with rich aroma.",
  },
];

export const productFeatures = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Trusted suppliers across the world.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict inspection before dispatch.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Maximum value with best pricing.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Safe and on-time logistics.",
  },
];

export const productCTA = {
  title: "Looking for something specific?",
  description:
    "Our sourcing specialists will help you find exactly what you need.",

  button: {
    title: "Get in Touch",
    href: "/contact",
  },
};