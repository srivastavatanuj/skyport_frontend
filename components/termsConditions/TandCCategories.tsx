"use client";

import { tandcCategories } from "@/data/termsConditions";

interface TandCCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function TandCCategories({
  selectedCategory,
  onCategoryChange,
}: TandCCategoriesProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {tandcCategories.map((category) => {
        const Icon = category.icon;
        const active = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex w-full items-center gap-4 border-b border-slate-100 px-6 py-5 text-left transition-all duration-200 last:border-b-0 ${
              active
                ? "border-l-4 border-l-amber-500 bg-amber-50 text-amber-600"
                : "hover:bg-slate-50"
            }`}
          >
            <Icon
              size={22}
              className={
                active ? "text-amber-500" : "text-slate-500"
              }
            />

            <span
              className={`font-medium ${
                active ? "text-amber-600" : "text-slate-700"
              }`}
            >
              {category.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}