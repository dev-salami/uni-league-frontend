// "use client";
import React from "react";
import Result from "@/components/Result";
import axios from "axios";

async function Results() {
	const Season = 6;
	const Matchday = 4;

	// const Matches = sortMatchesByDateTime(matches);
	const seasonMatchdayUrl = `https://uni-league.onrender.com/api/v1/results/get-season-matchday?season=${Season}&matchday=${Matchday}`;

	const { data } = await axios.get(seasonMatchdayUrl);

	return (
		<>
			<Result matches={data} />
		</>
	);
}

export default Results;
