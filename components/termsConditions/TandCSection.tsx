"use client";

import { useState } from "react";

import TandCAccordion from "./TandCAccordion";
import TandCCategories from "./TandCCategories";
import Section from "../ui/Section";

export default function TandCSection() {
  const [selectedCategory, setSelectedCategory] =
    useState("general");

  return (
    <Section className="bg-slate-50 !py-15">
      <div className="mx-auto  px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
            Terms and Conditions
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Sidebar */}
          <TandCCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Right Accordion */}
          <TandCAccordion
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </Section>
  );
}