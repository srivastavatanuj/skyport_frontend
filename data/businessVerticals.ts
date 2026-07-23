import {
  Globe,
  Package,
  Handshake,
  ShieldCheck,
  Fuel,
  Recycle,
  Layers3,
  Nut,
  Wheat,
} from "lucide-react";

export const stats = [
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: Package,
    value: "6+",
    label: "Business Verticals",
  },
  {
    icon: Handshake,
    value: "1000+",
    label: "Global Clients",
  },
  {
    icon: ShieldCheck,
    value: "Quality",
    label: "You Can Trust",
  },
];


export const verticals = [
  {
    title: "Energy",
    image: "/images/business/energy.png",
    description:
      "Premium energy products that power industries and drive economies forward.",
    feature: "Fuels & energy solutions",
    icon: Fuel,
    href: "/products/energy",
  },
  {
    title: "Industrial Materials",
    image: "/images/business/metal.png",
    description:
      "High-quality metal scraps and industrial materials for global industries.",
    feature: "Metal scraps & recycling solutions",
    icon: Recycle,
    href: "/products/metals",
  },
  {
    title: "Building Materials",
    image: "/images/business/plywood.png",
    description:
      "Reliable building materials for strong, sustainable construction.",
    feature: "Plywood & decorative laminates",
    icon: Layers3,
    href: "/products/plywood",
  },
  {
    title: "Dry Fruits",
    image: "/images/business/dry-fruits.png",
    description:
      "Naturally delicious and premium quality dry fruits from trusted sources.",
    feature: "Nuts, berries & more",
    icon: Nut,
    href: "/products/dry-fruits",
  },
  {
    title: "Agri Commodities",
    image: "/images/business/agri.png",
    description:
      "High-quality agricultural commodities to nourish the world.",
    feature: "Rice, pulses, millets & more",
    icon: Wheat,
    href: "/products/agri",
  },
  {
    title: "Global Trade Solutions",
    image: "/images/business/logistics.png",
    description:
      "End-to-end sourcing, logistics and supply chain solutions.",
    feature: "Sourcing, inspection & logistics",
    icon: Globe,
    href: "/contact",
  },
];


export const clients = [
  "/images/clients/reliance.png",
  "/images/clients/adani.png",
  "/images/clients/arcelor.png",
  "/images/clients/vedanta.png",
  "/images/clients/petronas.png",
  "/images/clients/exxon.png",
];

export const businessVericalsHero = {
  title: "Our Business Verticals",
  description:
    "At Skyport Exim Corp, we operate across multiple high-demand sectors, delivering quality products and reliable solutions to customers in 50+ countries worldwide.",
  backgroundImage: "/images/contact/hero.png",
};