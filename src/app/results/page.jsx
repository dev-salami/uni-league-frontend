// "use client";
import React from "react";

// import axios from "axios";
import Result from "@/components/Result";
import axios from "axios";

async function Results() {
	const Season = 6;
	const Matchday = 4;

	// const Matches = sortMatchesByDateTime(matches);
	const seasonMatchdayUrl = `http://localhost:5000/api/v1/results/get-season-matchday?season=${Season}&matchday=${Matchday}`;
	const seasonUrl = `localhost:5000/api/v1/results/get-season-matchday?season=${Season}`;

	const { data } = await axios.get(seasonMatchdayUrl);

	return (
		<>
			<div>Link</div>
			<Result matches={data} />
		</>
	);
}

export default Results;
{
	//  <div className="flex rounded-xl border  justify-center gap-1 font-semibold w-1/5">
	// 						</div>
}
