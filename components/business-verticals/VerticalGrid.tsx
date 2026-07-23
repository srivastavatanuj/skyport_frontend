import Section from "../ui/Section";
import { verticals } from "@/data/businessVerticals";
import VerticalCard from "./VerticalCard";


export default function VerticalGrid() {
  return (
    <Section className="!py-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Explore Our Business Verticals
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            From energy solutions to food products, we deliver
            excellence across industries.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {verticals.map((item) => (
            <VerticalCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
    </Section>
  );
}