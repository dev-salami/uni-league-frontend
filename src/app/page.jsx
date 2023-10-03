import axios from "axios";
import React from "react";
import { Tweet } from "react-tweet";

async function Page() {
	const { data } = await axios.get(
		"https://uni-league.onrender.com/api/v1/post"
	);
	return (
		<div
			data-theme="dark"
			className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{data.length === 0 ? (
				<div>There are currently no content</div>
			) : (
				<>
					{data.map((post) => (
						<Tweet
							key={post._id}
							id={post.id}
						/>
					))}
					<Tweet id="1704849101324451843" />
					<Tweet id="1704886027016405339" />
					<Tweet id="1708886908523213165" />
					<Tweet id="1704886027016405339" />
				</>
			)}

			{/* <Tweet id="1704849101324451843" />
			<Tweet id="1704886027016405339" />
			<Tweet id="1708886908523213165" />
			<Tweet id="1704886027016405339" />
			<Tweet id="1704849101324451843" />
			<Tweet id="1704886027016405339" /> */}
		</div>
	);
}

export default Page;
