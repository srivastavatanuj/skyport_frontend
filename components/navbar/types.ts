export interface NavigationItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
}

export interface MenuItem {
  name: string;
  href: string;
}

export interface ViewAll {
  label: string;
  href: string;
}

export interface MenuSection {
  title: string;
  href?: string;
  items: MenuItem[];
  viewAll?: ViewAll;
}

export interface ProductsMenu {
  sections: MenuSection[];
}