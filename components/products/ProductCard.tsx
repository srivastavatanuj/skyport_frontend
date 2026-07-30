import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: LucideIcon;
}

export default function ProductCard({
  title,
  description,
  image,
  href,
  icon: Icon,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Floating Icon */}
        <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
          <Icon
            size={24}
            className="text-amber-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 h-[calc(100%-240px)] flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
            {description}
          </p>
        </div>


        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 font-semibold !text-amber-500 transition-all duration-300 hover:gap-3"
        >
          View Details

          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}