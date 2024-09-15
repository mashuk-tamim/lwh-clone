import Section from "@/components/shared/Section";
import CourseCard from "@/components/shared/CourseCard";
import { paidCourses } from "@/mock/paid-courses";


export default function PaidCourses() {
	return (
		<Section
			subtitle="আমাদের কোর্সসমূহ"
			title="আমাদের চলমান ও আপকামিং কোর্সসমূহ..."
		>
			<div className="flex flex-col md:flex-row justify-center gap-10">
				{paidCourses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
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


