import Image from "next/image";

import Section from "../ui/Section";
import { clients } from "@/data/businessVerticals";

export default function Clients() {
  return (
    <Section className="border-t border-slate-200  !py-5">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-xl font-bold text-slate-900">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((logo) => (
            <div
              key={logo}
              className="flex h-20 items-center justify-center rounded-xl  bg-white"
            >
              <Image
                src={logo}
                alt="Client Logo"
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
    </Section>
  );
}