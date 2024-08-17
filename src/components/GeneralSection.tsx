import React from "react";
import { Button } from "./ui/button";
interface Props {
	title: string;
	hasButton: boolean;
	buttonText: string;
}

export default function GeneralSection({
	title,
	hasButton,
	buttonText,
}: Props) {
	return (
		<div className="w-screen bg-accent h-[180px] flex flex-col items-center justify-center px-8 md:px-10 gap-4">
			<h1 className="text-xl md:text-2xl font-bold text-center">{title}</h1>
			{hasButton && <Button>{buttonText}</Button>}
		</div>
	);
}
