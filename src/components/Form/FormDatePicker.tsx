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
      <div className="mb-[1.5px]">
        <FormLabel name={name} label={label} required={required} />
      </div>
      <input
        {...field}
        id={name}
        type="date"
        disabled={disabled}
        min={min}
        max={max}
        className={`focus:border-primary-blue h-[42px] w-full rounded border border-[#d9d9d9] px-4 text-[14px] transition outline-none ${className}`}
      />

      <FormError name={name} />
    </div>
  );
}
