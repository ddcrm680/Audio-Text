import { StaticImageData } from "next/image";

export interface DestinationCardProps {
  image: string | StaticImageData;
  title: string;
  share: ShareLinks;

  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onImageClick: () => void;
}
export interface ShareLinks {
  facebook?: string;
  twitter?: string;
  google?: string;
  pinterest?: string;
  linkedin?: string;
  stumble?: string;
}
export interface ShareMenuProps {
  share?: ShareLinks;
}
