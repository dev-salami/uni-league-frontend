"use client";
import { getTweetIdFromUrl } from "@/utils";
import axios from "axios";
import React, { useState } from "react";

function Post() {
	const [Link, setLink] = useState("");
	const [Status, setStatus] = useState("");

	const createPost = () => {
		console.log(getTweetIdFromUrl(Link));
		if (!Link) {
			setStatus("empty");
			setTimeout(() => {
				setStatus("");
			}, 4000);
		} else if (Link && getTweetIdFromUrl(Link)) {
			axios
				.post("https://uni-league.onrender.com/api/v1/post", {
					id: getTweetIdFromUrl(Link),
				})
				.then((res) => {
					console.log(res);
					setStatus("good");
					setTimeout(() => {
						setStatus("");
					}, 4000);
				})
				.catch((err) => {
					setStatus("error");
					setTimeout(() => {
						setStatus("");
					}, 4000);
				});
		} else {
			setStatus("bad");
			setTimeout(() => {
				setStatus("");
			}, 4000);
		}
	};
	return (
		<section className=" ">
			<div>
				<div className="flex justify-center mx-auto max-w-md items-center ">
					<div className="w-full px-3 mb-2">
						<div className="flex pl-2 items-center gap-8 ">
							{/* <label
								className=" h-fit uppercase tracking-wide text-gray-200 text-xs font-bold"
								htmlFor="url">
								Twitter Link
							</label> */}
							{Status === "bad" && (
								<p className="text-red-600 font-semibold p-2">Invalid Link</p>
							)}
							{Status === "good" && (
								<p className="text-green-600 font-semibold p-2">Link Saved</p>
							)}
							{Status === "error" && (
								<p className="text-green-600 font-semibold p-2">
									An error occured
								</p>
							)}
							{Status === "empty" && (
								<p className="text-white font-semibold p-2">
									Field can not be empty
								</p>
							)}
						</div>
						<div className="flex pl-2 items-center gap-4">
							<input
								onChange={(e) => {
									setLink(() => e.target.value);
								}}
								value={Link}
								className="appearance-none block w-full bg-gray-200 max-w-md text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="url"
								type="url"
								placeholder="Paste Twitter Link"
							/>
							<button
								onClick={createPost}
								className=" bg-blue-400 h-fit px-3 py-1 rounded-md text-xs">
								UPLOAD
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Post;
