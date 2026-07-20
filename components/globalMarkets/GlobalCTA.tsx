

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { globalCTA } from "@/data/globalMarkets";
import Section from "../ui/Section";

export default function GlobalCTA() {
  return (
    <Section className="bg-[#071D3D] py-20">
      <div className="mx-auto  px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2240] to-[#143E73] p-10 lg:p-14">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-400">
                Global Trade
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white">
                {globalCTA.title}
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                {globalCTA.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={globalCTA.primary.href}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-white hover:bg-amber-600"
              >
                {globalCTA.primary.text}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={globalCTA.secondary.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white hover:text-[#071D3D]"
              >
                <MessageCircle size={18} />
                {globalCTA.secondary.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}