import React from "react";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

interface LoginSignUpButtonProps {
	justifyBetween: boolean;
}

export default function LoginSignUpButton({justifyBetween}:LoginSignUpButtonProps) {
	return (
		<div
			className={`flex ${
				justifyBetween ? "justify-between" : "justify-start"
			} gap-1`}
		>
			<Button variant={"outline"} className="flex gap-2 text-xs">
				<UserRound className="h-4 w-4" />
				লগইন
			</Button>
			<Button variant={"gradient"} className="text-xs">
				সাইন আপ
			</Button>
		</div>
	);
}
