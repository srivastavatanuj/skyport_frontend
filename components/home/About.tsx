import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Section from "../ui/Section";

const features = [
  {
    icon: Globe,
    title: "Global Network",
    desc: "Reliable sourcing and distribution across international markets.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Strict compliance with international quality standards.",
  },
  {
    icon: Truck,
    title: "Efficient Logistics",
    desc: "Fast, secure and transparent supply chain management.",
  },
];

export default function About() {
  return (
    <Section className=" bg-[#f6f7f9]">
      <div className="mx-auto grid  items-center gap-20 lg:grid-cols-2 ">
        {/* Left */}

        <div className="relative">
          <div className="overflow-hidden rounded-3xl ">
            <Image
              src="/images/home/worldMap.jpeg"
              alt="Global Presence"
              width={700}
              height={500}
              className="w-full"
            />
          </div>

          {/* Experience Card */}

        </div>

        {/* Right */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
            Who we are
          </span>

          <h2 className="mt-2 text-4xl font-bold leading-tight text-slate-900">
            Your Trusted Partner
            <br/>
            <span className="text-amber-500">
              {" "}
              in Global Trade Excellence
            </span>
          </h2>

          <p className="mt-2 text-lg leading-8 text-slate-600">
            Skyport Exim Corp delivers premium export and import solutions,
            connecting businesses worldwide through strategic sourcing,
            efficient logistics and trusted international partnerships.
          </p>

          <div className="mt-5 space-y-8">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">
                    <Icon className="text-amber-600" size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.desc}
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