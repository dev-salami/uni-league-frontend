import { getTopScorersAndAssisters } from "@/utils";
import React from "react";

function page() {
	const matches = [
		{
			homeTeam: "Chelsea",
			awayTeam: "Arsenal",
			homeTeamScorer: [
				["Layi", "Bunmi"],
				["Bello", "Layi"],
			],
			awayTeamScorer: [["David", "Lamine"]],
			venue: "Old Trafford",
			time: "18.00",
			date: "2023-09-29",
			matchday: 4,
			homeTeamScore: 2,
			awayTeamScore: 1,
		},
		{
			homeTeam: "Arsenal",
			awayTeam: "Chelsea",
			homeTeamScorer: [
				["Layi", "Bunmi"],
				["Layi", "Kunle"],
			],
			awayTeamScorer: [["David", "Lamine"]],
			venue: "Old Trafford",
			time: "18.00",
			date: "2023-09-29",
			matchday: 4,
			homeTeamScore: 2,
			awayTeamScore: 1,
		},
	];
	const { topGoalScorers, topAssisters } = getTopScorersAndAssisters(matches);

	console.log("Top Goal Scorers:", topGoalScorers);
	console.log("Top Assisters:", topAssisters);
	return <div>page</div>;
}

export default page;
