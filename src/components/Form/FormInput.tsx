"use client";

import { FormInputProps } from "@/types/form";
import { ErrorMessage, useField } from "formik";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

export default function FormInput({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  maxLength,
  className = "",
}: FormInputProps) {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Don't allow spaces at the beginning
    value = value.replace(/^\s+/, "");

    helpers.setValue(value);
  };

  return (
    <div className="flex flex-col">
      <FormLabel name={name} label={label} required={required} />
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        autoComplete="off"
        onChange={handleChange}
        className={`focus:border-primary-blue h-[42px] rounded-[4px] border border-[#d9d9d9] px-4 text-[14px] transition outline-none disabled:bg-gray-100 ${meta.touched && meta.error ? "border-red-500" : ""} ${className} `}
      />
      <FormError name={name} />
    </div>
  );
}
