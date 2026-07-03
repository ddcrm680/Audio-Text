"use client";

import { useField } from "formik";
import FormError from "./FormError";
import FormLabel from "./FormLabel";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps {
  name: string;
  label: string;
  options: Option[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export default function FormSelect({
  name,
  label,
  options,
  required = false,
  disabled = false,
  placeholder = "Select",
  className = "",
}: FormSelectProps) {
  const [field] = useField(name);

  return (
    <div className="w-full">
      <FormLabel name={name} label={label} required={required} />

      <select
        {...field}
        id={name}
        disabled={disabled}
        className={`mt-1 h-[42px] w-full rounded border border-[#d9d9d9] bg-white px-4 transition outline-none focus:border-[#48AFDB] ${className}`}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FormError name={name} />
    </div>
  );
}
