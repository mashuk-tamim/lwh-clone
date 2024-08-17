import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accord() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>
					হিমেল ভাই এর কোন পেইড কোর্সটি দিয়ে শুরু করবো?
				</AccordionTrigger>
				<AccordionContent>
					কোন পেইড কোর্স দিয়েই শুরু করার দরকার নেই। আমাদের ইউটিউব চ্যানেলে অনেক
					ফ্রি কন্টেন্ট আছে। এবং এই ওয়েবসাইটে সব সাবজেক্টওয়াইজ সাজানো আছে। তোমার
					যেই চ্যপ্টার শেখা প্রয়োজন সেইটা শিখে নাও
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>
					হিমেল ভাইয়ের ইউটিউবের ফ্রী ভিডিও গুলো অনুসরণ করলেই সব কভার হবে?
				</AccordionTrigger>
				<AccordionContent>
					হ্যা, তুমি যদি মনোযোগ সহকারে নোট করে করে কোনো চ্যাপ্টারের প্লেলিস্ট
					কমপ্লিট করো আশাকরি তোমার বেসিক সহ কভার হয়ে যাবে৷
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>
					ইউটিউবে ফ্রী ভিডিওর পাশাপাশি কিছু কোর্সও চলমান থাকে৷ কোর্সগুলোতে
					এক্সট্রা কি থাকে?
				</AccordionTrigger>
				<AccordionContent>
					থিউরিগুলো আরও সাজানোভাবে আলোচনা করা হয়৷
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>হিমেল ভাই এর কোর্স কেনার উপাই কি?</AccordionTrigger>
				<AccordionContent>
					আপাতত কোন রানিং কোর্স নেই। যখন আসবে, এই ওয়েবসাইতেই আপডেট পাবেন।
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>
					কোর্স কিনে রেকর্ড করা ক্লাসের কোনো অংশ বুঝতে না পারলে? বা কোনো প্রশ্নে
					আটকে গেলে কি করবো?
				</AccordionTrigger>
				<AccordionContent>
					রেকর্ড করা ক্লাসের কোনো অংশ বুঝতে না পারলে, সেগুলার সলভ দেয়ার জন্য
					বুয়েটের কয়েকজন ভাই থাকেন সবসময়। বুঝতে না পারা অংশটির পিক তুলে কমেন্ট
					করলেই ওনারা রেসপন্স করেন৷
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-6">
				<AccordionTrigger>এর বাইরে আরও কিছু জানতে চাওয়া?</AccordionTrigger>
				<AccordionContent>
					ম্যাসেজ করো আমাদের ফেসবুক পেইজ Learn With Hemel Bhai পেইজে
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
