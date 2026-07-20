import { regions } from "@/data/globalMarkets";
import RegionCard from "./RegionCard";
import Section from "../ui/Section";

export default function RegionGrid() {
  return (
    <Section className="bg-slate-50 !py-10">
      <div className="mx-auto  px-6">
        {/* Heading */}
        <div className="mb-10 text-center">

          <h2 className=" text-4xl font-bold text-slate-900 lg:text-5xl">
            Our Global Presence
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We continue to expand our reach and deliver excellence to
            customers around the world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <RegionCard
              key={region.title}
              title={region.title}
              icon={region.icon}
              image={region.image}
              countries={region.countries}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}