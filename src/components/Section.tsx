import React from "react";

export default function Section({
	children,
	title,
	subtitle,
}: Readonly<{
	children: React.ReactNode;
	title: string;
	subtitle: string;
}>) {
	return (
		<section className="w-screen pt-5 pb-20 px-8 md:px-10 overflow-hidden">
			<div className="max-w-7xl mx-auto ">
				<div className="pb-10 md:pb-14 lg:pb-20 text-center">
					<div className="relative">
						<div className="w-[300px] h-[300px] bg-[#7550de] opacity-20 rounded-b-full filter blur-3xl absolute left-[4%] -top-[100px] md:left-[35%] lg:left-[40%]"></div>
					</div>
					<p className="text-sm md:text-lg">{subtitle}</p>
					<h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
				</div>
				{children}
			</div>
		</section>
	);
}
