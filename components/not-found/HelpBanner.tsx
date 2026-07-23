import { Mail, Phone, Headphones } from "lucide-react";

import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Link from "next/link";
import { helpInfo } from "@/data/notFound";

export default function HelpBanner() {
  return (
    <section className="pb-24">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-10 shadow-lg lg:px-14 lg:py-12">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/images/not-found/world-map.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              backgroundSize: "contain",
            }}
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Headphones className="text-primary" size={30} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {helpInfo.title}
                </h2>

                <p className="mt-3 max-w-xl text-slate-600">
                  {helpInfo.description}
                </p>

                <div className="mt-6">
                  <Link href={helpInfo.buttonHref}>
                    {helpInfo.buttonText}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-5 rounded-2xl bg-slate-50 p-6 lg:min-w-[320px]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="text-primary" size={18} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-semibold text-slate-900">
                    {helpInfo.phone}
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="text-primary" size={18} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email Us</p>
                  <p className="font-semibold text-slate-900">
                    {helpInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}