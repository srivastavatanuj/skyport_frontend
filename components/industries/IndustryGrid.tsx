import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";
import Section from "../ui/Section";


export default function IndustryGrid() {
  return (
    <Section className="bg-slate-50 !py-10">
      <div className="mx-auto  px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">

          <h2 className="mt-2 text-4xl font-bold text-slate-900 lg:text-5xl">
            Key Industries We Cater To
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-amber-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              href={industry.href}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}