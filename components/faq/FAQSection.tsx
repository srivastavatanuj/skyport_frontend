"use client";

import { useState } from "react";

import FAQAccordion from "./FAQAccordion";
import FAQCategories from "./FAQCategories";
import Section from "../ui/Section";

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] =
    useState("general");

  return (
    <Section className="bg-slate-50 !py-15">
      <div className="mx-auto  px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
            Frequently Asked Questions
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Sidebar */}
          <FAQCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Right Accordion */}
          <FAQAccordion
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </Section>
  );
}