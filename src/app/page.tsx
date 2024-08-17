import Image from "next/image";
import Hero from "./_components/Hero/hero";
import PaidCourses from "./_components/PaidCourses/paid-courses";
import WhyUs from "./_components/WhyUs/why-us";
import FreeCourses from "./_components/FreeCourses/free-courses";
import Testimonial from "./_components/Testimonial/testimonial";
import Team from "./_components/Team/team";
import SSC from "./_components/SSC/ssc";
import ContactUs from "./_components/ContactUs/contact-us";
import Footer from "./_components/Footer/footer";

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
