import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface ServiceCardProp {
  title?: ReactNode;
  cardVariant?: "default" | "feature";
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  iconWrapperClassName?: string;
  parentClassName?: string;
  iconClassName?: string;
  imageContainerClassName?: string;
  description?: string;
  descClassName?: string;
  enableHoverScale?: boolean;
  enableScrollAnimation?: boolean;
  animationDirection?: "left" | "right" | "center";
  icon?: string;
  color?: string;
}
