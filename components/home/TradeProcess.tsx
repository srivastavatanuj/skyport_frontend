import {
  Search,
  Handshake,
  Ship,
  PackageCheck,
} from "lucide-react";
import Section from "../ui/Section";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Requirement Analysis",
    description:
      "Understand client requirements, sourcing needs, destination markets, and compliance requirements.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Strategic Sourcing",
    description:
      "Identify trusted suppliers and negotiate the best quality products at competitive prices.",
  },
  {
    number: "03",
    icon: Ship,
    title: "Global Logistics",
    description:
      "Manage documentation, customs clearance, shipping, and international transportation.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Successful Delivery",
    description:
      "Products arrive safely with complete transparency, tracking, and post-delivery support.",
  },
];

export default function TradeProcess() {
  return (
    <Section className="bg-slate-50 !py-15">
      <div className="mx-auto">
        {/* Header */}

        <div className="text-center">
          <span className="text-lg font-semibold uppercase tracking-[4px] text-amber-500">
            Our Trade Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Streamlined. Transparent. Reliable.
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-amber-200 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#061B3D] text-white shadow-xl">
                    <Icon size={34} />
                  </div>

                  {/* Number */}

                  <span className="mt-6 inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}