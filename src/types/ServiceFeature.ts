import { ReactNode } from "react";

export interface FeatureSectionProps {
  title: string;
  description: ReactNode;
  childPadding?: string;
  icon: ReactNode;
  descClassName?: string;
  titleClassName?: string;
  imageVerticalContainer?: string;
  imageContainerClassName?: string;
  image?: string;
  card?: boolean;
  center?: boolean;
  cardClassName?: string;
  contentClassName?: string;
  titleWrapperClassName?: string;
  iconWrapperClassName?: string;
  padding?: string;
  imageAlt?: string;

  imagePosition?: "left" | "right";

  layout?: "vertical" | "horizontal";

  buttonText?: string;
  buttonLink?: string;

  className?: string;
}
