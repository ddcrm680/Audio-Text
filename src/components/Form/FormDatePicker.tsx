"use client";

import { useField } from "formik";
import FormError from "./FormError";
import FormLabel from "./FormLabel";
import { FormDatePickerProps } from "@/types/form";

export default function FormDatePicker({
  name,
  label,
  required = false,
  disabled = false,
  min,
  max,
  className = "",
}: FormDatePickerProps) {
  const [field] = useField(name);

  return (
    <div className="w-full">
      <FormLabel name={name} label={label} required={required} />

      <input
        {...field}
        id={name}
        type="date"
        disabled={disabled}
        min={min}
        max={max}
        className={`mt-1 h-[48px] w-full rounded border border-[#d9d9d9] px-4 text-[16px] transition outline-none focus:border-[#48AFDB] ${className}`}
      />

      <FormError name={name} />
    </div>
  );
}
