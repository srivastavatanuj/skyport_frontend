import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "../ui/Section";


const products = [
  {
    title: "Energy Products",
    description:
      "Supplying premium energy resources with reliable sourcing, competitive pricing and international logistics support.",
    image: "/energy.jpg",
  },
  {
    title: "Metal Scrap",
    description:
      "Export and import of ferrous and non-ferrous metal scrap for recycling and manufacturing industries worldwide.",
    image: "/scrap.jpg",
  },
  {
    title: "Decorative Laminates",
    description:
      "High-quality decorative laminates designed for residential, commercial and industrial applications.",
    image: "/laminate.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <Section className="bg-white py-28">
      <div className="mx-auto  px-6">
        {/* Heading */}

        <div className="mb-20 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-amber-500">
            Featured Products
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Premium Products For Global Markets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Discover our carefully selected range of products trusted by
            businesses across multiple industries worldwide.
          </p>
        </div>

        {/* Products */}

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}

              <div className="overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={500}
                  className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}

              <div>
                <span className="text-sm uppercase tracking-[4px] text-amber-500 font-semibold">
                  Featured Category
                </span>

                <h3 className="mt-4 text-4xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {product.description}
                </p>

                <button className="mt-10 flex items-center gap-2 rounded-lg bg-[#061B3D] px-8 py-4 font-semibold text-white transition hover:bg-[#0A2B5F]">
                  Explore Products
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}

        <div className="mt-20 text-center">
          <button className="rounded-lg bg-amber-500 px-10 py-4 font-semibold text-white transition hover:bg-amber-600">
            View All Products
          </button>
        </div>
      </div>
    </Section>
  );
}