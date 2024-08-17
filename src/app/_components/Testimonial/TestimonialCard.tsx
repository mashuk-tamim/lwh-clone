import Image, { StaticImageData } from "next/image";
import React from "react";

interface TestimonialCardProps {
	universityLogo: string | StaticImageData;
	name: string;
	batch: string;
	review: string;
}

export default function TestimonialCard({
	universityLogo,
	name,
	batch,
	review,
}: TestimonialCardProps) {
	return (
		<div className="md:w-[210px] lg:w-[386px] min-w-[100px] max-w-[400px] h-auto bg-accent p-4 rounded-xl">
			<div className="flex items-start lg:items-center gap-2">
				<div>
					<Image
						src={universityLogo}
						alt="university_logo"
						width={200}
						height={200}
						className="size-12 md:size-10 lg:size-12 aspect-square"
					/>
				</div>
				<div className="font-medium pb-2 lg:pb-4">
					<p>{name}</p>
					<p className="text-[#f39d0b] md:text-xs lg:text-base">{batch}</p>
				</div>
			</div>
			<div>
				<p>{review}</p>
			</div>
		</div>
	);
}
