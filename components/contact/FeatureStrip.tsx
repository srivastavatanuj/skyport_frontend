
import { contactFeatures } from "@/data/contact";
import Section from "../ui/Section";

export default function FeatureStrip() {
  return (
    <Section className="bg-[#071D3D] py-20">
      <div className="mx-auto  px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
                  <Icon
                    size={30}
                    className="text-amber-400"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}