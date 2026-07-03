"use client";

import { useField } from "formik";
import FormError from "./FormError";
import FormLabel from "./FormLabel";
import { FormTextareaProps } from "@/types/form";

export default function FormTextarea({
  name,
  label,
  required = false,
  placeholder,
  rows = 4,
  disabled = false,
  readOnly = false,
  maxLength,
  className = "",
}: FormTextareaProps) {
  const [field, , helpers] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.replace(/^\s+/, "");
    helpers.setValue(value);
  };

  return (
    <div className="w-full">
      <FormLabel name={name} label={label} required={required} />

      <textarea
        {...field}
        id={name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onChange={handleChange}
        className={`mt-1 w-full rounded border border-[#d9d9d9] px-4 py-3 text-[16px] transition outline-none focus:border-[#48AFDB] ${className}`}
      />

      <FormError name={name} />
    </div>
  );
}
