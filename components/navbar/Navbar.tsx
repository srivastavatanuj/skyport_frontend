"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import SearchButton from "./SearchButton";
import QuoteButton from "./QuoteButton";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";

// import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071D3D]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
    
        <MaxWidthWrapper className="max-w-none flex mx-auto justify-between">
        <Logo />

        <DesktopMenu />

        <div className="hidden items-center gap-4 lg:flex">
          <QuoteButton />
        </div>

        </MaxWidthWrapper>
 
    </header>
  );
}