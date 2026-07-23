import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface SuggestionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export default function SuggestionCard({
  title,
  description,
  icon: Icon,
  href,
}: SuggestionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-amber-50">
        <Icon
          size={28}
          className="text-slate-700 group-hover:text-amber-500"
        />
      </div>

      <h3 className="mt-8 text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 inline-flex items-center gap-2 text-amber-500 transition-all group-hover:gap-4">
        <ArrowRight size={20} />
      </div>
    </Link>
  );
}