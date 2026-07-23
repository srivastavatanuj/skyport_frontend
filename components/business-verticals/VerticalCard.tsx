import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

interface VerticalCardProps {
  title: string;
  image: string;
  description: string;
  feature: string;
  icon: LucideIcon;
  href: string;
}

export default function VerticalCard({
  title,
  image,
  description,
  feature,
  icon: Icon,
  href,
}: VerticalCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Floating Icon */}
        <div className="absolute bottom-0 left-8 translate-y-1/2 rounded-full border-4 border-white bg-slate-900 p-4">
          <Icon
            size={26}
            className="text-amber-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8 pt-12">
        <h3 className="text-3xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-slate-700">
          <CheckCircle2
            size={18}
            className="text-amber-500"
          />

          <span>{feature}</span>
        </div>

        <Link
          href={href}
          className="mt-8 flex items-center gap-2 font-semibold !text-amber-500 transition hover:gap-4"
        >
          Learn More
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}