export interface DestinationCardProps {
  title: string;
  image: string;
  onImageClick: () => void;
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}
