"use client";

import { isDateInPast, teams, venue } from "../utils.js";

import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { addFixtures } from "@/redux/features/crudSlice";
import { useDispatch } from "react-redux";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const SingleFixtures = ({ count, matchday, season }) => {
	const dispatch = useDispatch();

	const [Team1B, setTeam1B] = useState(teams[0]);
	const [Team1A, setTeam1A] = useState(teams[0]);
	const [Venue, setVenue] = useState(venue[0]);
	const [Date, setDate] = useState("");
	const [Time, setTime] = useState("");
	const [error, seterror] = useState(false);

	// const ValidateForm = () => {

	// 	if(isDateInPast(Date) && Date) {
	// 		seterror("Date is in the past")
	// 	}
	// }

	const id = `6.${matchday}.${count}`;

	useEffect(() => {
		if (
			Team1B &&
			Team1A &&
			Venue &&
			Date &&
			Time &&
			Team1B.id !== 0 &&
			Team1A.id !== 0 &&
			Venue.id !== 0 &&
			season &&
			matchday
		) {
			dispatch(
				addFixtures({
					identifier: id,
					homeTeam: Team1A.name,
					awayTeam: Team1B.name,

					venue: Venue.name,
					time: Time,
					date: Date,
					matchday: matchday,
					season: season,
				})
			);
		}
	}, [Team1B, Team1A, Venue, Date, Time, season, matchday]);

	return (
		<section className="border rounded-md border-gray-400 p-4 mt-4 w-fit mx-auto">
			<div className="w-fit mx-auto mb-2 ">
				<p className="text-xl font-bold uppercase "> {`FIXTURES ${count}`}</p>
				{error && <span>{error}</span>}
			</div>
			<main className="flex flex-wrap gap-4 justify-center items-center ">
				<div className="flex  gap-4 items-center">
					<div className="w-40">
						<Listbox
							value={Team1A}
							onChange={setTeam1A}>
							{({ open }) => (
								<>
									<div className="relative ">
										<Listbox.Button
											className={`${
												Team1A.name === Team1B.name &&
												Team1A.id !== 0 &&
												"border-red-500 border-2 outline-none focus:ring-0"
											} relative w-full cursor-default rounded-md bg-gray-500 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6`}>
											<span className="flex items-center">
												{/* <img src={Team1A.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
												<span className="ml-3 block ">{Team1A.name}</span>
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
												<ChevronUpDownIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Listbox.Button>

										<Transition
											show={open}
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0">
											<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{teams.map((person) => (
													<Listbox.Option
														key={person.id}
														className={({ active }) =>
															classNames(
																active
																	? "bg-indigo-600 text-white"
																	: "text-gray-200",
																"relative cursor-default select-none py-2 pl-3 pr-9"
															)
														}
														value={person}>
														{({ Team1A, active }) => (
															<>
																<div className="flex items-center">
																	{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
																	<span
																		className={classNames(
																			Team1A ? "font-semibold" : "font-normal",
																			"ml-3 block "
																		)}>
																		{person.name}
																	</span>
																</div>

																{Team1A ? (
																	<span
																		className={classNames(
																			active ? "text-white" : "text-indigo-600",
																			"absolute inset-y-0 right-0 flex items-center pr-4"
																		)}>
																		<CheckIcon
																			className="h-5 w-5"
																			aria-hidden="true"
																		/>
																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</>
							)}
						</Listbox>
					</div>

					<span className="text-xl font-bold"> VS </span>
					<div className="w-40">
						<Listbox
							value={Team1B}
							onChange={setTeam1B}>
							{({ open }) => (
								<>
									<div className="relative ">
										<Listbox.Button
											className={`${
												Team1A.name === Team1B.name &&
												Team1A.id !== 0 &&
												"border-red-500 border-2 outline-none focus:ring-0"
											} relative w-full cursor-default rounded-md bg-gray-500 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6`}>
											<span className="flex items-center">
												{/* <img src={Team1B.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
												<span className="ml-3 block ">{Team1B.name}</span>
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
												<ChevronUpDownIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Listbox.Button>

										<Transition
											show={open}
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0">
											<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{teams.map((person) => (
													<Listbox.Option
														key={person.id}
														className={({ active }) =>
															classNames(
																active
																	? "bg-indigo-600 text-white"
																	: "text-gray-200",
																"relative cursor-default select-none py-2 pl-3 pr-9"
															)
														}
														value={person}>
														{({ Team1B, active }) => (
															<>
																<div className="flex items-center">
																	{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
																	<span
																		className={classNames(
																			Team1B ? "font-semibold" : "font-normal",
																			"ml-3 block "
																		)}>
																		{person.name}
																	</span>
																</div>

																{Team1B ? (
																	<span
																		className={classNames(
																			active ? "text-white" : "text-indigo-600",
																			"absolute inset-y-0 right-0 flex items-center pr-4"
																		)}>
																		<CheckIcon
																			className="h-5 w-5"
																			aria-hidden="true"
																		/>
																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</>
							)}
						</Listbox>
					</div>
				</div>
				<section className="flex flex-wrap justify-center gap-4 items-center">
					<div className="w-fit flex gap-4">
						<input
							className={`${
								isDateInPast(Date) &&
								Date &&
								"border-red-500 border-2 outline-none focus:ring-0 "
							} relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6`}
							onChange={(e) => setDate(e.target.value)}
							type="date"
							name="data"
							placeholder="select date"
							id=""
						/>
						<input
							className="relative cursor-default rounded-md bg-gray-500 py-[2px] px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
							onChange={(e) => setTime(e.target.value)}
							type="time"
							name="time"
							id=""
						/>
					</div>
					<div className="w-40 ">
						<Listbox
							value={Venue}
							onChange={setVenue}>
							{({ open }) => (
								<>
									<div className="relative ">
										<Listbox.Button className="relative w-full cursor-default rounded-md bg-gray-500 py-1 px-2   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
											<span className="flex items-center">
												{/* <img src={Venue.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
												<span className="ml-3 block ">{Venue.name}</span>
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
												<ChevronUpDownIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Listbox.Button>

										<Transition
											show={open}
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0">
											<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-500 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{venue.map((person) => (
													<Listbox.Option
														key={person.id}
														className={({ active }) =>
															classNames(
																active
																	? "bg-indigo-600 text-white"
																	: "text-gray-200",
																"relative cursor-default select-none py-2 pl-3 pr-9"
															)
														}
														value={person}>
														{({ Venue, active }) => (
															<>
																<div className="flex items-center">
																	{/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
																	<span
																		className={classNames(
																			Venue ? "font-semibold" : "font-normal",
																			"ml-3 block "
																		)}>
																		{person.name}
																	</span>
																</div>

																{Venue ? (
																	<span
																		className={classNames(
																			active ? "text-white" : "text-indigo-600",
																			"absolute inset-y-0 right-0 flex items-center pr-4"
																		)}>
																		<CheckIcon
																			className="h-5 w-5"
																			aria-hidden="true"
																		/>
																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</>
							)}
						</Listbox>
					</div>
				</section>
			</main>
		</section>
	);
};
