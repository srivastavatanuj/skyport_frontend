import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Section from "../ui/Section";

interface AboutHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function AboutHero({
  title,
  description,
  backgroundImage,
}: AboutHeroProps) {
  return (
    <Section className={`relative  h-[450px] overflow-hidden`}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071D3D]/70 opacity-[70%]" />

      {/* Content */}
      <div className="relative mx-auto flex h-full  items-center px-6 mt-10">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-amber-400">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-amber-400">{title}</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-white lg:text-6xl">
            {title}
          </h1>

          {/* Gold Line */}
          <div className="mt-6 h-1 w-20 rounded-full bg-amber-500" />

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            {description}
          </p>
        </div>
      </div>
    </Section>
  );
}