import { industriesIntro } from "@/data/industries";
import Section from "../ui/Section";

export default function IndustriesIntro() {
  return (
    <Section className="bg-white py-24">
      <div className="mx-auto  px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold leading-tight text-slate-900">
              {industriesIntro.title}
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-amber-500" />

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {industriesIntro.description}
            </p>
          </div>

          {/* Right */}
          <div className="space-y-8 border-l border-slate-200 pl-10">
            {industriesIntro.highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-5"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-50">
                    <Icon
                      size={30}
                      className="text-amber-500"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}