export interface ContentSectionProps {
  title: string;

  description: React.ReactNode;

  image?: string;

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
