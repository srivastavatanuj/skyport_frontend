"use client";

import { useEffect, useState } from "react";

import TandCItem from "./TandCItem";
import { tandcs } from "@/data/termsConditions";

interface TandCAccordionProps {
  selectedCategory: string;
}

export default function TandCAccordion({
  selectedCategory,
}: TandCAccordionProps) {
  const filteredTandCs =
    selectedCategory === "all"
      ? tandcs
      : tandcs.filter(
          (category) => category.category === selectedCategory
        );

  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      {filteredTandCs.map((tanndc, index) => (
        <TandCItem
          key={`${tanndc.category}-${tanndc.question}`}
          question={`${index + 1}. ${tanndc.question}`}
          answer={tanndc.answer}
          isOpen={openIndex === index}
          onClick={() =>
            setOpenIndex(
              openIndex === index ? -1 : index
            )
          }
        />
      ))}

      {filteredTandCs.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            No TandCs found
          </h3>

          <p className="mt-2 text-slate-500">
            Questions for this category will appear here.
          </p>
        </div>
      )}
    </div>
  );
}