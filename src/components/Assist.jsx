"use client";
import { teamToLogo } from "@/utils";
import Image from "next/image";
import React from "react";

function Assist({ topAssisters }) {
	const topAssister = [
		{
			name: "Layi",
			team: "Zeus",
			goals: 2,
			assists: 2,
		},
		{
			name: "Bello",
			team: "Zeus",
			goals: 2,
			assists: 0,
		},
		{
			name: "David",
			team: "Jad FC",
			goals: 2,
			assists: 0,
		},
		{
			name: "AbdulSalam",
			team: "Marine FC",
			goals: 2,
			assists: 0,
		},
		{
			name: "OG by Lamine",
			team: "Zeus",
			goals: 1,
			assists: 0,
		},
		{
			name: "OG by Tunde",
			team: "Marine FC",
			goals: 1,
			assists: 0,
		},
	];
	return (
		<div className=" ">
			<div className="text-center border-2 p-2 text-xs">TOP ASSIST RANKING</div>
			<ul className=" gap-2 flex flex-col border rounded-md pr-8 py-4">
				<li className="flex justify-between font-bold ">
					<div className="flex ">
						<span className="px-4 w-16 text-center">POS</span>
						<span>PLAYER</span>
					</div>
					<div>
						<div className="flex gap-4 items-center">
							<span className="md:w-32  ">CLUB</span>
							<span className="md:w-16 -mr-5">ASSISTS</span>
						</div>
					</div>
				</li>
				{topAssister.map((assister, index) => (
					<li
						className="flex justify-between"
						key={index}>
						<div className="flex ">
							<span className="px-4 w-16 text-center">{index + 1}</span>
							<span className="">{assister.name}</span>
						</div>
						<div className="flex gap-4">
							<div className="flex gap-2 md:w-32   items-center">
								{teamToLogo(assister.team) ? (
									<Image
										alt="team-logo"
										className="h-6 w-6 rounded-full"
										src={require(`../../public/assets/${teamToLogo(
											assister.team
										)}.jpg`)}></Image>
								) : (
									<span className="bg-white h-6 w-6 rounded-full text-gray-900 flex items-center justify-center font-bold ">
										{assister.team[0]}
									</span>
								)}
								<span>{assister.team}</span>
							</div>

							<span className="text-center md:w-16">{assister.assists}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Assist;
