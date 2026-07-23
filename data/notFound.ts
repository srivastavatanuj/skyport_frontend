import {
  Home,
  Package,
  Globe,
  Mail,
  Phone,
  LucideIcon,
} from "lucide-react";

export interface Suggestion {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const suggestions: Suggestion[] = [
  {
    title: "Go to Home",
    description:
      "Return to the homepage to explore our services and solutions.",
    icon: Home,
    href: "/",
  },
  {
    title: "Browse Products",
    description:
      "Explore our wide range of products across multiple industries.",
    icon: Package,
    href: "/products",
  },
  {
    title: "Global Markets",
    description:
      "Discover the countries we serve and our global presence.",
    icon: Globe,
    href: "/global-markets",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with our team for any assistance or inquiries.",
    icon: Mail,
    href: "/contact",
  },
];

export const helpInfo = {
  title: "Still need help?",
  description: "Our team is here to assist you.",
  buttonText: "Contact Our Team",
  buttonHref: "/contact",
  phone: "+91 99441 73183",
  email: "info@skyportexim.com",
  phoneIcon: Phone,
  emailIcon: Mail,
};

export const heroContent = {
  code: "404",
  title: "Oops! Page Not Found",
  description:
    "The page you're looking for seems to have sailed away. It may have been moved, deleted, or the URL may be incorrect.",
  primaryButton: {
    label: "Go to Home",
    href: "/",
  },
  secondaryButton: {
    label: "Explore Products",
    href: "/products",
  },
};