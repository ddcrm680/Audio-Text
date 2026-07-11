import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type PaymentMethod = {
  title: string;
  desc: string;
  icon?: string;
  image?: string;
};
