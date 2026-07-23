"use client";

import { ChevronDown } from "lucide-react";

interface TandCItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function TandCItem({
  question,
  answer,
  isOpen,
  onClick,
}: TandCItemProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {question}
        </h3>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-200 px-6 py-5">
            <p className="leading-8 text-slate-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}