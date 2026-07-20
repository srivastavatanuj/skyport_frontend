import Image from "next/image";
import { aboutFeatures } from "@/data/about";
import Section from "../ui/Section";

export default function AboutSection() {
  return (
    <Section className="bg-white !py-15">
      <div className="mx-auto  px-6">
        {/* Top Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
              Who We Are
            </p>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
              Your Trusted Partner in
              <br />
              Global Trade Excellence
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Skyport Exim Corp Private Limited is a diversified
              international trading company operating at the interSection
              of critical global supply chains.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              With a strong focus on quality, compliance and market
              intelligence, we deliver end-to-end export-import solutions
              across multiple industries.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our robust global supplier network, deep understanding of
              international trade regulations and efficient logistics
              capabilities enable us to deliver value and build long-term
              partnerships across continents.
            </p>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about/about-trust.png"
              alt="Business Partnership"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {aboutFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="text-center transition duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-slate-200">
                  <Icon className="text-[#0A2240]" size={30} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
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