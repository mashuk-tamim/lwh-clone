"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from 'react'
import { ChevronDown } from "lucide-react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function HoverButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
		<Button
			variant={"ghost"}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<HoverCard>
				<HoverCardTrigger className="flex gap-1 items-center">
					<span>এইচ এস সি</span>
					<ChevronDown
						className={`h-4 w-4 transition-all duration-500 ${
							isHovered ? "rotate-180" : "rotate-0"
						}`}
					/>
				</HoverCardTrigger>
				<HoverCardContent className="w-[550px] flex justify-around py-5 gap-5 bg-black">
					<div className="w-[45%] flex flex-col text-start p-2 rounded hover:bg-accent">
						<Link href="/">
							<h1>একাডেমিক</h1>
							<p className="text-slate-400 text-sm">
								একাডেমিক ফুল সিলেবাস সুন্দর ভাবে গুছানো আছে, তুমি চাইলেই শুরু করো...
							</p>
						</Link>
					</div>
					<div className="w-[45%] flex flex-col text-start p-2 rounded hover:bg-accent">
						<Link href="/">
							<h1>এডমিশন</h1>
							<p className="text-slate-400 text-sm">
								এডমিশন ফুল সিলেবাস সুন্দর ভাবে গুছানো আছে, তুমি চাইলেই শুরু করো...
							</p>
						</Link>
					</div>
				</HoverCardContent>
			</HoverCard>
		</Button>
	);
}
