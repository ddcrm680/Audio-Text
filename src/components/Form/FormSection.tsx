import { FormSectionProps } from "@/types/form";
import { Info } from "lucide-react";

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="relative mt-[15px] mb-[35px] rounded-[10px] border border-[#ddd]">
      <div className="absolute -top-[14px] left-2 flex items-center gap-2 bg-white px-2 dark:bg-slate-900">
        <Info
          size={16}
          className="fill-[#2d3142] text-white"
          strokeWidth={1.5}
        />

        <span className="text-[19px] font-medium text-[#444] dark:text-slate-100">
          {title}
        </span>
      </div>
      <div className="px-[15px] py-[20px]">{children}</div>
    </div>
  );
}
