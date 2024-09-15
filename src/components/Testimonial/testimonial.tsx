import Section from "@/components/shared/Section";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import Accord from "./accordion";
import buetLogo from "@/assets/images/logos/buet.png"

export default function Testimonial() {
	return (
		<Section
			subtitle="শিক্ষার্থীরা সর্বদাই লার্ন উইথ হিমেল এর প্রতি ভালবাসা প্রকাশ করেছেন"
			title="কোর্স সম্পর্কে তোমাদের অভিমত"
		>
			<div className="md:h-[950px] lg:h-[650px] flex flex-col md:flex-wrap gap-5">
				{testimonials.map((testimonial) => (
					<TestimonialCard
						key={testimonial.id}
						universityLogo={testimonial.universityLogo}
						name={testimonial.name}
						batch={testimonial.batch}
						review={testimonial.review}
					/>
				))}
			</div>
			<div className="w-full pt-20 flex flex-col lg:flex-row items-center gap-10">
				<div className="w-full lg:w-[40%]">
					<h1 className="text-4xl font-bold">
						সচরাচর জানতে চাওয়া প্রশ্নের উত্তর
					</h1>
					<p>
						তোমাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে আগেই দিয়েছি । আমাদের কে
						প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো।
					</p>
        </div>
        <div className="w-full lg:w-[60%]">
          <Accord/>
        </div>
			</div>
		</Section>
	);
}

const testimonials = [
	{
		id: 1,
		universityLogo: buetLogo,
		name: "Abdul Hannan",
		batch: "BUET CSE (Merit - 143)",
		review:
			"আসসালামু আলাইকুম ভাইয়্যা। আমি সবসময় আপনার নিকট অনেক কৃতজ্ঞ থাকবো৷ আমি একটা লোয়ার মিডল ক্লাস ফ্যামিলি এর ছেলে যার পড়ালেখা চালিয়ে যাওয়া এর পিছনে আপনার অনেক বড় হাত আছে। আপনি না থাকলে হয়তো আমার পড়ালেখা ও চালিয়ে যাওয়া হইতো না। আমি ইউটিউব এ আপনার ফ্রি ক্লাসগুলা করতাম। ভাবতাম আপনাকে ১৫০ টাকা করে দিবো কিন্তু কখনো দিতে পারি নাই এটা আমার আফসোস লাগতো।",
	},
	{
		id: 2,
		universityLogo: buetLogo,
		name: "Tahmim",
		batch: "BUET EEE (Merit - 278)",
		review:
			"ভাইয়া আমি ইন্টার থেকেই YouTube এ ক্লাস করছি৷ আমার এই Success এর পিছনে আপনার অবদান অনেক বেশি ভাইয়া৷",
	},
	{
		id: 3,
		universityLogo: buetLogo,
		name: "Md Al Amin",
		batch: "BUET ME (Merit - 397)",
		review:
			"ভাইয়া আসসালামু আলাইকুম। আমি আল আমিন, কলেজ DRMC. আলহামদুলিল্লাহ BUET ME (Merit 397) এ চান্স হয়েছি। ভাইয়া এই ফলাফলে শিক্ষকদের মধ্যে আপনার অবদান সবচেয়ে বেশি সম্ভবত। শুধুমাত্র আপনার ইউটিউব চ্যানেল এর। আপনাকে ভাইয়া মন থেকে অনেক অনেক ধন্যবাদ।",
	},
	{
		id: 4,
		universityLogo: buetLogo,
		name: "Moshahak Mobin",
		batch: "BUET EEE (Merit - 81)",
		review:
			"ভাইয়া আমার এই অর্জনের সবচেয়ে বেশি অবদান হচ্ছে আপনার। আমার লেখাপড়ার টার্নিং পয়েন্ট হচ্ছে যখন থেকে আপনার ক্লাস শুরু করি। কলেজেরও অবদানও রয়েছে অনেক বাট আজকে আমার এই সফলতা অর্জনের কারিগর হচ্ছেন আপনি। অনলাইনে আপনার ক্লাস না পেলে হয়তো আজ এতদূর আসতে পারতাম নাহ। অনলাইন এডুকেশন সেক্টর নিয়ে যারা নিরলস পরিশ্রম করে যাচ্ছে তাদের সবাইকে অসংখ্য ধন্যবাদ। আপনার ডিপার্টমেন্ট এর ছোট ভাই হতে পেরে অনেক আনন্দ লাগছে ভাইয়া।",
	},
	{
		id: 5,
		universityLogo: buetLogo,
		name: "Oindrila",
		batch: "BUET CSE (Merit - 102)",
		review:
			"ভাইয়া আমি আপনার Engineering কোর্সে ছিলাম৷ HSC এর সময়ও আপনার ভিডিও দেখেছি YouTube এ, এগুলা অনেক হেল্পফুল ছিলো",
	},
	{
		id: 6,
		universityLogo: buetLogo,
		name: "Abdur Rahim",
		batch: "BUET CSE (Merit - 15)",
		review: "আলহামদুলিল্লাহ ভাই। আপনার Engineering কোর্সে ছিলাম৷",
	},
	{
		id: 7,
		universityLogo: buetLogo,
		name: "Mahiyan",
		batch: "BUET EEE (Merit - 176)",
		review:
			"আমার বুয়েটে এই পজিশন অর্জন করার পিছনে আপনার যে অবদান সেটা বলে বুঝাতে পারবোনা৷ আপনি না থাকলে BUET প্রিলি পার হওয়াও পসিবল হতোনা হয়তো৷",
	},
];
