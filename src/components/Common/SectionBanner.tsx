interface SectionBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function SectionBanner({
  title,
  subtitle,
  backgroundImage,
}: SectionBannerProps) {
  return (
    <section
      className="bg-[#48AFDB] bg-cover bg-center bg-no-repeat py-[23px] md:py-10"
      style={{
        fontFamily: "Aileron UltraLight",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[44px] font-bold text-white md:text-5xl">
          {title}
        </h1>

        <h2 className="mt-[11px] text-4xl font-bold text-[#FFF200]">
          {subtitle}
        </h2>
      </div>
    </section>
  );
}
