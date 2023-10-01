"use client";
import React, { useState } from "react";
import { SingleFixtures } from "./SingleFixtures";
import { useSelector } from "react-redux";
import axios from "axios";

function CreateFixtures() {
	const [showCreateFixtures, setshowCreateFixtures] = useState(false);
	const { tempFixtures } = useSelector((state) => state.crud);
	const createFixtures = () => {
		axios
			.post("http://localhost:5000/api/v1/fixtures", tempFixtures)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<section>
			<div className="w-fit mx-auto">
				<button onClick={() => setshowCreateFixtures((prev) => !prev)}>
					Hide OR Show
				</button>
			</div>
			<div
				className={`${
					showCreateFixtures ? "h-0   bg-green-400" : "h-full"
				} duration-500 overflow-hidden`}>
				<SingleFixtures
					count="One"
					matchday={4}
				/>
				<SingleFixtures
					count="Two"
					matchday={4}
				/>
				<SingleFixtures
					count="Three"
					matchday={4}
				/>
				<SingleFixtures
					count="Four"
					matchday={4}
				/>
				<SingleFixtures
					count="Five"
					matchday={4}
				/>
				<SingleFixtures
					count="Six"
					matchday={4}
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
