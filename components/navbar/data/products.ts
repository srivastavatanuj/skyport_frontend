import { MegaMenuData } from "@/types/menu";

export const productsMenu: MegaMenuData = {
  sections: [
    {
      title: "Energy",
      items: [
        { name: "Diesel EN590 10ppm", href: "/products/diesel-en590" },
        { name: "Fuel Oil", href: "/products/fuel-oil" },
        { name: "Base Oil", href: "/products/base-oil" },
        { name: "Bitumen", href: "/products/bitumen" },
        { name: "LPG", href: "/products/lpg" },
      ],
      viewAll: {
        label: "View All Energy Products",
        href: "/products/energy",
      },
    },

    {
      title: "Metal Scraps",
      items: [
        { name: "Copper Scrap", href: "/products/copper-scrap" },
        { name: "Aluminum Scrap", href: "/products/aluminum-scrap" },
        { name: "Steel Scrap", href: "/products/steel-scrap" },
        { name: "Brass Scrap", href: "/products/brass-scrap" },
        { name: "Stainless Steel Scrap", href: "/products/stainless-steel-scrap" },
        { name: "Iron Scrap", href: "/products/iron-scrap" },
        { name: "Lead Scrap", href: "/products/lead-scrap" },
        { name: "Zinc Scrap", href: "/products/zinc-scrap" },
      ],
      viewAll: {
        label: "View All Metal Scraps",
        href: "/products/metal-scraps",
      },
    },

    {
      title: "Plywood",
      items: [
        { name: "MR Grade Plywood", href: "/products/mr-plywood" },
        { name: "BWR Grade Plywood", href: "/products/bwr-plywood" },
        { name: "BWP Grade Plywood", href: "/products/bwp-plywood" },
        { name: "PF Grade Plywood", href: "/products/pf-plywood" },
        { name: "UF Grade Plywood", href: "/products/uf-plywood" },
        { name: "Marine Grade Plywood", href: "/products/marine-plywood" },
      ],
      viewAll: {
        label: "View All Plywood",
        href: "/products/plywood",
      },
    },

    {
      title: "Decorative Laminates",
      items: [
        { name: "High Pressure Laminates", href: "/products/hpl" },
        { name: "Fire Resistant Laminates", href: "/products/fire-resistant" },
        { name: "Decorative Laminates", href: "/products/decorative" },
        { name: "Antibacterial Laminates", href: "/products/antibacterial" },
      ],
      viewAll: {
        label: "View All Laminates",
        href: "/products/laminates",
      },
    },

    {
      title: "Dry Fruits",
      items: [
        { name: "Almonds", href: "/products/almonds" },
        { name: "Cashews", href: "/products/cashews" },
        { name: "Walnuts", href: "/products/walnuts" },
        { name: "Pistachios", href: "/products/pistachios" },
        { name: "Raisins", href: "/products/raisins" },
        { name: "Dates", href: "/products/dates" },
        { name: "Figs", href: "/products/figs" },
        { name: "Apricots", href: "/products/apricots" },
      ],
      viewAll: {
        label: "View All Dry Fruits",
        href: "/products/dry-fruits",
      },
    },

    {
      title: "Agri Commodities",
      items: [
        { name: "Basmati Rice", href: "/products/basmati-rice" },
        { name: "Sona Masoori Rice", href: "/products/sona-masoori" },
        { name: "Brown Rice", href: "/products/brown-rice" },
        { name: "Toor Dal", href: "/products/toor-dal" },
        { name: "Moong Dal", href: "/products/moong-dal" },
        { name: "Chana Dal", href: "/products/chana-dal" },
        { name: "Millets", href: "/products/millets" },
      ],
      viewAll: {
        label: "View All Agri Products",
        href: "/products/agri",
      },
    },
  ],
};