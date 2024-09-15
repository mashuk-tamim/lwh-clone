import { StaticImageData } from "next/image";

export interface CourseCardProps {
  id: number;
	title: string;
	description: string;
	imgURL: string | StaticImageData;
	isPaid: boolean;
}