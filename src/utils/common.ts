import { StaticImageData } from "next/image";

export interface SectionBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: StaticImageData | string;
}
