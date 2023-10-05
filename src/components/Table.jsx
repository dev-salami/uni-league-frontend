"use client";
import React, { useState } from "react";
import Image from "next/image";
import { teamToLogo } from "@/utils";
import axios from "axios";

function Table({ data }) {
	const [Season, setSeason] = useState(data);
	const getSeasonTable = (season) => {
		axios
			.get(`http://localhost:5000/api/v1/stat/tables?season=${season}`)
			.then((res) => {
				console.log(res.data.length);
				setSeason(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container mx-auto px-4">
			<main className="flex flex-col justify-center  pt-8 sm:text-base text-xs border-none">
				<select
					className="rounded-t-md px-2 py-1 bg-gray-200/80 w-fit mx-auto text-[#141625]  text-sm"
					onChange={(e) => {
						getSeasonTable(e.target.value);
					}}
					name="season"
					id="season">
					<option value="">Select Season</option>

					<option value="1">2017/2018</option>
					<option value="2">2018/2019</option>
					<option value="3">2019/2020</option>
					<option value="4">2020/2021</option>
					<option value="5">2021/2022</option>
					<option value="6">2022/2023</option>
				</select>
				<table className="border w-fit mx-auto border-gray-300 border-collapse">
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

					{Season?.map((team, index) => (
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
						// <Log
						// 	key={index}
						// 	team={team}
						// />
					))}
				</table>
			</main>
			{Season == 0 && (
				<div className="w-full text-center m-3 ">
					Table not available for this selected season
				</div>
			)}
		</div>
	);
}

export default Table;
