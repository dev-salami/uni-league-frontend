import React from "react";
import { results, generateLeagueTable, teamToLogo } from "@/utils";
import axios from "axios";
import Image from "next/image";
import Table from "@/components/Table";

async function page() {
	const url = "https://uni-league.onrender.com/api/v1/stat/tables?season=6";
	const table = generateLeagueTable(results);
	const { data } = await axios.get(url);

	return (
		<div>
			<main className="flex justify-center pt-8 sm:text-base text-xs">
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
					{data.map((team, index) => (
						<Table
							key={index}
							team={team}
						/>
					))}
				</table>
			</main>
		</div>
	);
}

export default page;
