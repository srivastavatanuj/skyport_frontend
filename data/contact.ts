import {
  Phone,
  Mail,
  Globe,
  Clock3,
  MapPin,
  Handshake,
  ShieldCheck,
  Truck,
  Navigation
} from "lucide-react";

export const contactHero = {
  title: "Contact Us",
  description:
    "Have a question, requirement or partnership proposal? Our team is ready to connect and help you with the best trade solutions tailored to your needs.",
  backgroundImage: "/images/contact/hero.png",
};

export const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+91 9944173183",
      "+91 44 3002 3183",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@skyportexim.com",
      "sales@skyportexim.com",
    ],
  },
  {
    icon: Globe,
    title: "Website",
    details: [
      "www.skyportexim.com",
    ],
  },
  {
    icon: Clock3,
    title: "Business Hours",
    details: [
      "Monday - Saturday",
      "09:00 AM - 06:00 PM (IST)",
    ],
  },
];


export const officeLocation = {
  title: "Our Head Office",
  company: "Skyport Exim Corp Private Limited",

  address: [
    "Awfis Towers",
    "111, Rajiv Gandhi Salai (OMR)",
    "Kottivakkam",
    "Chennai, Tamil Nadu - 600096",
    "India",
  ],

  directionUrl: "https://maps.google.com",

  mapImage: "/images/contact/map.png",

  icon: MapPin,
  buttonIcon: Navigation,
};


export const contactFeatures = [
  {
    icon: Globe,
    title: "Global Presence",
    description: "Serving clients across 50+ countries worldwide.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnership",
    description: "Building long-term business relationships based on trust.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Products that meet international quality standards.",
  },
  {
    icon: Truck,
    title: "On-time Delivery",
    description: "Efficient logistics with timely global delivery.",
  },
];

export const subjectOptions = [
  "General Inquiry",
  "Business Partnership",
  "Product Inquiry",
  "Quotation Request",
  "Support",
];

export const productOptions = [
  "Energy",
  "Metal Scraps",
  "Plywood",
  "Decorative Laminates",
  "Dry Fruits",
  "Agri Commodities",
];

