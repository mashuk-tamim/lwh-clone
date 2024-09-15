import Section from "@/components/shared/Section";
import Image from "next/image";
import React from "react";
import hemel from "@/assets/images/teams/head.png";
import tanvir from "@/assets/images/teams/tanvir.jpeg";
import sagor from "@/assets/images/teams/sagor.jpeg";
import talha from "@/assets/images/teams/talha.jpeg";
import badhon from "@/assets/images/teams/badhon.jpeg";
import joy from "@/assets/images/teams/joy.jpeg";
import alvee from "@/assets/images/teams/alvee.jpeg";
import sabbir from "@/assets/images/teams/sabbir.jpeg";
// import hemel from "@/assets/images/teams/hemel.jpg"

export default function Team() {
	return (
		<Section subtitle="" title="Our Team">
			<div className="flex flex-col items-center gap-10">
				<div className="flex flex-col items-center gap-4">
					<Image
						src={hemel}
						alt="hemel"
						className="size-48 zoom-in-150 rounded-full object-cover object-top"
					/>
					<div className="text-center">
						<p className="font-bold text-lg">Hemel Barua</p>
						<p className="text-sm">Founder & CEO</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{team.map((member) => (
						<div
							key={member.id}
							className="md:w-[200px] lg:w-[250px] flex flex-col items-center gap-4"
						>
							<Image
								src={member.imgURL}
								alt={member.name}
								className="size-24 rounded-full object-cover"
							/>
							<div className="text-center">
								<p className="font-bold text-lg">{member.name}</p>
								<p className="text-sm">{member.designation}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}

const team = [
	{
		id: 1,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 2,
		name: "Abdul Kuddus Sagor",
		designation: "Assistant of Tech Team",
		imgURL: sagor,
	},
	{
		id: 3,
		name: "Abu Talha",
		designation: "Chief Of Notes, Assistant of Tech Team",
		imgURL: talha,
	},
	{
		id: 4,
		name: "Shamsur Rahman Badhon",
		designation: "Content Developer & Problem Solver (BUET))",
		imgURL: badhon,
	},
	{
		id: 5,
		name: "Tanvir Ahmed Joy",
		designation: "Content Developer & Problem Solver (BUET)",
		imgURL: joy,
	},
	{
		id: 6,
		name: "Mahtab Alvee",
		designation: "Content Developer & Problem Solver (BUET)",
		imgURL: alvee,
	},
	{
		id: 7,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 8,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 9,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 10,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 11,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 12,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 13,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 14,
		name: "Tanvir Hasan",
		designation: "Chief Of Operations (COO)",
		imgURL: tanvir,
	},
	{
		id: 15,
		name: "Sabbir Ahmed",
		designation: "Chief Of Tech & SWE@Pathao",
		imgURL: sabbir,
	},
];
