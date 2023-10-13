"use client";
import React, { useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import { GiRunningShoe } from "react-icons/gi";
import { IoIosFootball, IoMdCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import { FcCheckmark } from "react-icons/fc";
import axios from "axios";
import { formatDate, separateMatchesByDate, teamToLogo } from "@/utils";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineStadium } from "react-icons/md";

function EditResult() {
	const [resultModal, setresultModal] = useState(false);
	const [Data, setData] = useState([]);
	const [detailOpen, setdetailOpen] = useState("");
	const [Matchday, setMatchday] = useState(null);
	const [loading, setloading] = useState(false);
	const [Season, setSeason] = useState(null);

	const [FixtId, setFixtId] = useState("");
	const [loadingminus, setloadingminus] = useState(false);
	const url = `https://uni-league.onrender.com/api/v1/fixtures/get-season-matchday?season=${Season}&matchday=${Matchday}`;

	const getFixturesToEdit = () => {
		if (!Season || !Matchday) {
			toast.error("Select a Season and Matchday ");
		} else {
			setloading(true);

			axios
				.get(url)
				.then((res) => {
					console.log(res.data);
					setData(res.data);
					setloading(false);
					res.data.length === 0 && toast.error("No data found");
				})
				.catch((err) => {
					console.log(err);
					setloading(false);
					toast.error("Something went wrong");
				});
		}
	};

	const sortedMatches = separateMatchesByDate(Data);

	return (
		<div className="">
			{resultModal && (
				<SingleResult
					id={FixtId}
					match={Data?.find((match) => match._id === FixtId)}
					setresultModal={setresultModal}
				/>
			)}
			<section className="my-4">
				<div className="w-full pb-4 flex justify-center ">
					{loading && (
						<AiOutlineLoading3Quarters
							size={40}
							className="animate-spin"
						/>
					)}
				</div>
				<div className="mx-auto w-fit  ">
					<select
						className="rounded-t-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
						onChange={(e) => {
							setSeason(+e.target.value);
							// getResultBySeasonMatchday(e.target.value, 0, "season");
						}}
						name="season"
						id="season">
						<option value={null}>Select Season</option>

						{/* <option value="1">2017/2018</option>
						<option value="2">2018/2019</option>
						<option value="3">2019/2020</option>
						<option value="4">2020/2021</option>
						<option value="5">2021/2022</option> */}
						<option value="6">2022/2023</option>
					</select>
					<select
						className="rounded-t-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
						onChange={(e) => {
							setMatchday(+e.target.value);
							// getResultBySeasonMatchday(e.target.value, 0, "season");
						}}
						name="season"
						id="season">
						<option value={null}>Select Matchday</option>

						<option value="1">Matchday 1</option>
						<option value="2">Matchday 2</option>
						<option value="3">Matchday 3</option>
						<option value="4">Matchday 4</option>
						<option value="5">Matchday 5</option>
						<option value="6">Matchday 6</option>
						<option value="7">Matchday 7</option>
						<option value="8">Matchday 8</option>
						<option value="9">Matchday 9</option>
						<option value="10">Matchday 10</option>
						<option value="11">Matchday 11</option>
					</select>
					<button
						onClick={getFixturesToEdit}
						className="rounded-t-md px-4 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm">
						Fetch
					</button>
				</div>

				<main className="max-w-md text-xs sm:text-base mx-auto  border-l border-r">
					<hr className="border-t " />

					{Data === null && <div>Select Fixture To Edit</div>}

					<div>
						{Data.length > 0 && (
							<>
								{sortedMatches.map((matches, index) => (
									<div key={index}>
										<div>
											<hr className="border-t-2 " />

											<p className="text-center font-semibold py-2 bg-gray-500/40">
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
													</div>

													{match?.played === true ? (
														<FcCheckmark size={25} />
													) : (
														<button
															onClick={() => {
																setFixtId(match._id);
																setresultModal(true);
															}}>
															<BiSolidEdit />
														</button>
													)}

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

														{/* <div>
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
													</div> */}
													</div>
													<hr className="border-t" />
												</div>
												<div
													className={`${
														detailOpen ==
														index + match.awayTeam + match.homeTeam
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
		</div>
	);
}

export default EditResult;
