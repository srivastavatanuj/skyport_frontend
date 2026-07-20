import { stats } from "@/data/about";
import Section from "../ui/Section";

export default function Stats() {
  return (
    <Section className="bg-[#071D3D] !py-10">
      <div className="mx-auto  px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <Icon
                    size={30}
                    className="text-amber-500"
                  />
                </div>

                <h2 className="text-5xl font-bold !text-white">
                  {item.value}
                </h2>

                <p className="mt-3 text-slate-300 font-bold">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}