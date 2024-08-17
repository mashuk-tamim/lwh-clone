"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/svgs/logo.svg"; 
import { ModeToggleButton } from "./mode-toggle";
import LoginSignUpButton from "./login-signup-button";
import MobileNavMenu from "./mobile-nav-menu";
import NavLinks from "./nav-links";

export default function Navbar() {
	return (
		<nav className="w-screen h-[50px] md:h-[60px] px-5 md:px-10 backdrop-blur-2xl fixed top-0 z-999 border flex items-center">
			<div className="w-full max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" legacyBehavior>
					<div className="flex items-center h-full cursor-pointer">
						<Image src={logo} alt="logo" className="size-8 lg:size-12" priority />
						<p className="text-base hidden lg:flex">লার্ন উইথ হিমেল ভাই</p>
					</div>
				</Link>
				<div className="hidden md:flex gap-1">
					<NavLinks />
					<div className="flex gap-1">
						<ModeToggleButton></ModeToggleButton>
						<LoginSignUpButton justifyBetween={false} />
					</div>
				</div>
				<MobileNavMenu />
			</div>
		</nav>
	);
}
