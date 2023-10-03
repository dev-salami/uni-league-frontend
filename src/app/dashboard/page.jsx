"use client";
import CreateFixtures from "@/components/CreateFixtures";
import EditResult from "@/components/EditResult";
import Post from "@/components/Post";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Dashboard() {
	const [Tab, setTab] = useState("TwitterPost");

	const tabs = [
		{ link: "/createFixtures", name: "Create Fixtures" },
		{ link: "/editResult", name: "Edit Result" },
		{ link: "/TwitterPost", name: "TwitterPost" },
	];

	const isActive = (name) => Tab === name;

	return (
		<section className=" container mx-auto px-3 flex flex-col gap-4 min-h-screen mt-4">
			<aside className="max-w-2xl w-full   mx-auto border-b pb-2 ">
				<div className="items-center justify-around text-sm mt-3 flex flex-row   border-none  w-full font-semibold space-x-4 ">
					{tabs.map((item, index) => (
						<button
							onClick={() => setTab(item.name)}
							key={item.name}
							className="transition ease-in-out duration-700  relative px-3 py-1 
								
							">
							{isActive(item.name) && (
								<motion.div
									transition={{ duration: 0.5 }}
									style={{ borderRadius: 9999 }}
									layoutId="active-pill"
									className=" bg-[#d87d4a] absolute inset-0"
								/>
							)}
							<span className="relative z-10">{item.name}</span>
						</button>
					))}
				</div>
			</aside>
			<main className="w-full  ">
				{Tab === "Create Fixtures" && <CreateFixtures />}
				{Tab === "Edit Result" && <EditResult />}
				{Tab === "TwitterPost" && <Post />}
			</main>
		</section>
	);
}

export default Dashboard;
