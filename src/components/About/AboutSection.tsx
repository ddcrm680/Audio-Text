import { AboutSectionProps } from "@/types/about";

export default function AboutSection({
  icon: Icon,
  title,
  description,
  color = "#48AFDB",
}: AboutSectionProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-5 flex items-center gap-[15px]">
        <div
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={2} />
        </div>

        <h2 className="text-primary-blue text-4xl uppercase">{title}</h2>
      </div>

      {typeof description === "string" ? (
        <p className="text-[18px] leading-[25px] whitespace-pre-line text-[#3e4b66] dark:text-slate-300">
          {description}
        </p>
      ) : (
        description
      )}
    </div>
  );
}
