import { marketStats } from "@/data/globalMarkets";
import Section from "../ui/Section";

export default function MarketStats() {
  return (
    <Section className="bg-white !py-0">
      <div className="mx-auto  px-6">
        <div className="grid overflow-hidden bg-white  md:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center gap-5 p-8 ${
                  index !== marketStats.length - 1
                    ? "border-b md:border-b-0 lg:border-r border-slate-200"
                    : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                  <Icon
                    size={32}
                    className="text-amber-500"
                  />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-900">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}