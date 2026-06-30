export interface ContentSectionProps {
  title: string;

  description: React.ReactNode;

  image: string;

  imageAlt?: string;

  imagePosition?: "left" | "right";

  buttonText?: string;

  buttonLink?: string;

  titleIcon?: React.ReactNode;

  className?: string;
}
