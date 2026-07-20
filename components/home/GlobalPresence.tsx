import Link from "next/link";
import Image from "next/image";
import { Globe2, Network, Users, ArrowRight } from "lucide-react";
import Section from "../ui/Section";

export default function GlobalPresence() {
  return (
    <Section className="relative !py-10">
      {/* Background World Map */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/world_connectingmap.png"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl text-white">
          <span className="text-lg font-semibold uppercase tracking-[3px] text-amber-400">
            Global Presence
          </span>

          <h2 className="mt-2 text-4xl font-bold leading-tight !text-white">
            Connecting Markets
            <br />
            Across the World
          </h2>

          <div className="mt-8 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Globe2 className="text-amber-400" />

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-slate-300">Countries Served</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Network className="text-amber-400" />

              <div>
                <h3 className="text-3xl font-bold">6</h3>
                <p className="text-slate-300">Global Regions</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="text-amber-400" />

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-slate-300">Port Connections</p>
              </div>
            </div>
          </div>

          <Link
            href="/global-markets"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
          >
            Explore Global Markets

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Right World Map */}
   
      </div>
    </Section>
  );
}