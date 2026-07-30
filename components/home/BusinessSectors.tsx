import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "../ui/Section";

const sectors = [
  {
    title: "Energy Products",
    image: "/images/home/products-energy.png",
    href: "/products?select=energy",
    description:
      "Supplying high-quality energy resources for industrial and commercial markets worldwide.",
  },
  {
    title: "Metal Scrap",
    image: "/images/home/products-metalscrap.png",
    href: "/products?select=metals",
    description:
      "Reliable sourcing and export of ferrous and non-ferrous metal scrap.",
  },
  {
    title: "Plywood",
    image: "/images/home/products-plywood.png",
href: "/products?select=plywood",
    description:
      "Premium plywood products meeting global construction and furniture standards.",
  },
  {
    title: "Decorative Laminates",
    image: "/images/home/products-decore.png",
    description:
      "Modern laminate solutions for residential and commercial interiors.",
  },
  {
    title: "Dry Fruits",
    image: "/images/home/products-dryfruits.png",
    href: "/products?select=dry-fruits",
    description:
      "Fresh, premium-grade dry fruits sourced from trusted international suppliers.",
  },
  {
    title: "Rice & Agro Commodities",
    image: "/images/home/products-agri.png",
    href: "/products?select=agri",
    description:
      "Export-quality rice and agricultural products with strict quality assurance.",
  },
  
];

export default function BusinessSectors() {
  return (
    <Section className="bg-white !py-10">
      <div className="mx-auto ">
        {/* Heading */}

        <div className="mb-10 text-center">
          <span className="text-md font-semibold uppercase tracking-[3px] text-amber-500">
            Our Core Business Sector
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Diverse Product. Global Reach.
          </h2>

        </div>

        {/* Cards */}

        <div className="flex gap-4 overflow-x-auto scrollbar-none p-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="group bg-[#0e2341] min-w-[250px] rounded-2xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {sector.title}
                </h3>
              </div>

              <div className="p-4">
                <p className="leading-7">
                  {sector.description}
                </p>

                {/* <button className="mt-8 flex items-center gap-2 font-semibold text-amber-500 transition hover:gap-4">
                  Learn More
                  <ArrowRight size={18} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}