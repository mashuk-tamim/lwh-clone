import { StaticImageData } from "next/image";

export interface CourseCardProps {
	title: string;
	description: string;
	imgURL: string | StaticImageData;
	isPaid: boolean;
}