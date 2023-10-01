export const teams = [
	{ id: 0, avatar: "", name: "Select Team" },

	{ id: 1, avatar: "zeus", name: "Zeus FC" },
	{ id: 2, avatar: "blazing", name: "Blazing Stars" },
	{ id: 3, avatar: "marine", name: "Marine FC" },
	{ id: 4, avatar: "reagles", name: "Real Eagles " },
	{ id: 5, avatar: "cityboys", name: "City Boys FC" },
	{ id: 6, avatar: "jad", name: "Jad FC" },
	{ id: 7, avatar: "aztec", name: "D'Aztec FC" },
	{ id: 8, avatar: "", name: "Leeds FC" },
	{ id: 9, avatar: "", name: "Skills FC" },
	{ id: 10, avatar: "", name: "Emirates FC" },
	{ id: 11, avatar: "", name: "H-high FC" },
	{ id: 12, avatar: "", name: "All Stars FC" },
];

export const teamToLogo = (teamName) => {
	const Team = teams.find((team) => team.name === teamName);

	return Team?.avatar;
};
export const venue = [
	{ id: 0, name: "Select Venue" },
	{ id: 1, name: "Main Bowl" },
	{ id: 2, name: "Maracana 1" },
	{ id: 3, name: "Maracana 2" },
];

export const generateLeagueTable = (results) => {
	// Create an empty object to store team data
	const teams = {};

	// Loop through each match in the results array
	results.forEach((match) => {
		const { homeTeam, awayTeam, homeScore, awayScore } = match;

		// Initialize team data if not already present
		if (!teams[homeTeam]) {
			teams[homeTeam] = {
				name: homeTeam,
				points: 0,
				played: 0,
				won: 0,
				drawn: 0,
				lost: 0,
				goalsFor: 0,
				goalsAgainst: 0,
			};
		}
		if (!teams[awayTeam]) {
			teams[awayTeam] = {
				name: awayTeam,
				points: 0,
				played: 0,
				won: 0,
				drawn: 0,
				lost: 0,
				goalsFor: 0,
				goalsAgainst: 0,
			};
		}

		// Update team statistics based on match results
		teams[homeTeam].played++;
		teams[awayTeam].played++;

		teams[homeTeam].goalsFor += homeScore;
		teams[awayTeam].goalsFor += awayScore;

		teams[homeTeam].goalsAgainst += awayScore;
		teams[awayTeam].goalsAgainst += homeScore;

		if (homeScore > awayScore) {
			teams[homeTeam].won++;
			teams[homeTeam].points += 3;
			teams[awayTeam].lost++;
		} else if (homeScore < awayScore) {
			teams[awayTeam].won++;
			teams[awayTeam].points += 3;
			teams[homeTeam].lost++;
		} else {
			teams[homeTeam].drawn++;
			teams[homeTeam].points++;
			teams[awayTeam].drawn++;
			teams[awayTeam].points++;
		}
	});

	// Convert the teams object into an array and sort by points and goal difference
	const leagueTable = Object.values(teams).sort((a, b) => {
		if (a.points === b.points) {
			return b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);
		}
		return b.points - a.points;
	});

	return leagueTable;
};

export const results = [
	{ homeTeam: "Team A", awayTeam: "Team B", homeScore: 2, awayScore: 1 },
	{ homeTeam: "Team C", awayTeam: "Team A", homeScore: 0, awayScore: 0 },
	// Add more match results here...
];
export const matches = [
	{
		homeTeam: "Jad FC",
		awayTeam: "Marine FC",
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
		homeTeam: "Zeus FC",
		awayTeam: "Blazing Stars",
		venue: "Old Trafford",
		time: "18.00",
		date: "2023-09-29",
		matchday: 4,
		homeTeamScore: 0,
		awayTeamScore: 3,
	},
	{
		homeTeam: "Blazing Stars",
		awayTeam: "Marine FC",
		venue: "Old Trafford",
		time: "18.00",
		date: "2023-09-29",
		matchday: 4,
		homeTeamScore: 1,
		awayTeamScore: 2,
	},
	{
		homeTeam: "Marine FC",
		awayTeam: "Real Eagles",
		venue: "Old Trafford",
		time: "18.00",
		date: "2023-07-29",
		matchday: 4,
		homeTeamScore: 3,
		awayTeamScore: 1,
	},
	{
		homeTeam: "Real Eagles",
		awayTeam: "City Boys FC",
		venue: "Old Trafford",
		time: "18.00",
		date: "2023-09-29",
		matchday: 4,
		homeTeamScore: 1,
		awayTeamScore: 1,
	},
	{
		homeTeam: "City Boys FC",
		awayTeam: "Jad FC",
		venue: "Old Trafford",
		time: "18.00",
		date: "2023-08-29",
		matchday: 4,
		homeTeamScore: 2,
		awayTeamScore: 2,
	},
];
export const sortMatchesByDateTime = (matches) => {
	matches.sort((a, b) => {
		const dateA = new Date(a.date);
		const dateB = new Date(b.date);

		if (dateA < dateB) {
			return -1;
		} else if (dateA > dateB) {
			return 1;
		} else {
			const timeA = parseFloat(a.time);
			const timeB = parseFloat(b.time);

			if (timeA < timeB) {
				return -1;
			} else if (timeA > timeB) {
				return 1;
			} else {
				return 0;
			}
		}
	});

	return matches;
};

