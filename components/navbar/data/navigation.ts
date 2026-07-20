export interface NavigationItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
    // hasMegaMenu: true,
  },
  {
    label: "Global Markets",
    href: "/global-markets",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "FAQ",
    href: "/faq",
    hasDropdown: true,
  },
  {
    label: "Contact",
    href: "/contact",
  },
];