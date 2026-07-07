import { StaticImageData } from "next/image";

export interface ContentSectionProps {
  title: string;

  description: React.ReactNode;

  image?: string | StaticImageData;

  subParentClassName?: string;
  imageAlt?: string;
  titleClassName?: string;
  bg?: string;

  imagePosition?: "left" | "right";

  buttonText?: string;

  buttonLink?: string;
  padding?: string;

  titleIcon?: React.ReactNode;

  className?: string;
}
