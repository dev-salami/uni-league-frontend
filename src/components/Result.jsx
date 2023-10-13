"use client";
import { formatDate, separateMatchesByDate, teamToLogo } from "@/utils";
import { useState } from "react";
import { MdOutlineStadium } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import axios from "axios";

function Result({ matches }) {
	const [detailOpen, setdetailOpen] = useState("");
	const [Matchday, setMatchday] = useState(4);
	const [error, seterror] = useState(false);
	const [Season, setSeason] = useState(6);

	const [loadingplus, setloadingplus] = useState(false);
	const [loadingminus, setloadingminus] = useState(false);

	const [selectedMatchday, setselectedMatchday] = useState([...matches]);

	const getResultBySeasonMatchday = (season, value, button) => {
		const newMatchday = Matchday + value;
		let selectedSeason;
		if (button === "season") {
			selectedSeason = +season;
		} else {
			selectedSeason = Season;
		}
		if (newMatchday >= 1 && newMatchday <= 11) {
			button === "minus" && setloadingminus(true);
			button === "plus" && setloadingplus(true);
			axios
				.get(
					`https://uni-league.onrender.com/api/v1/results/get-season-matchday?season=${selectedSeason}&matchday=${newMatchday}`
				)
				.then((res) => {
					setselectedMatchday(res.data);
					button === "minus" && setloadingminus(false);
					button === "plus" && setloadingplus(false);
					if (button === "plus" || button === "minus") {
						setMatchday(newMatchday);
					}

					console.log(res);
				})
				.catch((err) => {
					seterror(true);
					button === "minus" && setloadingminus(false);
					button === "plus" && setloadingplus(false);

					setTimeout(() => {
						seterror(false);
					}, 4000);
				});
		}
	};
	const sortedMatches = separateMatchesByDate(selectedMatchday);

	return (
		<section className="my-4">
			<div className="mx-auto w-fit  ">
				{error && (
					<span className="text-xl p-2 text-red-500 font-bold uppercase ">
						An error occured
					</span>
				)}
				<select
					defaultValue="6"
					className="rounded-t-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
					onChange={(e) => {
						setSeason(+e.target.value);
						getResultBySeasonMatchday(e.target.value, 0, "season");
					}}
					name="season"
					id="season">
					{/* <option value="1">2017/2018</option>
					<option value="2">2018/2019</option>
					<option value="3">2019/2020</option>
					<option value="4">2020/2021</option>
					<option value="5">2021/2022</option> */}
					<option value="6">2022/2023</option>
				</select>
			</div>

			<main className="max-w-md text-xs sm:text-base mx-auto  border-l border-r">
				<hr className="border-t " />
				<div className="flex justify-between p-4 ">
					<button className="">
						{loadingminus ? (
							<AiOutlineLoading3Quarters className="animate-spin" />
						) : (
							<BsFillArrowLeftCircleFill
								onClick={() => getResultBySeasonMatchday(6, -1, "minus")}
								size={30}
							/>
						)}
					</button>
					{/* <span className=" text-xl font-semibold">{`Gameweek ${sortedMatches[0][0].matchday}`}</span> */}
					<span className=" text-xl font-semibold">{`Gameweek ${Matchday}`}</span>

					<button className="">
						{loadingplus ? (
							<AiOutlineLoading3Quarters className="animate-spin" />
						) : (
							<BsFillArrowRightCircleFill
								onClick={() => getResultBySeasonMatchday(6, +1, "plus")}
								size={30}
							/>
						)}
					</button>
				</div>

				<hr className="border-t " />

				<div>
					{selectedMatchday.length === 0 ? (
						<div className="w-fit mx-auto">
							<span className=" text-xl my-4 font-bold text-center">
								No Result for this selected SEASON and GAMEWEEK
							</span>
							<hr className="border-t " />
						</div>
					) : (
						<>
							{sortedMatches.map((matches, index) => (
								<div key={index}>
									<div>
										<hr className="border-t-2 " />

										<p className="text-center font-semibold py-2 bg-gray-500/40">
											{/* {sortedMatches[index].map((match, index) => (
										<p key={index}>{match.date}</p>
									))} */}
											{formatDate(sortedMatches[index][0].date)}
										</p>
										<hr className="border-t-2 " />
									</div>
									{sortedMatches[index].map((match, index) => (
										<div key={index}>
											<hr className="border-t " />
											<div className="  px-4 flex gap-4 mb-2 mt-4   w-full  ">
												<div className="flex flex-col items-end justify-start h-fit  w-2/5    text-sm">
													<div className="flex gap-2 items-center">
														<span>{match.homeTeam}</span>
														{teamToLogo(match.homeTeam) ? (
															<Image
																alt="team-logo"
																className="h-6 w-6 rounded-full"
																src={require(`../../public/assets/${teamToLogo(
																	match.homeTeam
																)}.jpg`)}></Image>
														) : (
															<span className="bg-white h-6 w-6 rounded-full text-gray-900 flex items-center justify-center font-bold ">
																{match.homeTeam[0]}
															</span>
														)}
													</div>

													<div>
														{match.homeTeamScorer?.map((scorer, index) => (
															<div
																className="flex gap-4 text-xs mt-2"
																key={index}>
																{scorer[0] && (
																	<span className="flex gap-2 items-center">
																		<IoIosFootball />
																		{scorer[0]}
																	</span>
																)}
																{scorer[1] && (
																	<span className="flex gap-2 items-center">
																		<GiRunningShoe />
																		{scorer[1]}
																	</span>
																)}
															</div>
														))}
													</div>
												</div>
												<div
													onClick={() =>
														detailOpen ==
														index + match.awayTeam + match.homeTeam
															? setdetailOpen(100)
															: setdetailOpen(
																	index + match.awayTeam + match.homeTeam
															  )
													}
													className="flex rounded-xl border h-fit justify-center gap-1 font-semibold w-1/5">
													<span>{match.homeTeamScore}</span>
													<span> - </span>
													<span>{match.awayTeamScore}</span>
												</div>
												<div className="flex flex-col items-start justify-start h-fit  w-2/5    text-sm">
													<div className="flex flex-row-reverse gap-2">
														<span>{match.awayTeam}</span>
														{teamToLogo(match.awayTeam) ? (
															<Image
																alt="team-logo"
																className="h-6 w-6 rounded-full"
																src={require(`../../public/assets/${teamToLogo(
																	match.awayTeam
																)}.jpg`)}></Image>
														) : (
															<span className="bg-white h-6 w-6 rounded-full text-gray-900 flex items-center justify-center font-bold ">
																{match.awayTeam[0]}
															</span>
														)}
													</div>

													<div>
														{match.awayTeamScorer?.map((scorer, index) => (
															<div
																className="flex gap-4  text-xs mt-2"
																key={index}>
																{scorer[0] && (
																	<span className="flex gap-2 items-center">
																		<IoIosFootball />
																		{scorer[0]}
																	</span>
																)}
																{scorer[1] && (
																	<span className="flex gap-2 items-center">
																		<GiRunningShoe />
																		{scorer[1]}
																	</span>
																)}
															</div>
														))}
													</div>
												</div>
												<hr className="border-t" />
											</div>
											<div
												className={`${
													detailOpen == index + match.awayTeam + match.homeTeam
														? "h-16 w-full"
														: "h-0"
												} duration-500  overflow-hidden`}>
												<div className="flex flex-col  items-center -ml-2  w-full">
													<span> {match.date} </span>
													<span className=" flex gap-2 items-center">
														<MdOutlineStadium size={25} /> {match.venue}
													</span>
												</div>
											</div>
										</div>
									))}
									<hr className="border-t " />
								</div>
							))}
						</>
					)}
				</div>
			</main>
		</section>
	);
}

export default Result;
