import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { suggestions } from "@/data/notFound";
import Section from "../ui/Section";
import SuggestionCard from "./SuggestionCard";

export default function SuggestionGrid() {
  return (
    <Section className="!py-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            You can try one of these
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-500" />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {suggestions.map((item) => (
            <SuggestionCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
    </Section>
  );
}