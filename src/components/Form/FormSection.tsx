import { FormSectionProps } from "@/types/form";

export default function FormSection({
  title,
  icon,
  children,
}: FormSectionProps) {
  const Info = icon;
  return (
    <section className="mb-8 rounded border border-[#e3e8ef] bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center gap-2 border-b border-[#edf1f5] px-4 py-4 dark:border-slate-700">
        <Info size={15} strokeWidth={2} className="text-primary-blue" />

        <h2 className="text-[16px] font-semibold text-[#2d3142] dark:text-white">
          {title}
        </h2>
      </div>

      <div className="p-4 md:p-4">{children}</div>
    </section>
  );
}
