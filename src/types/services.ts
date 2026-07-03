import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface ServiceCardProp {
  title?: ReactNode;
  parentClassName?: string;
  iconClassName?: string;
  imageContainerClassName?: string;
  description?: string;
  titleClassName?: string;
  descClassName?: string;
  enableHoverScale?: boolean;
  enableScrollAnimation?: boolean;
  animationDirection?: "left" | "right" | "center";
  icon?: string;
  color?: string;
}
