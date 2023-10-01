"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import logo from "../../public/assets/uifllogo.jpg";
import Image from "next/image";

function Navbar() {
	const router = useRouter();

	const [Open, setOpen] = useState(false);

	const handleClick = () => setOpen(!Open);
	const tabs = [
		{ link: "/", name: "HOME" },
		{ link: "/fixtures", name: "Fixtures" },
		{ link: "/results", name: "Results" },
		{ link: "/tables", name: "Tables" },
		{ link: "/transfers", name: "Transfers" },
	];
	const isActive = (pathname) => router.pathname === pathname;

	return (
		<section className="h-full w-full   z-50 ">
			<main className="text-white items-center     w-full  py-8 px-8 md:px-4 h-[60px]  flex flex-row justify-between border-b-[1px]  ">
				<Image
					alt="logo"
					src={logo}
					className="h-10 w-10 rounded-full"></Image>

				<div className="items-center  text-sm mt-3 md:flex flex-row font-semibold space-x-4 hidden">
					{tabs.map((item, index) => (
						<Link
							key={item.name}
							href={item.link}
							className="transition ease-in-out duration-700  relative px-3 py-1 
								
							">
							{isActive(item.link) && (
								<motion.div
									transition={{ duration: 0.5 }}
									style={{ borderRadius: 9999 }}
									layoutId="active-pill"
									className=" bg-[#d87d4a] absolute inset-0"
								/>
							)}
							<span className="relative z-10">{item.name}</span>
						</Link>
					))}

					<button className="  font-bold  transition  ease-in-out duration-700   px-2 py-0.5 ">
						LOGOUT
					</button>

					<button className="transition ease-in-out duration-700  relative px-3 py-1 ">
						LOGIN
					</button>
				</div>
				<div className="flex gap-6 h-fit ">
					<button
						onClick={handleClick}
						className="bg-orange md:hidden focus:outline-none hover:text-[#d87d4a] transition ease-in-out duration-700 flex items-center  z-[999]">
						<span className="w-8 h-8   ">
							{!Open ? <FaBars size={30} /> : <FaTimes size={30} />}
						</span>
					</button>
				</div>
			</main>

			<aside>
				<div
					onClick={() => setOpen(false)}
					className={` duration-500 md:hidden ${
						Open
							? "bg-black/60 fixed !top-0 z-[1000] inset-0 opacity-100"
							: "opacity-0"
					}`}></div>
				<div className="md:hidden ">
					<div
						className={`z-[1000] duration-1000 p-10 bg-black    fixed top-0 left-0 right-1/3 bottom-0 ${
							Open ? " " : "  -translate-x-full "
						}`}>
						<div className="flex flex-col justify-evenly h-full items-center text-lg gap-6 text-gray-500 font-semibold leading-tight ">
							{tabs.map((item, index) => (
								<Link
									onClick={() => setOpen(false)}
									key={item.name}
									href={item.link}
									className={`transition ease-in-out duration-700   px-3 py-1 ${
										isActive(item.link) ? "bg-[#d87d4a] text-white" : ""
									}`}>
									{item.name}
								</Link>
							))}

							<button className="  font-bold  transition  ease-in-out duration-700   px-2 py-0.5 ">
								LOGOUT
							</button>

							<button className="transition ease-in-out duration-700  relative px-3 py-1 ">
								LOGIN
							</button>
						</div>
					</div>
				</div>
			</aside>
		</section>
	);
}
export default Navbar;
