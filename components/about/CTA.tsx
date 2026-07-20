import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "../ui/Section";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title = "Ready to Expand Your Business Globally?",
  description = "Partner with Skyport Exim Corp for reliable international trade solutions, premium products and seamless logistics.",
  primaryButtonText = "Get A Quote",
  primaryButtonLink = "/request-a-quote",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
}: CTAProps) {
  return (
    <Section className="bg-[#071D3D]">
      <div className="mx-auto  px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2240] to-[#143E73] p-12 lg:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-amber-400">
                Let's Work Together
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                {title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                {primaryButtonText}
                <ArrowRight size={18} />
              </Link>

              <Link
                href={secondaryButtonLink}
                className="rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071D3D]"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}