import React from "react";
import { results, generateLeagueTable } from "@/utils";
import axios from "axios";
import Table from "@/components/Table";

async function page() {
	const url = "https://uni-league.onrender.com/api/v1/stat/tables?season=6";
	const table = generateLeagueTable(results);
	const { data } = await axios.get(url);

	return (
		<div>
			<Table data={data} />
		</div>
	);
}

export default page;
