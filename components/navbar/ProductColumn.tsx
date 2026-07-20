import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MenuSection } from "@/components/navbar/types";

interface ProductColumnProps {
  section: MenuSection;
}

export default function ProductColumn({
  section,
}: ProductColumnProps) {
  return (
    <div className="min-w-[220px] px-6 py-8">
      {/* Heading */}
      <h3 className="relative mb-6 inline-block text-lg font-semibold text-slate-900">
        {section.title}

        <span className="absolute -bottom-2 left-0 h-[3px] w-12 rounded-full bg-amber-500" />
      </h3>

      {/* Product List */}
      <ul className="space-y-3">
        {section.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-slate-600 transition-colors duration-200 hover:text-amber-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* View All */}
      {section.viewAll && (
        <Link
          href={section.viewAll.href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber-500 transition-all hover:gap-3"
        >
          {section.viewAll.label}
          <ChevronRight size={16} />
        </Link>
      )}
    </div>
  );
}