import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "../ui/Section";
import { globalPresence } from "@/data/about";

export default function GlobalPresence() {
  return (
    <Section className="bg-[#f6f7f9] !py-14">
      <div className="mx-auto grid  items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-amber-500">
            {globalPresence.subtitle}
          </p>

          <h2 className="text-5xl font-bold leading-tight text-slate-900">
            {globalPresence.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {globalPresence.description}
          </p>

          <Link
            href={globalPresence.button.href}
            className="mt-10 inline-flex items-center gap-3 rounded-md bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            {globalPresence.button.text}

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right */}
        <div className="relative">
          <Image
            src="/images/home/worldMap.jpeg"
            alt="Global Presence"
            width={900}
            height={550}
            className="w-full"
          />
        </div>
      </div>
    </Section>
  );
}