"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svgs/logo.svg";
import MobileNavMenu from "./mobile-nav-menu";
import NavLinks from "./nav-links";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
import { ModeToggleButton } from "../ui/mode-toggle";
import { useAuth } from "@/context/auth-context";

export default function Navbar() {
  const { user, logout } = useAuth();
	
	return (
		<nav className="w-screen h-[50px] md:h-[60px] px-5 md:px-10 backdrop-blur-2xl fixed top-0 z-999 flex items-center">
			<div className="w-full max-w-7xl mx-auto flex justify-between items-center">
				<Link href="/" legacyBehavior>
					<div className="flex items-center h-full cursor-pointer">
						<Image
							src={logo}
							alt="logo"
							className="size-8 lg:size-12"
							priority
						/>
						<p className="text-base hidden lg:flex">লার্ন উইথ হিমেল ভাই</p>
					</div>
				</Link>
				<div className="hidden md:flex gap-1">
					<NavLinks />
					<div className="flex gap-1">
						<ModeToggleButton></ModeToggleButton>
						{user ? (
							<div className="flex items-center">
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Image
											src={user.image}
											alt="avatar"
											width={100}
											height={100}
											className="size-9 rounded-full border"
										/>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>My Account</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<Link href="/profile">Profile</Link>
										</DropdownMenuItem>
										<DropdownMenuItem onClick={logout}>
											Log out
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						) : (
							<Link href="/login">
								<Button variant={"outline"} className="flex gap-2 text-xs">
									<UserRound className="h-4 w-4" />
									লগইন
								</Button>
							</Link>
						)}
					</div>
				</div>
				<MobileNavMenu />
			</div>
		</nav>
	);
}
