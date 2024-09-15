import CourseCard from "@/components/shared/CourseCard";
import Section from "@/components/shared/Section";
import { freeCourses } from "@/mock/free-courses";
import React from "react";


export default function FreeCourses() {
	return (
		<Section
			subtitle="আমাদের কোর্সসমূহ"
			title="নিজেকে ঝালিয়ে নাও, আরো একবার, ফ্রি তে 🏃‍♂️"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
				{freeCourses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						imgURL={course.imgURL}
						isPaid={course.isPaid}
					/>
				))}
			</div>
		</Section>
	);
}

