"use client";

import { useEffect, useState } from "react";

import FAQItem from "./FAQItem";
import { faqs } from "@/data/faq";

interface FAQAccordionProps {
  selectedCategory: string;
}

export default function FAQAccordion({
  selectedCategory,
}: FAQAccordionProps) {
  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter(
          (faq) => faq.category === selectedCategory
        );

  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      {filteredFAQs.map((faq, index) => (
        <FAQItem
          key={`${faq.category}-${faq.question}`}
          question={`${index + 1}. ${faq.question}`}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() =>
            setOpenIndex(
              openIndex === index ? -1 : index
            )
          }
        />
      ))}

      {filteredFAQs.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            No FAQs found
          </h3>

          <p className="mt-2 text-slate-500">
            Questions for this category will appear here.
          </p>
        </div>
      )}
    </div>
  );
}