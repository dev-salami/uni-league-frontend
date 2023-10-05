"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { MdCancel, MdDelete } from "react-icons/md";

// const data = inputFieldsHome.map((field) => [field.Scorer, field.Assister]);
function SingleResult({ setresultModal }) {
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

	const Submit = () => {
		toast.error("Fetching Data");
		const data = {};
		data.homeTeamScorer = inputFieldsHome.map((field) => [
			field.Scorer,
			field.Assister,
		]);

		data.awayTeamScorer = inputFieldsAway.map((field) => [
			field.Scorer,
			field.Assister,
		]);
		console.log(data);
	};
	return (
		<section className="inset-0 z-50 flex-col  fixed bg-black/80 flex justify-center items-center">
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
							Jad FC
							<Image
								alt="team-logo"
								className="h-8 w-8 rounded-full"
								src={require(`../../public/assets/jad.jpg`)}></Image>
						</div>
						<select
							className=" w-16 relative cursor-default rounded-md bg-gray-500 py-[2px] px-2 mx-4   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
							id="grid-state">
							<option> 1 </option>
							<option>2</option>
							<option>3</option>
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
							Jad FC
							<Image
								alt="team-logo"
								className="h-8 w-8 rounded-full"
								src={require(`../../public/assets/jad.jpg`)}></Image>
						</div>
						<select
							className=" w-16 relative cursor-default rounded-md bg-gray-500 py-[2px] px-2 mx-4   text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
							id="grid-state">
							<option> 1 </option>
							<option>2</option>
							<option>3</option>
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
				onClick={Submit}
				className="w-fit px-4 py-1 bg-blue-400">
				Edit Result
			</button>
		</section>
	);
}

export default SingleResult;
