import React from 'react'
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
import LoginSignUpButton from './login-signup-button';
import { ModeToggleButton } from './mode-toggle';

export default function MobileNavMenu() {
  return (
    <div className="flex gap-2 md:hidden">
      <ModeToggleButton/>
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
						<LoginSignUpButton justifyBetween={true} />
					</DropdownMenuLabel>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
