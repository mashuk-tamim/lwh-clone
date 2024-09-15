import CourseCard from "@/components/CourseCard";
import Section from "@/components/Section";
import React from "react";
import chemistry1 from "@/assets/images/course/chemistry-1st-paper.jpg"
import chemistry2 from "@/assets/images/course/chemistry-2nd-paper.jpg"
import physics1 from "@/assets/images/course/physics-1st-paper.jpg"
import physics2 from "@/assets/images/course/chemistry-2nd-paper.jpg";
import math1 from "@/assets/images/course/math-1st-paper.jpg"
import math2 from "@/assets/images/course/math-2nd-paper.jpg"

export default function FreeCourses() {
	return (
		<Section
			subtitle="আমাদের কোর্সসমূহ"
			title="নিজেকে ঝালিয়ে নাও, আরো একবার, ফ্রি তে 🏃‍♂️"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {courses.map((course, idx) => (
					<CourseCard
						key={idx}
						title = {course.title}
						description = {course.description}
						imgURL = {course.imgURL}
						isPaid = {course.isPaid}
					/>
				))}
			</div>
		</Section>
	);
}

const courses = [
	{
		imgURL: chemistry1,
		title: "রসায়ন ১ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
	{
		imgURL: chemistry2,
		title: "রসায়ন 2ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
	{
		imgURL: physics1,
		title: "রসায়ন ১ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
	{
		imgURL: physics2,
		title: "রসায়ন ১ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
	{
		imgURL: math1,
		title: "রসায়ন ১ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
	{
		imgURL: math2,
		title: "রসায়ন ১ম পত্র",
		description:
			"শুরু থেকে শেষ পর্যন্ত সব জটিল ও কঠিন টপিক্স পরিষ্কার হয়ে যাবে, যদি তুমি পুরোটা শেষ করতে পারো।n",
		isPaid: false,
	},
];
