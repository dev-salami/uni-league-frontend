// "use client";
// // import { generateLeagueTable } from "@/utils";
// // import { Listbox } from "@headlessui/react";
// // import { teams } from "../utils.js";
// // import { useState } from "react";

// // export default function Home() {
// // 	const results = [
// // 		{ homeTeam: "Team A", awayTeam: "Team B", homeScore: 2, awayScore: 1 },
// // 		{ homeTeam: "Team C", awayTeam: "Team A", homeScore: 0, awayScore: 0 },
// // 		// Add more match results here...
// // 	];
// // 	const [selectedPerson, setSelectedPerson] = useState(teams[0]);

// // 	return (
// // 		<div className="bg-blue-500 rounded-sm px-4 py-2 w-fit">
// // 			<Listbox
// // 				value={selectedPerson}
// // 				onChange={setSelectedPerson}>
// // 				<Listbox.Button>{selectedPerson.name}</Listbox.Button>
// // 				<Listbox.Options>
// // 					{teams.map((person) => (
// // 						<Listbox.Option
// // 							key={person.id}
// // 							value={person}
// // 							disabled={person.unavailable}>
// // 							{person.name}
// // 						</Listbox.Option>
// // 					))}
// // 				</Listbox.Options>
// // 			</Listbox>
// // 		</div>
// // 	);
// // }
// import { teams, venue } from "../utils.js";

// import { Fragment, useEffect, useState } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// // import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
// 	const [Team1B, setTeam1B] = useState(teams[0]);
// 	const [selected, setSelected] = useState(teams[0]);
// 	const [Venue, setVenue] = useState(venue[0]);
// 	const [Date, setDate] = useState("");
// 	const [Time, setTime] = useState("");

// 	useEffect(() => {
// 		if (
// 			Team1B &&
// 			selected &&
// 			Venue &&
// 			Team1B.id !== 0 &&
// 			selected.id !== 0 &&
// 			Venue.id !== 0
// 		) {
// 			console.log({
// 				homeTeam: selected.name,
// 				awayTeam: Team1B.name,
// 				homeScore: "",
// 				awayScore: "",
// 				venue: Venue.name,
// 				time: Time,
// 				date: Date,
// 				matchday: "4",
// 			});
// 		}
// 	}, [Team1B, selected, Venue]);

// 	return (
// 		<main className="flex flex-wrap gap-4 justify-center items-center ">
// 			<p className="text-xl font-bold"> FIXTURES ONE</p>
// 			<section className="flex  gap-4 items-center">
// 				<div className="w-40 ">
// 					<Listbox
// 						value={selected}
// 						onChange={setSelected}>
// 						{({ open }) => (
// 							<>
// 								<div className="relative ">
// 									<Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-700/40 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
// 										<span className="flex items-center">
// 											{/* <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 											<span className="ml-3 block ">{selected.name}</span>
// 										</span>
// 										<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
// 											{/* <ChevronUpDownIcon
// 						className="h-5 w-5 text-gray-400"
// 						aria-hidden="true"
// 					/> */}
// 										</span>
// 									</Listbox.Button>

// 									<Transition
// 										show={open}
// 										as={Fragment}
// 										leave="transition ease-in duration-100"
// 										leaveFrom="opacity-100"
// 										leaveTo="opacity-0">
// 										<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-700/40 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
// 											{teams.map((person) => (
// 												<Listbox.Option
// 													key={person.id}
// 													className={({ active }) =>
// 														classNames(
// 															active
// 																? "bg-indigo-600 text-white"
// 																: "text-gray-200",
// 															"relative cursor-default select-none py-2 pl-3 pr-9"
// 														)
// 													}
// 													value={person}>
// 													{({ selected, active }) => (
// 														<>
// 															<div className="flex items-center">
// 																{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 																<span
// 																	className={classNames(
// 																		selected ? "font-semibold" : "font-normal",
// 																		"ml-3 block "
// 																	)}>
// 																	{person.name}
// 																</span>
// 															</div>

// 															{selected ? (
// 																<span
// 																	className={classNames(
// 																		active ? "text-white" : "text-indigo-600",
// 																		"absolute inset-y-0 right-0 flex items-center pr-4"
// 																	)}>
// 																	{" "}
// 																	{/* <CheckIcon
// 												className="h-5 w-5"
// 								aria-hidden="true"
// 											/> */}
// 																</span>
// 															) : null}
// 														</>
// 													)}
// 												</Listbox.Option>
// 											))}
// 										</Listbox.Options>
// 									</Transition>
// 								</div>
// 							</>
// 						)}
// 					</Listbox>
// 				</div>

