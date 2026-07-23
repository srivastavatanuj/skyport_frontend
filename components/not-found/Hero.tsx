import Image from "next/image";
import { Home, ArrowRight } from "lucide-react";
import Section from "../ui/Section";
import { heroContent } from "@/data/notFound";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import Link from "next/link";

export default function Hero() {
    return (
        <Section className="!py-15 relative  overflow-hidden">
            <Image
                src="/images/not-found/hero.png"
                alt=""
                fill
                className="object-contain"
            />

            <span className="absolute h-16 p-5 w-screen top-0 left-0 bg-[#071D3D]"></span>
            <div className="relative grid items-center gap-16 py-15 lg:grid-cols-2">
                {/* Left */}
                <div className="max-w-xl">
                    <span className="text-8xl font-black leading-none text-[#071D3D] lg:text-9xl">
                        {heroContent.code}
                    </span>

                    <h1 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                        {heroContent.title}
                    </h1>

                    <div className="mt-6 h-1 w-20 rounded-full bg-amber-500" />

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {heroContent.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/"
                            className="rounded-md bg-[#071D3D] px-5 py-2 font-semibold text-white transition hover:bg-[#071D3D]/80"
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            className="rounded-md !text-[#071D3D] bg-slate-50 px-5 py-2  font-semibold border border-[#071D3D] transition hover:bg-slate-200"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>

                {/* Right */}

            </div>

        </Section>
    );
}