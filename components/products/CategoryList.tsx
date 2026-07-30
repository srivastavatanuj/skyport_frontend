"use client";

import { productCategories, products } from "@/data/products";
import { ChevronRight,Layers3 } from "lucide-react";

interface CategoryListProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryList({
  selectedCategory,
  onCategoryChange,
}: CategoryListProps) {
  const getCount = (category: string) => {
    if (category === "all") return products.length;

    return products.filter(
      (product) => product.category === category
    ).length;
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        
            <div className="flex items-center gap-4">
              {/* <Icon
                size={22}
                className={
                  active
                    ? "text-amber-400"
                    : "text-slate-600"
                }
              /> */}

              <span className="font-medium bg-[#071D3D] flex gap-5 w-full items-center border-b border-slate-100 px-5 py-5">
                <Layers3 size={22}/>
                
                All Categories
              </span>
            </div>

      {productCategories.map((category) => {
        const Icon = category.icon;
        const active = selectedCategory === category.slug;

        return (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`flex w-full items-center justify-between border-b border-slate-100 px-5 py-5 text-left transition-all last:border-b-0 ${
              active
                ? "bg-[#071D3D] text-white"
                : "hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <Icon
                size={22}
                className={
                  active
                    ? "text-amber-400"
                    : "text-slate-600"
                }
              />

              <span className={active?"text-white":"text-[#071D3D]"}>
                {category.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  active
                    ? "bg-white/10 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {getCount(category.slug)}
              </span>

              {!active && (
                <ChevronRight
                  size={16}
                  className="text-slate-400"
                />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}