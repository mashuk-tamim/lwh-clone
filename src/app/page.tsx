import Hero from "../components/Hero/hero";
import PaidCourses from "../components/PaidCourses/paid-courses";
import WhyUs from "../components/WhyUs/why-us";
import FreeCourses from "../components/FreeCourses/free-courses";
import Testimonial from "../components/Testimonial/testimonial";
import Team from "../components/Team/team";
import SSC from "../components/SSC/ssc";
import ContactUs from "../components/ContactUs/contact-us";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<PaidCourses />
			<WhyUs />
			<FreeCourses />
			<SSC />
			<Testimonial />
			<Team />
			<ContactUs />
		</main>
	);
}