// 				<span className="text-xl font-bold"> VS </span>
// 				<div className="w-40">
// 					<Listbox
// 						value={Team1B}
// 						onChange={setTeam1B}>
// 						{({ open }) => (
// 							<>
// 								<div className="relative ">
// 									<Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-700/40 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
// 										<span className="flex items-center">
// 											{/* <img src={Team1B.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 											<span className="ml-3 block ">{Team1B.name}</span>
// 										</span>
// 										<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
// 											{/* <ChevronUpDownIcon
// 									className="h-5 w-5 text-gray-400"
// 									aria-hidden="true"
// 								/> */}
// 										</span>
// 									</Listbox.Button>

// 									<Transition
// 										show={open}
// 										as={Fragment}
// 										leave="transition ease-in duration-100"
// 										leaveFrom="opacity-100"
// 										leaveTo="opacity-0">
// 										<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-700/40 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
// 											{teams.map((person) => (
// 												<Listbox.Option
// 													key={person.id}
// 													className={({ active }) =>
// 														classNames(
// 															active
// 																? "bg-indigo-600 text-white"
// 																: "text-gray-200",
// 															"relative cursor-default select-none py-2 pl-3 pr-9"
// 														)
// 													}
// 													value={person}>
// 													{({ Team1B, active }) => (
// 														<>
// 															<div className="flex items-center">
// 																{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 																<span
// 																	className={classNames(
// 																		Team1B ? "font-semibold" : "font-normal",
// 																		"ml-3 block "
// 																	)}>
// 																	{person.name}
// 																</span>
// 															</div>

// 															{Team1B ? (
// 																<span
// 																	className={classNames(
// 																		active ? "text-white" : "text-indigo-600",
// 																		"absolute inset-y-0 right-0 flex items-center pr-4"
// 																	)}>
// 																	{/* <CheckIcon
// 															className="h-5 w-5"
// 															aria-hidden="true"
// 														/> */}
// 																</span>
// 															) : null}
// 														</>
// 													)}
// 												</Listbox.Option>
// 											))}
// 										</Listbox.Options>
// 									</Transition>
// 								</div>
// 							</>
// 						)}
// 					</Listbox>
// 				</div>
// 			</section>
// 			<section className="flex flex-wrap justify-center gap-4 items-center">
// 				<div className="w-fit flex gap-4">
// 					<input
// 						className="relative cursor-default rounded-md bg-gray-700/40 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
// 						onChange={(e) => setDate(e.target.value)}
// 						type="date"
// 						name="data"
// 						id=""
// 					/>
// 					<input
// 						className="relative cursor-default rounded-md bg-gray-700/40 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
// 						onChange={(e) => setTime(e.target.value)}
// 						type="time"
// 						name="time"
// 						id=""
// 					/>
// 				</div>
// 				<div className="w-40 ">
// 					<Listbox
// 						value={Venue}
// 						onChange={setVenue}>
// 						{({ open }) => (
// 							<>
// 								<div className="relative ">
// 									<Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-700/40 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
// 										<span className="flex items-center">
// 											{/* <img src={Venue.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 											<span className="ml-3 block ">{Venue.name}</span>
// 										</span>
// 										<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
// 											{/* <ChevronUpDownIcon
// 						className="h-5 w-5 text-gray-400"
// 						aria-hidden="true"
// 					/> */}
// 										</span>
// 									</Listbox.Button>

// 									<Transition
// 										show={open}
// 										as={Fragment}
// 										leave="transition ease-in duration-100"
// 										leaveFrom="opacity-100"
// 										leaveTo="opacity-0">
// 										<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-700/40 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
// 											{venue.map((person) => (
// 												<Listbox.Option
// 													key={person.id}
// 													className={({ active }) =>
// 														classNames(
// 															active
// 																? "bg-indigo-600 text-white"
// 																: "text-gray-200",
// 															"relative cursor-default select-none py-2 pl-3 pr-9"
// 														)
// 													}
// 													value={person}>
// 													{({ Venue, active }) => (
// 														<>
// 															<div className="flex items-center">
// 																{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
// 																<span
// 																	className={classNames(
// 																		Venue ? "font-semibold" : "font-normal",
// 																		"ml-3 block "
// 																	)}>
// 																	{person.name}
// 																</span>
// 															</div>

// 															{Venue ? (
// 																<span
// 																	className={classNames(
// 																		active ? "text-white" : "text-indigo-600",
// 																		"absolute inset-y-0 right-0 flex items-center pr-4"
// 																	)}>
// 																	{" "}
// 																	{/* <CheckIcon
// 												className="h-5 w-5"
// 								aria-hidden="true"
// 											/> */}
// 																</span>
// 															) : null}
// 														</>
// 													)}
// 												</Listbox.Option>
// 											))}
// 										</Listbox.Options>
// 									</Transition>
// 								</div>
// 							</>
// 						)}
// 					</Listbox>
// 				</div>
// 			</section>
// 		</main>
// 	);
// }
import React from "react";

function page() {
	return <div>Hello</div>;
}

export default page;
