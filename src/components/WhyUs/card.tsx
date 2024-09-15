import Image, { StaticImageData } from "next/image";
import React from "react";
import { Timer, TvMinimalPlay } from "lucide-react";

interface CardProps {
	subtitle: string;
	title: string;
	description: string;
	imgURL: string | StaticImageData;
	icon: string;
	reverse: boolean;
}

export default function Card({
	subtitle,
	title,
	description,
	imgURL,
	icon,
	reverse,
}: CardProps) {
  
	return (
		<div
			className={`flex flex-col-reverse lg:flex-row lg:items-center ${
				reverse ? "lg:flex-row-reverse" : "lg:flex-row"
			} pb-10`}
		>
			<div className="w-full lg:w-[50%] space-y-4">
				<p className="bg-[#fcb63b] size-10 rounded-full flex items-center justify-center">
					{icon}
				</p>
				<h3 className="font-bold">{subtitle}</h3>
				<h1 className="font-bold text-3xl">{title}</h1>
				<p>{description}</p>
			</div>
			<div
				className={`w-full lg:w-[50%] flex ${
					reverse ? "justify-start" : "justify-end"
				} `}
			>
				<Image
					src={imgURL}
					alt={title}
					width={200}
					height={100}
					className="w-full lg:w-[70%] h-[300px] object-contain"
				/>
			</div>
		</div>
	);
}
