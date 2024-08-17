import React from 'react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';

export default function NavLinks() {
  return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							এস এস সি
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>এইচ এস সি</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{courses.map((course, idx) => (
								<Link
									key={idx}
									href={course.href}
									className="p-3 rounded hover:bg-accent"
								>
									<h1>{course.title}</h1>
									<p className="text-slate-400 text-sm">{course.description}</p>
								</Link>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							এক্সাম দিতে চাও?
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							নোটস
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}


const courses: { title: string; href: string; description: string }[] = [
	{
		title: "একাডেমিক",
		href: "/",
		description:
			"একাডেমিক ফুল সিলেবাস সুন্দর ভাবে গুছানো আছে, তুমি চাইলেই শুরু করো...",
	},
	{
		title: "এডমিশন",
		href: "/",
		description:
			"এডমিশন ফুল সিলেবাস সুন্দর ভাবে গুছানো আছে, তুমি চাইলেই শুরু করো...",
	},
];