import PageHero from "@/components/common/PageHero";
import {
  ProductGrid,
  BottomFeatures,
} from "@/components/products";

import { productsHero } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title={productsHero.title}
        description={productsHero.description}
        backgroundImage={productsHero.backgroundImage}
      />

      <ProductGrid />

      <BottomFeatures />

    </>
  );
}