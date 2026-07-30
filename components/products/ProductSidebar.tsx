"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import CategoryList from "./CategoryList";

interface ProductSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductSidebar({
  selectedCategory,
  onCategoryChange,
}: ProductSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <CategoryList
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      {/* Request Custom Product */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900">
          Can't find what you need?
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          We source customized products tailored to your business
          requirements through our trusted supplier network.
        </p>

        <Link
          href="/request-a-quote"
          className="mt-6 !text-[#071D3D] inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#071D3D] px-5 py-3 font-semibold transition-all hover:bg-[#071D3D] hover:!text-white"
        >
          Request Custom Product

          <ArrowRight size={18} />
        </Link>
      </div>
    </aside>
  );
}