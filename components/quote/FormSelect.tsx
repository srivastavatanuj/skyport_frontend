import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormSelectProps {
  label: string;
  required?: boolean;
  options: string[];
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FormSelect({
  label,
  required,
  options,
  placeholder,
  registration,
  error,
}: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <select
        {...registration}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
      >
        <option value="">
          {placeholder || `Select ${label}`}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}