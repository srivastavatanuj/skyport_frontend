import {
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Headset,
} from "lucide-react";
import Section from "../ui/Section";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "25+",
    label: "Years Experience",
  },
  {
    icon: Globe2,
    value: "50+",
    label: "Countries Served",
  },
  {
    icon: Handshake,
    value: "100+",
    label: "Global Partners",
  },
  {
    icon: Headset,
    value: "24/7",
    label: "Trade Support",
  },
];

export default function StatsCard() {
  return (
    <div className="absolute bottom-[-100px] right-8 z-30 hidden w-[380px] rounded-2xl bg-white shadow-2xl lg:block">
      <div className="grid grid-cols-2">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-8"
            >
              <Icon className="text-amber-500" size={26} />

              <h2 className="text-4xl font-bold text-slate-900">
                {item.value}
              </h2>

              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}