export const isDateInPast = (dateString) => {
	const inputDate = new Date(dateString);

	const currentDate = new Date();

	return inputDate.getTime() < currentDate.getTime();
};
export const separateMatchesByDate = (matches) => {
	// Create an object to store matches grouped by date
	const matchesByDate = {};

	// Iterate through the matches and group them by date
	matches.forEach((match) => {
		const date = match.date;

		if (!matchesByDate[date]) {
			matchesByDate[date] = [];
		}

		matchesByDate[date].push(match);
	});

	// Convert the grouped matches object to an array
	const groupedMatches = Object.values(matchesByDate);

	return groupedMatches;
};

export const formatDate = (inputDate) => {
	// Create a JavaScript Date object from the input date string
	const date = new Date(inputDate);

	// Define arrays for ordinal numbers and day names
	const ordinals = ["th", "st", "nd", "rd"];
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// Get the day of the month, day of the week, and month
	const dayOfMonth = date.getDate();
	const dayOfWeek = date.getDay();
	const monthName = months[date.getMonth()];

	// Get the ordinal suffix for the day of the month
	let ordinalSuffix;
	if (dayOfMonth >= 11 && dayOfMonth <= 13) {
		ordinalSuffix = "th";
	} else {
		ordinalSuffix = ordinals[dayOfMonth % 10] || "th";
	}

	// Get the day name
	const dayName = daysOfWeek[dayOfWeek];

	// Get the year
	const year = date.getFullYear();

	// Assemble the formatted date string
	const formattedDate = `${dayOfMonth}${ordinalSuffix} ${dayName}, ${monthName} ${year}`;

	return formattedDate;
};

export const getTopScorersAndAssisters = (matches) => {
	const playerStats = {}; // Object to store player statistics

	// Iterate through each match
	matches.forEach((match) => {
		// Process home team scorers and assisters
		match.homeTeamScorer.forEach(([goalScorer, assister]) => {
			if (!playerStats[goalScorer]) {
				playerStats[goalScorer] = {
					goals: 0,
					assists: 0,
					team: match.homeTeam,
				};
			}
			playerStats[goalScorer].goals += 1;

			if (assister) {
				if (!playerStats[assister]) {
					playerStats[assister] = {
						goals: 0,
						assists: 0,
						team: match.homeTeam,
					};
				}
				playerStats[assister].assists += 1;
			}
		});

		// Process away team scorers and assisters
		match.awayTeamScorer.forEach(([goalScorer, assister]) => {
			if (!playerStats[goalScorer]) {
				playerStats[goalScorer] = {
					goals: 0,
					assists: 0,
					team: match.awayTeam,
				};
			}
			playerStats[goalScorer].goals += 1;

			if (assister) {
				if (!playerStats[assister]) {
					playerStats[assister] = {
						goals: 0,
						assists: 0,
						team: match.awayTeam,
					};
				}
				playerStats[assister].assists += 1;
			}
		});
	});

	// Convert the playerStats object into an array
	const playerStatsArray = Object.entries(playerStats).map(([name, stats]) => ({
		name,
		team: stats.team,
		goals: stats.goals,
		assists: stats.assists,
	}));

	// Sort the playerStatsArray to get the top goal scorers and top assisters
	const topGoalScorers = playerStatsArray
		.sort((a, b) => b.goals - a.goals || b.assists - a.assists)
		.filter((player) => player.goals > 0); // Filter out players with no goals

	const topAssisters = playerStatsArray
		.sort((a, b) => b.assists - a.assists || b.goals - a.goals)
		.filter((player) => player.assists > 0); // Filter out players with no assists

	return { topGoalScorers, topAssisters };
};

//   const { topGoalScorers, topAssisters } = getTopScorersAndAssisters(matches);

//   console.log("Top Goal Scorers:", topGoalScorers);
//   console.log("Top Assisters:", topAssisters);
