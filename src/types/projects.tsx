import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  stack2?: string[];
  content?: React.ReactNode | string;
};
