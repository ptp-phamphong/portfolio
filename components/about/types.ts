export interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: readonly string[];
}

export interface SectionHeaderProps {
  icon: string;
  title: string;
  className?: string;
}

export interface TimelineLink {
  readonly label: string;
  readonly url: string;
}

export interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  link?: TimelineLink;
  variants?: any;
  delay?: number;
}
