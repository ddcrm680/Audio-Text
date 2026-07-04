import { SectionBannerProps } from "@/utils/common";

export default function SectionBanner({
  title,
  subtitle,
  backgroundImage,
}: SectionBannerProps) {
  return (
    <section
      className={`${backgroundImage ? "" : "bg-primary-blue"} bg-cover bg-center bg-no-repeat py-[23px] md:py-10`}
      style={{
        fontFamily: "Aileron UltraLight",
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center">
        {title && (
          <h1 className="text-[44px] font-bold text-white md:text-5xl">
            {title}
          </h1>
        )}

        {subtitle && (
          <h2 className="mt-[11px] text-4xl font-bold text-[#FFF200]">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
