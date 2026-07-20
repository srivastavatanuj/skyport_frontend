export interface MenuItem {
  name: string;
  href: string;
}

export interface MenuSection {
  title: string;
  href?: string;
  items: MenuItem[];
  viewAll?: {
    label: string;
    href: string;
  };
}

export interface MegaMenuData {
  sections: MenuSection[];
}