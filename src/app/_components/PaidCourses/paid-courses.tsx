import Section from "@/components/Section";
import CourseCard from "@/components/CourseCard";
import chemistryFirst from "@/assets/images/course/chemistry-1st-paper.jpg"
import physics from "@/assets/images/course/physics-cycle1.webp"

export default function PaidCourses() {
	return (
		<Section
			subtitle="আমাদের কোর্সসমূহ"
			title="আমাদের চলমান ও আপকামিং কোর্সসমূহ..."
		>
			<div className="flex flex-col md:flex-row justify-center gap-10">
				{courses.map((course, idx) => (
					<CourseCard
						key={idx}
						imgURL={course.imgURL}
						title={course.title}
						description={course.description}
						isPaid={course.isPaid}
					/>
				))}
			</div>
		</Section>
	);
}

const courses = [
	{
		imgURL: chemistryFirst,
		title:
			"Basic to Advanced Chemistry 1st & 2nd Paper Course (For 24 & 25 Batch)",
		description: "এক কোর্সেই Academic এবং Admission এর Complete Solution",
		isPaid: true,
	},
	{
		imgURL: physics,
		title: "Cyclewise Physics Course - Cycle 01",
		description: "এক কোর্সেই Academic এবং Admission এর Complete Solution",
		isPaid: true,
	},
];
