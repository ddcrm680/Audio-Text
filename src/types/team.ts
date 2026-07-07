import { StaticImageData } from "next/image";

export interface TeamCardProps {
  image: string | StaticImageData;
  title: string;
  points: string[];
  skype: string;
  email: string;
}
