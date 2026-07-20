import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { industriesCTA } from "@/data/industries";
import Section from "../ui/Section";

export default function IndustryCTA() {
  return (
    <Section className="bg-[#071D3D] py-24">
      <div className="mx-auto  px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2240] to-[#143E73] p-12 lg:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-400">
                Let's Build Together
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
                {industriesCTA.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {industriesCTA.description}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={industriesCTA.primaryButton.href}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                {industriesCTA.primaryButton.title}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={industriesCTA.secondaryButton.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071D3D]"
              >
                <MessageCircle size={18} />
                {industriesCTA.secondaryButton.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}