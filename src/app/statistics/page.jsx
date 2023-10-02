import Assist from "@/components/Assist";
import Scorer from "@/components/Scorer";
import axios from "axios";
import React from "react";

async function page() {
	const url =
		"https://uni-league.onrender.com/api/v1/stat/top-scorer-assist?season=6";

	const { data } = await axios.get(url);

	return (
		<section className="container mx-auto px-4 mt-8 flex flex-col gap-6 ">
			<Scorer topGoalScorers={data.topGoalScorers} />
			<Assist topAssisters={data.topAssisters} />
		</section>
	);
}

export default page;
