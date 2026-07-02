import { ReactNode } from "react";

export interface FeatureSectionProps {
  title: string;
  description: ReactNode;

  icon: ReactNode;

  image?: string;
  padding?: string;
  imageAlt?: string;

  imagePosition?: "left" | "right";

  layout?: "vertical" | "horizontal";

  buttonText?: string;
  buttonLink?: string;

  className?: string;
}
