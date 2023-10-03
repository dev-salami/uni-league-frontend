"use client";
import React, { useEffect, useState } from "react";
import { SingleFixtures } from "./SingleFixtures";
import { useSelector } from "react-redux";
import axios from "axios";

function CreateFixtures() {
	const [Success, setSuccess] = useState(false);
	const [Error, setError] = useState(false);
	const [Season, setSeason] = useState(null);
	const [Matchday, setMatchday] = useState(null);
	const [loading, setloading] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:5000/api/v1/fixtures/get-CurrentSeasonAndMatchday")
	// 		.then((res) => {
	// 			console.log(res.data);

	// 			setSeason(res.data.currentSeason);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	const { tempFixtures } = useSelector((state) => state.crud);
	const createFixtures = () => {
		setloading(true);
		axios
			.post("https://uni-league.onrender.com/api/v1/fixtures", tempFixtures)
			.then((res) => {
				setSuccess(true);
				setloading(false);

				console.log(res);
				setTimeout(() => {
					setSuccess(false);
					window.location.reload();
				}, 4000);
			})
			.catch((err) => {
				setError(true);
				setloading(false);

				console.log(err);
				setTimeout(() => {
					window.location.reload();
					setError(false);
				}, 4000);
			});
	};
	return (
		<section>
			<div className="flex gap-4 justify-center">
				<select
					className="rounded-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
					onChange={(e) => {
						setSeason(+e.target.value);
					}}
					name="season"
					id="season">
					<option value="">Select Season</option>

					<option value="1">2017/2018</option>
					<option value="2">2018/2019</option>
					<option value="3">2019/2020</option>
					<option value="4">2020/2021</option>
					<option value="5">2021/2022</option>
					<option value="6">2022/2023</option>
				</select>
				<select
					className="rounded-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
					onChange={(e) => {
						setMatchday(+e.target.value);
					}}
					name="matchday"
					id="matchday">
					<option value="">Select Matchday</option>
					<option value="11">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>
			<div>
				<SingleFixtures
					count="One"
					season={Season}
					matchday={Matchday}
				/>
				<SingleFixtures
					count="Two"
					season={Season}
					matchday={Matchday}
				/>
				<SingleFixtures
					count="Three"
					season={Season}
					matchday={Matchday}
				/>
				<SingleFixtures
					count="Four"
					season={Season}
					matchday={Matchday}
				/>
				<SingleFixtures
					count="Five"
					season={Season}
					matchday={Matchday}
				/>
				<SingleFixtures
					count="Six"
					season={Season}
					matchday={Matchday}
				/>
				<div className="w-fit mx-auto my-4">
					<button
						className="bg-gray-800/80 rounded-md px-4 py-1"
						onClick={createFixtures}>
						Create Fixtures
					</button>
				</div>
				<div className="w-fit mx-auto my-4 text-center">
					{Success && (
						<p className="font-semibold text-green-500">
							Fixtures Successfully Created
						</p>
					)}
					{Error && (
						<p className="font-semibold text-red-500">An Error Occured</p>
					)}
					{loading && <p className="font-semibold text-white">Loading</p>}
				</div>
			</div>
		</section>
	);
}

export default CreateFixtures;
