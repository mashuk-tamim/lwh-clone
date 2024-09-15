import React from "react";
import { Button } from "./ui/button";
import { GeneralSectionProps } from "@/types/general-section";

export default function GeneralSection({
	title,
	hasButton,
	buttonText,
}: GeneralSectionProps) {
	return (
		<div className="w-screen bg-accent h-[180px] flex flex-col items-center justify-center px-8 md:px-10 gap-4">
			<h1 className="text-xl md:text-2xl font-bold text-center">{title}</h1>
			{hasButton && <Button>{buttonText}</Button>}
		</div>
	);
}
