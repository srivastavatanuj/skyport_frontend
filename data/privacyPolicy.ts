import {
  Boxes,
  ShieldCheck,
  CreditCard,
  Truck,
  FileText,
  RotateCcw,
  BadgeCheck,
  CircleHelp,
} from "lucide-react";

export const privacyPolicyHero = {
  title: "Privacy Policy",
  description:
    "Find answers to the most common questions about Skyport Exim Corp, our products, services and policies.",
  backgroundImage: "/images/privacyPolicy/hero.png",
};

export const privacyPolicyCategories = [
  {
    id: "general",
    title: "General",
    icon: Boxes,
  },
  {
    id: "products",
    title: "Products & Quality",
    icon: ShieldCheck,
  },
  {
    id: "payments",
    title: "Orders & Payments",
    icon: CreditCard,
  },
  {
    id: "shipping",
    title: "Shipping & Logistics",
    icon: Truck,
  },
  {
    id: "documents",
    title: "Documentation",
    icon: FileText,
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    icon: RotateCcw,
  },
  {
    id: "policies",
    title: "Policies",
    icon: BadgeCheck,
  },
  {
    id: "other",
    title: "Other",
    icon: CircleHelp,
  },
];

export const privacyPolicy = [
  {
    category: "general",
    question: "What is Skyport Exim Corp?",
    answer:
      "Skyport Exim Corp is an international export-import company based in India, supplying premium quality products including Energy, Metal Scraps, Plywood, Decorative Laminates, Dry Fruits and Agri Commodities to customers across the globe.",
  },

  {
    category: "products",
    question: "What products do you export?",
    answer:
      "We export Energy products, Metal Scraps, Plywood, Decorative Laminates, Dry Fruits and Agri Commodities.",
  },

  {
    category: "products",
    question: "How do you ensure product quality?",
    answer:
      "Every shipment undergoes strict quality inspections and complies with international quality standards before dispatch.",
  },

  {
    category: "orders",
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "MOQ depends on the product. Contact our sales team for product-specific requirements.",
  },

  {
    category: "orders",
    question: "How can I place an order?",
    answer:
      "You can contact our sales team directly or submit a Request for Quote through our website.",
  },

  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We generally accept Bank Transfer (TT), LC and other internationally accepted payment methods depending on the agreement.",
  },

  {
    category: "shipping",
    question: "How do you handle shipping?",
    answer:
      "We coordinate with trusted logistics partners to ensure safe and timely worldwide delivery.",
  },

  {
    category: "shipping",
    question: "Which countries do you export to?",
    answer:
      "We currently serve customers in more than 50 countries worldwide.",
  },

  {
    category: "documents",
    question: "What export documents do you provide?",
    answer:
      "Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, Inspection Certificate and other documents as required.",
  },

  {
    category: "products",
    question: "Can I request product samples?",
    answer:
      "Yes. Samples may be provided depending on product availability and shipping terms.",
  },

  {
    category: "returns",
    question: "What is your return policy?",
    answer:
      "Returns are handled according to the signed purchase agreement and product category.",
  },

  {
    category: "general",
    question: "How can I request a quote?",
    answer:
      "Simply visit our Request a Quote page and submit your product requirements.",
  },

  {
    category: "other",
    question: "How can I contact customer support?",
    answer:
      "Reach us through phone, email or our Contact page. Our team usually responds within one business day.",
  },
];

export const privacyPolicyCTA = {
  title: "Still have questions?",
  description:
    "Our experienced team is always ready to assist you with any export or sourcing queries.",
};