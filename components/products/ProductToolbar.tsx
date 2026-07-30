"use client";

import { SlidersHorizontal } from "lucide-react";
import { Input, Select } from "../common/InputType";

interface ProductToolbarProps {
  totalProducts: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export default function ProductToolbar({
  totalProducts,
  sortBy,
  onSortChange,
}: ProductToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50">
          <SlidersHorizontal
            size={20}
            className="text-amber-500"
          />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            Product Catalog
          </h3>

          <p className="text-sm text-slate-500">
            {totalProducts} Products Available
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <label
          htmlFor="sort"
          className="text-sm font-medium text-slate-600"
        >
          Filters
        </label>

        <div className="min-w-[150px] sort-filter">
          <Select
            placeholder="sort by"
            options={["Featured", "Name (A–Z)", "Name (Z–A)", "Newest"]}
            register={{
              onChange: (e: any) => onSortChange(e.target.value),
            }}
          />
        </div>

      </div>
    </div>
  );
}