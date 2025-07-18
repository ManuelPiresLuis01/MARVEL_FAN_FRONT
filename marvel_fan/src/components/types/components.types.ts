export interface MarvelCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface NoveltyProps {
  id: string;
  banner: string;
  title: string;
  description: string;
}

export interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
