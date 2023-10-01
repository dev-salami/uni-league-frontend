import React from "react";
import { results, generateLeagueTable } from "@/utils";

function page() {
	const table = generateLeagueTable(results);
	return (
		<div>
			<main className="flex justify-center items-center text-center sm:text-base text-xs">
				<table className="border border-gray-300 border-collapse">
					<thead>
						<tr className="font-semibold ">
							<th className="border  py-1 px-2">TEAM</th>
							<th className="border  py-1 px-2">Played</th>
							<th className="border  py-1 px-2">Points </th>
							<th className="border  py-1 px-2">Win</th>
							<th className="border  py-1 px-2">Draw</th>
							<th className="border  py-1 px-2">Loss </th>
							<th className="border  py-1 px-2">GF </th>
							<th className="border  py-1 px-2">GA</th>
						</tr>
					</thead>
					{table.map((team) => (
						<tbody
							key={team.name}
							className="text-sm">
							<tr>
								<td className="border border-gray-300 py-1 px-2">
									{team.name}
								</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.played}
								</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.points}
								</td>
								<td className="border border-gray-300 py-1 px-2">{team.won}</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.drawn}
								</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.lost}
								</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.goalsFor}
								</td>
								<td className="border border-gray-300 py-1 px-2">
									{team.goalsAgainst}
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</main>
		</div>
	);
}

export default page;
