import Image from "next/image";
import React from "react";
import logo from "@/assets/svgs/logo.svg";
import facebook from "@/assets/images/logos/facebook.png";
import youtube from "@/assets/images/logos/youtube.png";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="h-[200px] lg:h-[250px] bg-[#111827] flex flex-col justify-center items-center">
			<Image src={logo} alt="logo" className="size-12" priority />
			<p className="uppercase font-semibold text-neutral-200">Learn With Hemel bhai</p>
			<div className="flex gap-3">
				<Link href="">
					<Image src={facebook} alt="facebook_logo" className="size-8" />
				</Link>
				<Link href="">
					<Image src={youtube} alt="youtube_logo" className="size-8" />
				</Link>
			</div>
		</footer>
	);
}
