import {
  Globe2,
  ShieldCheck,
  BadgeDollarSign,
  Ship,
  ArrowRight,
} from "lucide-react";
import Section from "../ui/Section";

const reasons = [
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Strong partnerships across Asia, Europe, Middle East, and Africa ensure seamless international trade.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every shipment undergoes rigorous quality inspections and complies with international standards.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description:
      "Direct sourcing and optimized supply chains help us deliver exceptional value to our clients.",
  },
  {
    icon: Ship,
    title: "End-to-End Logistics",
    description:
      "From procurement to customs clearance and delivery, we manage every stage efficiently.",
  },
];

export default function WhyChoose() {
  return (
    <Section className="bg-white !py-10 text-white">
      <div className="mx-auto  px-6">
        {/* Header */}

        <div className="text-center">
          <span className="text-lg font-semibold uppercase tracking-[4px] text-amber-400">
            Why Choose Us
          </span>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4 ">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border  p-8 border-[#061B3D] bg-slate-50"
              >
                {/* <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500">
                  <Icon size={32} />
                </div> */}

                <h2 className=" text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-5 leading-7 text-[#061B3D]">
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}