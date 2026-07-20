import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Mail,
} from "lucide-react";

import { quickQuote } from "@/data/quote";

export default function QuickQuote() {
  return (
    <section className="py-24 bg-[#071D3D]">
      <div className="mx-auto  px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2240] to-[#123867] p-10 lg:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-400">
                Need Assistance?
              </span>

              <h2 className="mt-4 text-4xl font-bold text-white">
                {quickQuote.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {quickQuote.description}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`tel:${quickQuote.phone}`}
                className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-4 text-white transition hover:bg-white/10"
              >
                <PhoneCall size={18} />
                Call
              </Link>

              <Link
                href={`mailto:${quickQuote.email}`}
                className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-4 text-white transition hover:bg-white/10"
              >
                <Mail size={18} />
                Email
              </Link>

              <Link
                href={quickQuote.whatsapp}
                target="_blank"
                className="flex items-center gap-2 rounded-lg bg-amber-500 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                <MessageCircle size={18} />
                WhatsApp
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-[#071D3D] transition hover:bg-slate-100"
              >
                Request Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}