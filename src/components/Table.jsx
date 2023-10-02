"use client";
import { teamToLogo } from "@/utils";
import Image from "next/image";
import React from "react";

function Table({ team }) {
	return (
		<tbody
			key={team.name}
			className="text-xs">
			<tr>
				<td className="border border-gray-300 flex gap-2 items-center py-1 px-2">
					{team.name}
					{teamToLogo(team.name) ? (
						<Image
							alt="team-logo"
							className="h-6 w-6 rounded-full"
							src={require(`../../public/assets/${teamToLogo(
								team.name
							)}.jpg`)}></Image>
					) : (
						<span className="bg-white h-6 w-6 rounded-full text-gray-900 flex items-center justify-center font-bold ">
							{team.name[0]}
						</span>
					)}
				</td>
				<td className="border border-gray-300 py-1 px-2">{team.played}</td>
				<td className="border border-gray-300 py-1 px-2">{team.points}</td>
				<td className="border border-gray-300 py-1 px-2">{team.won}</td>
				<td className="border border-gray-300 py-1 px-2">{team.drawn}</td>
				<td className="border border-gray-300 py-1 px-2">{team.lost}</td>
				<td className="border border-gray-300 py-1 px-2">{team.goalsFor}</td>
				<td className="border border-gray-300 py-1 px-2">
					{team.goalsAgainst}
				</td>
			</tr>
		</tbody>
	);
}

export default Table;
