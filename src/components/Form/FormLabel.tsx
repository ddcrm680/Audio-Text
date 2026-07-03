import { formLabelType } from "@/types/form";
import React from "react";

function FormLabel({ name, label, required }: formLabelType) {
  return (
    <label
      htmlFor={name}
      className="mb-1 text-[17px] font-light text-[#2d3142]"
    >
      {label}

      {required && <span className="ml-1 font-semibold text-[#ff0000]">*</span>}
    </label>
  );
}

export default FormLabel;
