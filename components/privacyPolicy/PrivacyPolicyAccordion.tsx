"use client";

import { useEffect, useState } from "react";

import PrivacyPolicyItem from "./PrivacyPolicyItem";
import { privacyPolicy } from "@/data/privacyPolicy";

interface PrivacyPolicyAccordionProps {
  selectedCategory: string;
}

export default function PrivacyPolicyAccordion({
  selectedCategory,
}: PrivacyPolicyAccordionProps) {
  const filteredPrivacyPolicys =
    selectedCategory === "all"
      ? privacyPolicy
      : privacyPolicy.filter(
          (policy) => policy.category === selectedCategory
        );

  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      {filteredPrivacyPolicys.map((policy, index) => (
        <PrivacyPolicyItem
          key={`${policy.category}-${policy.question}`}
          question={`${index + 1}. ${policy.question}`}
          answer={policy.answer}
          isOpen={openIndex === index}
          onClick={() =>
            setOpenIndex(
              openIndex === index ? -1 : index
            )
          }
        />
      ))}

      {filteredPrivacyPolicys.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            No PrivacyPolicys found
          </h3>

          <p className="mt-2 text-slate-500">
            Questions for this category will appear here.
          </p>
        </div>
      )}
    </div>
  );
}