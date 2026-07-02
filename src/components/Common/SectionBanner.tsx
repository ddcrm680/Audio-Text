interface SectionBannerProps {
  title: string;
  subtitle: string;
}

export default function SectionBanner({ title, subtitle }: SectionBannerProps) {
  return (
    <section
      className="bg-[#48AFDB] py-8 md:py-10"
      style={{ fontFamily: "Aileron UltraLight" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[58px] font-bold text-white md:text-5xl">
          {title}
        </h1>

        <h2 className="mt-[11px] text-[19px] font-bold text-[#FFF200] md:text-2xl">
          {subtitle}
        </h2>
      </div>
    </section>
  );
}
