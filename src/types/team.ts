import { StaticImageData } from "next/image";

export interface TeamCardProps {
  image: StaticImageData;
  title: string;
  index: number;
  points: string[];
  skype: string;
  email: string;

  active: boolean;
  onClick: () => void;
}
