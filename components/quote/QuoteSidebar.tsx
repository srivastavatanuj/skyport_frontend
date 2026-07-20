import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import {
  helpInfo,
  whyChooseUs,
} from "@/data/quote";

export default function QuoteSidebar() {
  return (
    <div className="space-y-8">
      {/* Why Choose Us */}
      <div className="rounded-2xl border bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-slate-900">
          Why Choose Skyport?
        </h2>

        <div className="mt-4 h-1 w-14 rounded bg-amber-500" />

        <div className="mt-8 space-y-6">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="rounded-lg bg-amber-100 p-3">
                  <Icon
                    size={22}
                    className="text-amber-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Need Help */}
      <div className="rounded-2xl text-[#071D3D] p-8 shadow-lg">
        <h2 className="text-2xl font-bold">
          Need Help?
        </h2>

        <div className="mt-4 h-1 w-14 rounded bg-amber-500" />

        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="text-amber-400" />
            <span>{helpInfo.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-amber-400" />
            <span>{helpInfo.email}</span>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="mt-1 text-amber-400" />
            <span>{helpInfo.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <Clock3 className="text-amber-400" />
            <span>{helpInfo.hours}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-amber-500 p-8 text-white shadow-lg">
        <h2 className="text-2xl font-bold">
          Bulk Requirement?
        </h2>

        <p className="mt-4 leading-7 text-white/90">
          Looking for large volume procurement?
          Our sourcing specialists will provide
          competitive pricing and customized
          logistics support.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 font-semibold"
        >
          Contact Sales Team

          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}