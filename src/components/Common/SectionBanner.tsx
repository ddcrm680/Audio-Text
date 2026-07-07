import { SectionBannerProps } from "@/utils/common";

export default function SectionBanner({
  title,
  subtitle,
  backgroundImage,
}: SectionBannerProps) {
  return (
    <section
      className={`${backgroundImage ? "" : "bg-primary-blue"} bg-cover bg-center bg-no-repeat pt-[23px] pb-[26px]`}
      style={{
        fontFamily: "Aileron UltraLight",
        backgroundImage: backgroundImage
          ? `url(${typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src})`
          : undefined,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center">
        {title && <h1 className="text-[58px] font-bold text-white">{title}</h1>}

        {subtitle && (
          <h2 className="mt-[11px] mb-[20px] text-4xl font-bold text-[#FFF200]">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}
