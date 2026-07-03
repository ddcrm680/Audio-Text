import { ReactNode } from "react";

interface ResellerBenefitsProps {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
  columns?: 1 | 2;
}

export default function ResellerBenefits({
  icon,
  title,
  description,
  points,
  columns = 1,
}: ResellerBenefitsProps) {
  return (
    <section className="px-6 py-[35px]">
      <div className="mt-1 mb-5 flex items-start gap-4 sm:items-center">
        <div className="mt-2 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#48AFDB] text-white md:mt-0">
          {icon}
        </div>

        <h2 className="text-4xl leading-[46px] font-light text-[#48AFDB] uppercase md:text-4xl dark:text-sky-400">
          {title}
        </h2>
      </div>

      <h5 className='mb-3 font-["Aileron_Thin"] text-[21px] leading-[1.8] font-light text-black dark:text-gray-300'>
        {description}
      </h5>

      <ul
        className={`list-disc pl-8 text-[15px] leading-[1.8] font-light text-black dark:text-gray-300 ${
          columns === 2 ? "grid gap-x-20 md:grid-cols-2" : ""
        }`}
      >
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
