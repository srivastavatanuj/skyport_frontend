import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface RegionCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  countries: string[];
}

export default function RegionCard({
  title,
  icon: Icon,
  image,
  countries,
}: RegionCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white relative h-100">
      <div className="py-4 px-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 transition-colors group-hover:bg-amber-500">
            <Icon
              size={26}
              className="text-amber-500 group-hover:text-white"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>
        </div>

        {/* Countries */}
        <p className="mt-6 leading-7 text-slate-600">
          {countries.join(", ")}
        </p>
      </div>

      {/* Map */}
      <div className="absolute bottom-2 h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}