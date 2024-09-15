import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CourseCardProps {
	title: string;
	description: string;
	imgURL: string | StaticImageData;
	isPaid: boolean;
}

export default function CourseCard({ title, description, imgURL, isPaid }: CourseCardProps) {
	return (
		<div className="max-w-[400px] md:max-w-[320px] lg:max-w-[400px]">
			<Card>
				<Image
					src={imgURL}
					alt={title}
					width={200}
					height={100}
					className="w-full h-[200px] object-cover rounded-t-lg"
				/>
				<div className="p-4 hover:bg-accent/50 hover:rounded-b-lg space-y-2 lg:space-y-0">
					<h1
						className={`text-xl font-bold ${
							isPaid ? "md:h-[80px] lg:h-[70px]" : "h-[40px]"
						} `}
					>
						{title}
					</h1>
					<p>{description}</p>
					{isPaid ? (
						<div className="pt-8">
							<Button variant={"gradient"} className="">
								বিস্তারিত দেখ
							</Button>
						</div>
					) : (
						<div className="pt-8">
							<Button variant={"outline"} className="">
								বিস্তারিত দেখ
							</Button>
						</div>
					)}
				</div>
			</Card>
		</div>
	);
}
