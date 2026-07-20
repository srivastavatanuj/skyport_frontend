import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function IndustryCard({
  icon: Icon,
  title,
  description,
  href,
}: IndustryCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0d2242] hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#071D3D] transition-colors group-hover:bg-amber-500">
        <Icon size={28} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Accent Line */}
      <div className="mt-3 h-1 w-14 rounded-full bg-amber-500" />

      {/* Description */}
      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

      {/* Link */}
      {/* <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-[#071D3D] transition-all group-hover:gap-3 group-hover:text-amber-500"
      >
        Learn More
        <ArrowRight size={18} />
      </Link> */}
    </div>
  );
}