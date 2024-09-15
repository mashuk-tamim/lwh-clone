import Section from "@/components/Section";
import React from "react";
import Card from "./card";
import feature1 from "@/assets/images/featured/asset-1.png"
import feature2 from "@/assets/images/featured/asset-2.png"

export default function WhyUs() {
	return (
    <Section subtitle="লার্ন উইথ হিমেল" title="কেন আমাদের থেকে শিখবে?">
			{ourFeatures.map((feature, idx) => (
				<Card
					key={idx}
					subtitle={feature.subtitle}
					title={feature.title}
					description={feature.description}
					imgURL={feature.imgURL}
					icon={feature.icon}
          reverse={feature.reverse}
				/>
			))}
		</Section>
	);
}

const ourFeatures = [
	{
		subtitle: "তোমার শেখা হবে অনেক দ্রুত",
		title: "কোন বাড়তি কথা নেই, কঠিন টপিক্স সহজে শিখবে",
		description:
			"এইচ এস সি তে এমনিতেই সময় অনেক কম। তাই কম সময়ে ভালো ফলাফল করতে চাইলে জটিল ও কঠিন টপিক্স সহজে শিখে প্রয়োগ করতে পারলেই তুমি এগিয়ে যাবে",
		imgURL: feature1,
		icon: "⏱️",
		reverse: false,
	},
	{
		subtitle: "স্টেপ বাই স্টেপ গাইডলাইন",
		title: "সহজেই বুঝতে পারবে এমন ভিডিও",
		description:
			"আমরা চেষ্টা করেছি ভিডিওগুলো এমনভাবে বানাতে, যেন তোমার বেসিক একদম পরিষ্কার হয়ে যায় এবং তুমি এডমিশনের জন্য রেডি হতে পারো",
		imgURL: feature2,
		icon: "📺",
		reverse: true,
	},
];
