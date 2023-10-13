import Fixtures from "@/components/Fixtures";
import axios from "axios";

async function Page() {
	const Season = 6;
	const Matchday = 4;

	const seasonMatchdayUrl = `https://uni-league.onrender.com/api/v1/fixtures/get-season-matchday?season=${Season}&matchday=${Matchday}`;

	const { data } = await axios.get(seasonMatchdayUrl);

	return (
		<div className="container mx-auto px-4">
			<Fixtures matches={data} />
		</div>
	);
}

export default Page;
