"use client";

import { useState } from "react";

import PrivacyPolicyAccordion from "./PrivacyPolicyAccordion";
import PrivacyPolicyCategories from "./PrivacyPolicyCategories";
import Section from "../ui/Section";

export default function PrivacyPolicySection() {
  const [selectedCategory, setSelectedCategory] =
    useState("general");

  return (
    <Section className="bg-slate-50 !py-15">
      <div className="mx-auto  px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-500">
            Privacy Policies
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Sidebar */}
          <PrivacyPolicyCategories
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Right Accordion */}
          <PrivacyPolicyAccordion
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </Section>
  );
}