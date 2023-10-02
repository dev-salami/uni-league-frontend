import CreateFixtures from "@/components/CreateFixtures";
import Fixtures from "@/components/Fixtures";
import axios from "axios";

async function Page() {
	const Season = 6;
	const Matchday = 4;

	const seasonMatchdayUrl = `https://uni-league.onrender.com/api/v1/fixtures/get-season-matchday?season=${Season}&matchday=${Matchday}`;
	const seasonUrl = `localhost:5000/api/v1/fixtures/get-season-matchday?season=${Season}`;

	const { data } = await axios.get(seasonMatchdayUrl);
	// console.log(data);

	return (
		<div className="container mx-auto px-4">
			<Fixtures matches={data} />
			<CreateFixtures />
		</div>
	);
}

export default Page;
