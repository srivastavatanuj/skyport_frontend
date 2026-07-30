"use client";

import { useMemo, useState } from "react";
import Section from "../ui/Section";
import { products } from "@/data/products";

import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";
import ProductToolbar from "./ProductToolbar";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let data =
      selectedCategory === "all"
        ? [...products]
        : products.filter(
            (item) => item.category === selectedCategory
          );

    switch (sortBy) {
      case "Name (A–Z)":
        data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "Name (Z–A)":
        data.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;

      case "Newest":
        data.sort((a, b) => b.id - a.id);
        break;

      default:
        break;
    }

    return data;
  }, [selectedCategory, sortBy]);

  return (
    <Section className="bg-slate-50 !py-10">
      <span>
        <h2 className="text-5xl font-bold leading-tight text-slate-900 text-center mb-5">
          All Products
        </h2>
      </span>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <ProductSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Products */}
          <div>
            <ProductToolbar
              totalProducts={filteredProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-20 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  No Products Found
                </h3>

                <p className="mt-4 text-slate-600">
                  No products are available in this category.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    href={`/products/${product.slug}`}
                    icon={product.icon}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}