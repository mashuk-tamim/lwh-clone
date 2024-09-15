import React from 'react'
import { Button } from "@/components/ui/button";
import { Menu, UserRound } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { ModeToggleButton } from './mode-toggle';
import { useAuth } from '@/context/auth-context';

export default function MobileNavMenu() {
  const { user, logout } = useAuth();
  return (
		<div className="flex gap-2 md:hidden">
			<ModeToggleButton />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuItem>
						<Link href="/" legacyBehavior>
							এস এস সি
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>এইচ এস সি</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<Link href="/" legacyBehavior>
										একাডেমিক
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href="/" legacyBehavior>
										এডমিশন
									</Link>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href="/" legacyBehavior>
							এক্সাম দিতে চাও?
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href="/" legacyBehavior>
							নোটস
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuLabel>
						{user ? (
							<div className="flex items-center justify-between">
								<Link href="/profile">
									<Button variant="outline" className="flex gap-2 text-xs">
										<UserRound className="h-4 w-4" />
										Profile
									</Button>
                </Link>
                <Button onClick={logout}>
                  Logout
                </Button>
							</div>
						) : (
							<Link href="/login">
								<Button variant="outline" className="flex gap-2 text-xs">
									<UserRound className="h-4 w-4" />
									লগইন
								</Button>
							</Link>
						)}
					</DropdownMenuLabel>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
