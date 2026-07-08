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
      <div className="mb-[1.5px]">
        <FormLabel name={name} label={label} required={required} />
      </div>
      <select
        {...field}
        id={name}
        disabled={disabled}
        className={`focus:border-primary-blue h-[42px] w-full rounded border border-[#d9d9d9] bg-white px-4 text-[14px] transition outline-none dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100 ${className}`}
      >
        <option
          value=""
          className="bg-white text-[14px] text-gray-500 dark:bg-slate-900 dark:text-slate-100"
        >
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white text-[14px] text-gray-900 dark:bg-slate-900 dark:text-slate-100"
          >
            {option.label}
          </option>
        ))}
      </select>

      <FormError name={name} />
    </div>
  );
}
