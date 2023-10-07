"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { MdCancel, MdDelete } from "react-icons/md";
import { teamToLogo } from "@/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { IoMdCheckmarkCircle } from "react-icons/io";

// const data = inputFieldsHome.map((field) => [field.Scorer, field.Assister]);
function SingleResult({ setresultModal, match }) {
	let EditedMatch = match;
	const [loading, setloading] = useState(false);

	const [homeTeamScore, sethomeTeamScore] = useState(
		match.homeTeamScore ? match.homeTeamScore : 0
	);
	const [awayTeamScore, setawayTeamScore] = useState(
		match.awayTeamScore ? match.awayTeamScore : 0
	);

	const [inputFieldsHome, setInputFieldsHome] = useState([
		{ Scorer: "", Assister: "" },
	]);

	const handleInputChange = (index, event) => {
		const values = [...inputFieldsHome];
		values[index][event.target.name] = event.target.value;
		setInputFieldsHome(values);
	};

	const handleAddFields = () => {
		setInputFieldsHome([...inputFieldsHome, { Scorer: "", Assister: "" }]);
	};

	const handleRemoveFields = (index) => {
		const values = [...inputFieldsHome];
		values.splice(index, 1);
		setInputFieldsHome(values);
	};

	const [inputFieldsAway, setInputFieldsAway] = useState([
		{ Scorer: "", Assister: "" },
	]);

	const handleInputChangeAway = (index, event) => {
		const values = [...inputFieldsAway];
		values[index][event.target.name] = event.target.value;
		setInputFieldsAway(values);
	};

	const handleAddFieldsAway = () => {
		setInputFieldsAway([...inputFieldsAway, { Scorer: "", Assister: "" }]);
	};

	const handleRemoveFieldsAway = (index) => {
		const values = [...inputFieldsAway];
		values.splice(index, 1);
		setInputFieldsAway(values);
	};
	const EditResult = () => {
		EditedMatch.homeTeamScorer = inputFieldsHome[0].Scorer
			? inputFieldsHome.map((field) => [field.Scorer, field.Assister])
			: [];

		EditedMatch.awayTeamScorer = inputFieldsAway[0].Scorer
			? inputFieldsAway.map((field) => [field.Scorer, field.Assister])
			: [];
		EditedMatch.homeTeamScore = homeTeamScore;
		EditedMatch.awayTeamScore = awayTeamScore;
		toast.loading("Loading");
		console.log(match);
		let updatedFixture = match;
		updatedFixture.played = true;
		// const {
		// 	homeTeam,
		// 	awayTeam,
		// 	venue,
		// 	time,
		// 	date,
		// 	matchday,
		// 	season,
		// 	homeTeamScorer,
		// 	awayTeamScorer,
		// 	homeTeamScore,
		// 	awayTeamScore,
		// } = updatedFixture;
		setloading(true);
		console.log(updatedFixture);

		axios
			.post("http://localhost:5000/api/v1/results", updatedFixture)
			.then((res) => {
				axios
					.patch(
						`http://localhost:5000/api/v1/fixtures/${match._id}`,
						updatedFixture
					)

					.then((res) => {
						toast.success("Result Successfully Edited");
						setloading(false);

						console.log(res);
						setTimeout(() => {
							setresultModal(false);
						}, 4000);
					})
					.catch((err) => {
						toast.error("Something went wrong");
						setloading(false);

						console.log(err);
					});
			})
			.catch((err) => {
				toast.error("Something went wrong");
				setloading(false);

				console.log(err);
			});
	};
	// const Submit = () => {
	// 	// console.log(...match);
	// 	// const data = {};
	// 	EditedMatch.homeTeamScorer = inputFieldsHome[0].Scorer
	// 		? inputFieldsHome.map((field) => [field.Scorer, field.Assister])
	// 		: [];

	// 	EditedMatch.awayTeamScorer = inputFieldsAway[0].Scorer
	// 		? inputFieldsAway.map((field) => [field.Scorer, field.Assister])
	// 		: [];
	// 	EditedMatch.homeTeamScore = homeTeamScore;
	// 	EditedMatch.awayTeamScore = awayTeamScore;

	// 	console.log(EditedMatch);
	// };
	return (
		<section className="inset-0 z-50 flex-col  fixed bg-black/80 flex justify-center items-center">
			<div className="w-full pb-4 flex justify-center ">
				{loading && (
					<AiOutlineLoading3Quarters
						size={40}
						className="animate-spin"
					/>
				)}
			</div>
			<main className="relative p-4 bg-[#141625] flex md:flex-row items-center md:items-start flex-col gap-6 max-w-xl w-full mx-auto ">
				<MdCancel
					onClick={() => setresultModal(false)}
					size={40}
					className="cursor-pointer absolute -top-5
				-right-5"
				/>

				<Toaster
					theme="dark"
					position="top-right"
					richColors
				/>
				<div className="flex flex-col   md:w-1/2">
					<div className="flex justify-around mb-3">
						<div className="border border-gray-300 flex gap-2 items-center py-1 px-2">
							{match?.homeTeam}
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
						<select
							onChange={(e) => sethomeTeamScore(+e.target.value)}
							className=" w-16 relative cursor-default rounded-md bg-gray-500 py-[2px] px-2 mx-4   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
							id="home">
							<option value="0"> 0</option>

							<option value="1"> 1</option>
							<option value="2"> 2</option>
							<option value="3"> 3</option>
							<option value="4"> 4</option>
							<option value="5"> 5</option>
							<option value="6"> 6</option>
							<option value="7"> 7</option>
							<option value="8"> 8</option>
							<option value="9"> 9</option>
							<option value="10"> 10</option>
							<option value="11"> 11</option>
						</select>
					</div>

					<form className="flex flex-col justify-center  gap-4">
						{inputFieldsHome.map((inputField, index) => (
							<div
								className="flex items-center gap-4"
								key={index}>
								<div className="flex flex-col gap-2">
									<input
										className="relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
										type="text"
										name="Scorer"
										value={inputField.Scorer}
										onChange={(event) => handleInputChange(index, event)}
										placeholder="Goal Scorer"
									/>
									<input
										className="relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
										type="text"
										name="Assister"
										value={inputField.Assister}
										onChange={(event) => handleInputChange(index, event)}
										placeholder="Assister"
									/>
								</div>
								<button
									type="button"
									onClick={() => handleRemoveFields(index)}>
									<MdDelete size={30} />
								</button>
							</div>
						))}
						<button
							type="button"
							onClick={handleAddFields}>
							Add More
						</button>
					</form>
				</div>
				<div className=" flex flex-col  md:w-1/2">
					<div className="flex justify-around mb-3">
						<div className="border border-gray-300 flex gap-2 items-center py-1 px-2">
							{match?.awayTeam}
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
						<select
							onChange={(e) => setawayTeamScore(+e.target.value)}
							className=" w-16 relative cursor-default rounded-md bg-gray-500 py-[2px] px-2 mx-4   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
							id="away">
							<option value="0"> 0</option>

							<option value="1"> 1</option>
							<option value="2"> 2</option>
							<option value="3"> 3</option>
							<option value="4"> 4</option>
							<option value="5"> 5</option>
							<option value="6"> 6</option>
							<option value="7"> 7</option>
							<option value="8"> 8</option>
							<option value="9"> 9</option>
							<option value="10"> 10</option>
							<option value="11"> 11</option>
						</select>
					</div>

					<form className="flex flex-col justify-center  gap-4">
						{inputFieldsAway.map((inputField, index) => (
							<div
								className="flex items-center gap-4"
								key={index}>
								<div className="flex flex-col gap-2">
									<input
										className="relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
										type="text"
										name="Scorer"
										value={inputField.Scorer}
										onChange={(event) => handleInputChangeAway(index, event)}
										placeholder="Goal Scorer"
									/>
									<input
										className="relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
										type="text"
										name="Assister"
										value={inputField.Assister}
										onChange={(event) => handleInputChangeAway(index, event)}
										placeholder="Assister"
									/>
								</div>
								<button
									type="button"
									onClick={() => handleRemoveFieldsAway(index)}>
									<MdDelete size={30} />
								</button>
							</div>
						))}
						<button
							type="button"
							onClick={handleAddFieldsAway}>
							Add More
						</button>
					</form>
				</div>
			</main>

			<button
				onClick={EditResult}
				className="w-fit px-4 py-1 bg-blue-400">
				Edit Result
			</button>
		</section>
	);
}

export default SingleResult;
