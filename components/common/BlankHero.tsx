import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Section from "../ui/Section";

interface BlankHeroProps {
  title: string;
  description: string;
}

export default function BlankHero({
  title,
  description,
}: BlankHeroProps) {
  return (
    <Section className={`relative bg-slate-100 h-[450px] overflow-hidden`}>
      
      <span className="absolute h-16 p-5 w-screen top-0 left-0 bg-[#071D3D]"></span>

      {/* Dark Overlay */}
      <div className="absolute  inset-0 border-b border-slate/80" />

      {/* Content */}
      <div className="relative mx-auto flex h-full  items-center px-6 mt-10 text-[#071D3D]">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-amber-400">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-amber-400">{title}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold lg:text-6xl">
            {title}
          </h1>

          {/* Gold Line */}
          <div className="mt-6 h-1 w-20 rounded-full bg-amber-500" />

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8">
            {description}
          </p>
        </div>
      </div>
    </Section>
  );
}