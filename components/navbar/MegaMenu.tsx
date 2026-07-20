"use client";

import ProductColumn from "./ProductColumn";
import { productsMenu } from "./data/products";

interface MegaMenuProps {
  isOpen: boolean;
}

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  return (
    <div
      className={`absolute left-1/2 top-full z-50 mt-4 w-[1280px] -translate-x-1/2 transition-all duration-300 ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0"
      }`}
    >
      {/* Arrow */}
      <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-gray-200 bg-white" />

      {/* Container */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
        <div className="grid grid-cols-6 divide-x divide-gray-200">
          {productsMenu.sections.map((section) => (
            <ProductColumn
              key={section.title}
              section={section}
            />
          ))}
        </div>
      </div>
    </div>
  );
}