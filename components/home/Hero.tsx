import Image from "next/image";
import StatsCard from "./StatsCard";
import Section from "../ui/Section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="relative h-[650px]">
      {/* Background */}

      <Image
        src="/images/home/homeHero.jpeg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#031c3dcc]/80" />

      {/* Content */}

      <div className="relative mx-auto flex h-full  items-center px-6">
        <div className="max-w-3xl pt-20">
          <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[3px] text-amber-400">
            Global Export • Import • Sourcing
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-white">
            Connecting Global Markets Through Trusted Trade & Strategic
            Sourcing
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-9 text-slate-300">
            Delivering energy products, industrial materials and agricultural
            commodities across international markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/business-verticals"
              className="rounded-md bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Explore Business Sectors
            </Link>

            <Link
              href="/request-a-quote"
              className="rounded-md border border-white/30 px-8 py-4  text-white hover:bg-white/10"
            >
              Request A Quote
            </Link>
          </div>
        </div>

        <StatsCard />
      </div>
    </Section>
  );
}