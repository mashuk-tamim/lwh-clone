import React from "react";
import rocket from "@/assets/svgs/rocket-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock4, Youtube } from "lucide-react";
import facebook from "@/assets/images/logos/facebook.png";
import youtube from "@/assets/images/logos/youtube.png";
import heroBanner from "@/assets/images/hemel.webp";

import {
	Card
} from "@/components/ui/card";

export default function Hero() {
	return (
		<section className="w-screen pt-20 lg:pt-40 pb-20 px-8 md:px-10 lg:bg-hero-pattern bg-center bg-cover">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0">
					<div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start space-y-3 lg:space-y-4 text-center lg:text-start">
						<div className="flex gap-[6px] lg:gap-3 lg:flex-col text-xl md:text-3xl lg:text-6xl font-bold">
							<h1 className="">এইটা দুনিয়ার সবথেকে </h1>
							<h1>
								<span className="text-[#38bdf8]"> সহজ</span> টপিক, ভাই 🚀
							</h1>
						</div>
						<div>
							<p>
								সঠিক গাইডলাইনের অভাবে অথবা মফস্বল এলাকায় থাকার ফলে কিংবা আর্থিক
								সমস্যার জন্য পিছিয়ে পড়েছো? তাহলে আমরা আছি তোমার পাশে৷ তুমি
								আমাদের সাথে শুরু করতে পারো৷
							</p>
						</div>
						<div>
							<p>
								তোমার জন্য আমাদের রয়েছে অসংখ্য ফ্রী ক্লাস ও পাশাপাশি রয়েছে পেইড
								কোর্স৷ তোমার আর্থিক সমস্যা থাকলে আমাদের ফ্রী ক্লাস গুলো অনুসরণ
								করেই একাডেমিক ও এডমিশন কভার করে ফেলতে পারো৷ আর যদি ক্লাসের
								পাশাপাশি ডেইলি ও উইকলি পরীক্ষা, প্রবলেম সলভিং ও গাইডলাইন সেশন সহ
								যাবতীয় ফ্যাসিলিটি পেতে চাও তাহলে যুক্ত হতে পারো আমাদের পেইড
								কোর্সসমুহে৷ তাহলে আর দেরী কেনো? চলো শুরু করা যাক 🏃‍♂️
							</p>
						</div>
						<div className="flex gap-3">
							<Button variant="outline" className="flex gap-2">
								<Clock4 className="size-4" />
								এনরোল করুন
							</Button>
							<Button variant="gradient" className="flex gap-2">
								<Youtube className="size-4" />
								ভিডিও দেখুন
							</Button>
						</div>
						<div className="flex flex-col items-center lg:items-start space-y-2">
							<p>Follow us on social media</p>
							<div className="flex gap-3">
								<Link href="">
									<Image
										src={facebook}
										alt="facebook_logo"
										className="size-8"
									/>
								</Link>
								<Link href="">
									<Image src={youtube} alt="youtube_logo" className="size-8" />
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[50%] h-[200px] md:h-[300px] lg:h-[300px] flex justify-end">
						<Image
							src={heroBanner}
							alt=""
							className="lg:w-[85%] end-0 object-cover rounded-xl"
						/>
					</div>
				</div>
				<div className="flex flex-wrap gap-5 justify-items-center justify-center items-center z-0 pt-5 lg:pt-20">
					{features.map((feature, idx) => (
						<Card
							key={idx}
							className="w-[160px] h-[100px] md:w-[260px] md:h-[130px] text-center shadow-xl lg:shadow-2xl flex items-center justify-center"
						>
							<div className="font-bold">
								<h1 className="text-[#665bff] text-base md:text-3xl">
									{feature.title}
								</h1>
								<p className="text-xs md:text-xl">{feature.subtitle}</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

const features = [
	{
		title: "১০ লক্ষ+ 🤓",
		subtitle: "ছাত্রছাত্রী শিখছে",
	},
	{
		title: "১৭৫ হাজার 😇",
		subtitle: "সাবস্ক্রাইব করেছে",
	},
	{
		title: "৫৬০+ 🤯",
		subtitle: "ফ্রি ক্লাস রয়েছে",
	},
	{
		title: "৬৪ টি 🤩",
		subtitle: "জেলা থেকে শিখছে",
	},
];
