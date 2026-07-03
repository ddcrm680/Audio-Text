"use client";

import { FormErrorProps } from "@/types/form";
import { useField, useFormikContext } from "formik";

export default function FormError({ name }: FormErrorProps) {
  const [, meta] = useField(name);
  const { submitCount } = useFormikContext<any>();

  if (!meta.error) return null;

  if (!meta.touched && submitCount === 0) return null;

  return <p className="mt-1 text-sm text-red-500">{meta.error}</p>;
}
