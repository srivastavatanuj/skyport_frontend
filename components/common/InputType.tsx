"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Input({
  placeholder,
  register,
  error,
}: {
  placeholder: string;
  register: any;
  error?: string;
}) {
  return (
    <div>
      <input
        {...register}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 p-4 outline-none transition focus:border-amber-500"
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export function Select({
  register,
  options,
  placeholder,
  required,
  error,
  label,
}: {
  register: any;
  options: string[];
  placeholder: string;
  required?: boolean
  error?: any
  label?: string
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>

      {label && <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>}


      <input
        type="hidden"
        {...register}
        value={selected}
      />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 text-left transition hover:border-amber-500 focus:border-amber-500"
      >
        <span
          className={
            selected ? "text-slate-900" : "text-slate-400"
          }
        >
          {selected || placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                register.onChange({
                  target: { value: option },
                });
                setOpen(false);
              }}
              className="block w-full px-4 py-3 text-left transition hover:bg-amber-50 hover:text-amber-600"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}