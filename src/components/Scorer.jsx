"use client";
import { teamToLogo } from "@/utils";
import Image from "next/image";
import React from "react";

function Scorer({ topGoalScorers }) {
	return (
		<div className=" ">
			<div className="text-center border-2 p-2 text-xs">
				TOP GOAL SCORER RANKING
			</div>
			<ul className=" gap-2 flex flex-col border rounded-md pr-8 py-4">
				<li className="flex justify-between font-bold text-xs">
					<div className="flex ">
						<span className="px-4 w-16 text-center">POS</span>
						<span>PLAYER</span>
					</div>
					<div>
						<div className="flex gap-4 items-center">
							<span className="md:w-32  ">CLUB</span>
							<span className="md:w-16 -mr-5">GOALS</span>
						</div>
					</div>
				</li>
				{topGoalScorers.map((scorer, index) => (
					<li
						className="flex justify-between"
						key={index}>
						<div className="flex ">
							<span className="px-4 w-16 text-center">{index + 1}</span>
							<span className="">{scorer.name}</span>
						</div>
						<div className="flex gap-4">
							<div className="flex gap-2 md:w-32   items-center">
								{teamToLogo(scorer.team) ? (
									<Image
										alt="team-logo"
										className="h-6 w-6 rounded-full"
										src={require(`../../public/assets/${teamToLogo(
											scorer.team
										)}.jpg`)}></Image>
								) : (
									<span className="bg-white h-6 w-6 rounded-full text-gray-900 flex items-center justify-center font-bold ">
										{scorer.team[0]}
									</span>
								)}
								<span>{scorer.team}</span>
							</div>

							<span className="text-center md:w-16">{scorer.goals}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Scorer;
