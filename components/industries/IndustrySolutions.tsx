import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { solutions } from "@/data/industries";
import Section from "../ui/Section";

export default function IndustrySolutions() {
  return (
    <Section className="bg-white !py-5">
      <div className="mx-auto  px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={solutions.image}
              alt={solutions.title}
              width={700}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className=" text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              {solutions.title}
            </h2>


            <p className="mt-3 text-lg leading-8 text-slate-600">
              {solutions.description}
            </p>

            <div className="mt-4 space-y-4">
              {solutions.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                      <Icon
                        size={22}
                        className="text-amber-600"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}