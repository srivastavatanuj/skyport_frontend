import {
  Globe2,
  Boxes,
  Handshake,
  Ship,
  Landmark,
  TowerControl,
  Trees,
  LandmarkIcon,
  Building2,
  ShieldCheck,
  PackageCheck,
  ClipboardCheck,
  Headset,
} from "lucide-react";

export const globalMarketsHero = {
  title: "Global Markets",
  description:
    "Connecting quality Indian products with industries worldwide. We export to over 50 countries across 6 continents, building trusted global partnerships.",

  backgroundImage: "/images/home/world_connectingmap.png",

  mapImage: "/images/globalmarket/world-map.png",
};

export const marketStats = [
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: Boxes,
    value: "6",
    label: "Continents",
  },
  {
    icon: Handshake,
    value: "200+",
    label: "Global Clients",
  },
  {
    icon: Ship,
    value: "Reliable",
    label: "Global Logistics",
  },
];

export const regions = [
  {
    title: "Asia",
    icon: Landmark,
    image: "/images/globalmarket/asia.png",
    countries: [
      "UAE",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "Singapore",
      "Malaysia",
      "Bangladesh",
      "Sri Lanka",
      "China",
      "Japan",
      "South Korea",
    ],
  },

  {
    title: "Middle East",
    icon: Landmark,
    image: "/images/globalmarket/mid-east.png",
    countries: [
      "UAE",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Bahrain",
      "Jordan",
      "Iraq",
    ],
  },

  {
    title: "Europe",
    icon: TowerControl,
    image: "/images/globalmarket/europe.png",
    countries: [
      "United Kingdom",
      "Germany",
      "France",
      "Italy",
      "Spain",
      "Belgium",
      "Netherlands",
      "Poland",
      "Greece",
    ],
  },

  {
    title: "Africa",
    icon: Trees,
    image: "/images/globalmarket/africa.png",
    countries: [
      "South Africa",
      "Egypt",
      "Kenya",
      "Nigeria",
      "Tanzania",
      "Mauritius",
    ],
  },

  {
    title: "North America",
    icon: LandmarkIcon,
    image: "/images/globalmarket/north-america.png",
    countries: [
      "USA",
      "Canada",
      "Mexico",
    ],
  },

  {
    title: "South America",
    icon: Building2,
    image: "/images/globalmarket/south-america.png",
    countries: [
      "Brazil",
      "Argentina",
      "Chile",
      "Peru",
      "Colombia",
    ],
  },
];

export const crossBorder = {
  title: "Delivering Across Borders",

  description:
    "Our trusted global network and efficient logistics ensure safe, timely and reliable delivery to customers around the world.",

  image: "/images/faq/hero.png",

  features: [
    {
      icon: ShieldCheck,
      title: "Trusted Partnerships",
      description:
        "Long-term global supplier relationships.",
    },
    {
      icon: PackageCheck,
      title: "Timely Delivery",
      description:
        "Reliable international logistics.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Assurance",
      description:
        "Strict inspection before every shipment.",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description:
        "Dedicated export assistance worldwide.",
    },
  ],
};

export const globalCTA = {
  title: "Looking to import from India?",

  description:
    "Let's build a strong and reliable business partnership together.",

  primary: {
    text: "Request a Quote",
    href: "/request-a-quote",
  },

  secondary: {
    text: "Contact Us",
    href: "/contact",
  },
};