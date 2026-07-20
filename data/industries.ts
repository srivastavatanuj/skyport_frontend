import {
  Bolt,
  Factory,
  Building2,
  Ship,
  Car,
  Wheat,
  ShoppingCart,
  FlaskConical,
  Globe2,
  ShieldCheck,
  PackageCheck,
  Headset,
  Building,
  Handshake,
} from "lucide-react";

export const industriesHero = {
  title: "Industries We Serve",
  description:
    "Our diverse product portfolio and global experience enable us to cater to a wide range of industries with reliable sourcing, quality assurance and efficient logistics.",
  backgroundImage: "/images/industries/hero.png",
};

export const industriesIntro = {
  title: "Industries We Serve",

  description:
    "Our diverse product portfolio and global experience enable us to cater to a wide range of industries. We understand industry-specific requirements and deliver products that help our clients build, manufacture and grow with confidence.",

  highlights: [
    {
      icon: Building,
      title: "Solutions That Build Industries",
      description:
        "We supply high-quality materials that meet the unique needs of multiple sectors worldwide.",
    },
    {
      icon: Handshake,
      title: "Partnerships That Last",
      description:
        "We believe in long-term relationships built on trust, quality and consistent performance.",
    },
  ],
};

export const industries = [
  {
    icon: Bolt,
    title: "Energy & Power",
    description:
      "Supplying fuels, industrial oils and critical materials for power generation.",
    href: "/industries/energy",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Reliable industrial raw materials supporting efficient manufacturing.",
    href: "/industries/manufacturing",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Building materials and infrastructure products for modern construction.",
    href: "/industries/construction",
  },
  {
    icon: Ship,
    title: "Shipping & Marine",
    description:
      "Marine fuels, materials and logistics support for shipping industries.",
    href: "/industries/shipping",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Industrial materials supporting vehicle manufacturing and aftermarket.",
    href: "/industries/automotive",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description:
      "Premium agricultural commodities and food-grade products.",
    href: "/industries/agriculture",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    description:
      "Reliable sourcing and distribution solutions for retail businesses.",
    href: "/industries/retail",
  },
  {
    icon: FlaskConical,
    title: "Chemicals & Allied",
    description:
      "Industrial chemicals and raw materials for multiple industries.",
    href: "/industries/chemicals",
  },
];

export const solutions = {
  title: "Customized Solutions for Every Industry",

  description:
    "We work closely with our clients to understand their requirements and provide tailored sourcing solutions that ensure quality, reliability and long-term value.",

  image: "/images/industries/industry.jpg",

  features: [
    {
      icon: ShieldCheck,
      title: "Quality Assured",
    },
    {
      icon: Globe2,
      title: "Global Standards",
    },
    {
      icon: PackageCheck,
      title: "Reliable Supply",
    },
    {
      icon: Headset,
      title: "Dedicated Support",
    },
  ],
};

export const industriesCTA = {
  title: "Can't find your industry?",

  description:
    "Let's discuss your requirements and build the right sourcing solution for your business.",

  primaryButton: {
    title: "Request a Quote",
    href: "/request-a-quote",
  },

  secondaryButton: {
    title: "Contact Us",
    href: "/contact",
  },
};