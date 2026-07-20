

import Image from "next/image";
import Section from "../ui/Section";
import { crossBorder } from "@/data/globalMarkets";

export default function CrossBorder() {
  return (
    <Section className="bg-white !py-8">
      <div className="mx-auto  px-6">
        <div className="overflow-hidden rounded-3xl ">
          <div className="grid lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative min-h-[420px]">
              <Image
                src={crossBorder.image}
                alt={crossBorder.title}
                fill
                className="object-cover object-right"
              />
            </div>

            {/* Right */}
            <div className="px-10 lg:px-14">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
                Global Logistics
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                {crossBorder.title}
              </h2>

              <div className="mt-5 h-1 w-20 rounded-full bg-amber-500" />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                {crossBorder.description}
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {crossBorder.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow">
                        <Icon
                          size={24}
                          className="text-amber-500"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}