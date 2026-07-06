import { StaticImageData } from "next/image";

type Author = {
  name: string;
  image: string;
  designation: string;
};

export interface Blog {
  id: number;
  title: string;
  slug: string;
  image: StaticImageData;
  desc: string;
  publish_at: string;
  category: { name: string; slug: string }[];
  socialLinks: {
    twitter: string;
    facebook: string;
    linkedin: string;
    google: string;
    stumble: string;
  };
}
