"use client";
import React, { useEffect, useState } from "react";
import { SingleFixtures } from "./SingleFixtures";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { deleteFixtures } from "@/redux/features/crudSlice";

function CreateFixtures() {
	const [Season, setSeason] = useState(null);
	const dispatch = useDispatch();
	const [Matchday, setMatchday] = useState(null);

	const { tempFixtures } = useSelector((state) => state.crud);

	const createFixtures = () => {
		toast.loading("Loading");
		if (tempFixtures.length === 1) {
			axios
				.post("https://uni-league.onrender.com/api/v1/fixtures", tempFixtures)
				.then((res) => {
					toast.success("Fixtures Successfully Created");
					console.log(res);
					dispatch(deleteFixtures());
				})
				.catch((err) => {
					toast.error("Something went wrong");

					console.log(err);
					dispatch(deleteFixtures());
				});
		} else if (!Season || !Matchday) {
			toast.error("Select a season and matchday");
		} else {
			toast.error("Fixtures not complete");
		}
	};
	return (
		<section>
			<div className="flex gap-4 justify-center">
				<button onClick={() => dispatch(deleteFixtures())}>TTTTTT</button>
				<select
					className="rounded-md px-2 py-1 bg-gray-200/80 text-[#141625] mx-3 text-sm"
					onChange={(e) => {
						dispatch(deleteFixtures());
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
						dispatch(deleteFixtures());
						setMatchday(+e.target.value);
					}}
					name="matchday"
					id="matchday">
					<option value="">Select Matchday</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="11">11</option>
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
			</div>
		</section>
	);
}

export default CreateFixtures;
