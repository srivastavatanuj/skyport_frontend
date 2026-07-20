
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Section from "../ui/Section";
import { officeLocation } from "@/data/contact";

export default function OfficeLocation() {
  return (
    <Section className="bg-white !py-15">
      <div className="mx-auto ">
        <div className="overflow-hidden rounded-3xl ">
          <div className="grid lg:grid-cols-[35%_1fr]">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
                Office Location
              </span>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                {officeLocation.title}
              </h2>

              <h3 className="mt-8 text-xl font-semibold text-slate-800">
                {officeLocation.company}
              </h3>

              <div className="mt-6 flex items-start gap-4">
                <div className="mt-1 rounded-full bg-amber-100 p-3">
                  <MapPin className="text-amber-600" size={20} />
                </div>

                <div className="space-y-1 text-slate-600">
                  {officeLocation.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <Link
                href={officeLocation.directionUrl}
                target="_blank"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-amber-500 px-7 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Get Directions

                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right */}
            <div className="relative min-h-[420px]">
              <div className="h-[500px] overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps?q=Awfis%20Towers,%20111%20Rajiv%20Gandhi%20Salai,%20OMR,%20Kottivakkam,%20Chennai&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}