export interface ContactCardProps {
  heading: string;
  children: React.ReactNode;
}

export interface ContactMethod {
  readonly label: string;
  readonly value: string;
  readonly href: string | null;
  readonly icon: string;
}
