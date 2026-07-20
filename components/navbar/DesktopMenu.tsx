"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import MegaMenu from "./MegaMenu";
import { navigation } from "./data/navigation";

export default function DesktopMenu() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navigation.map((item) => {
        if (item.hasMegaMenu) {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex font-bold items-center gap-1 border-b-2 border-transparent py-8 text-sm text-white transition hover:border-amber-500 hover:text-amber-400">
                {item.label}
                <ChevronDown size={16} />
              </button>

              <MegaMenu isOpen={megaMenuOpen} />
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="border-b-2 border-transparent py-5 text-sm font-bold text-white transition hover:border-amber-500 hover:text-amber-400"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}