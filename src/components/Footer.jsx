import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
function Footer() {
	return (
		<>
			<section className="  mt-28 pt-20 pb-8">
				<div className=" flex  items-center space-y-8 flex-col justify-center container mx-auto md:px-20 ">
					<div className="text-white pb-8   container flex md:flex-row flex-col items-center  justify-center space-y-4 sm:space-y-0 sm:justify-between  ">
						<span className="text-bold text-2xl">Audiophile</span>
						<div>
							<div className="md:space-y-0 text-sm space-y-4  mt-3 flex-col text-center font-semibold md:text-lg flex md:flex-row md:space-x-4 ">
								<Link
									href="/"
									className="transition ease-in-out duration-700 hover:text-[#d87d4a]">
									HOME
								</Link>
								<Link
									href="/headphones"
									className="transition ease-in-out duration-700 hover:text-[#d87d4a]">
									HEADPHONES
								</Link>
								<Link
									href="/speakers"
									className="transition ease-in-out duration-700 hover:text-[#d87d4a]">
									SPEAKERS
								</Link>
								<Link
									href="/earphones"
									className="transition ease-in-out duration-700 hover:text-[#d87d4a]">
									EARPHONES
								</Link>
							</div>
						</div>
					</div>
					<div className="max-w[700px] mx-auto items-center flex flex-col md:justify-around md:space-x-8 md:space-y-0 space-y-8 md:flex-row">
						<p className="text-gray-400 max-w-[70%] md:max-w-[40%] text-base">
							{`Audiophile is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we're open 7 days a week.`}
						</p>
						<div className="md:max-w-[40%] max-w-[70%]">
							<div className="text-white flex flex-row space-x-4 pb-8">
								<button className=" text-[#1DA1F2] ">
									<BsTwitter size={20} />
								</button>
								<button className=" text-blue-600 ">
									<FaLinkedin size={20} />
								</button>
								<button className=" text-blue-600 ">
									<FaFacebook size={20} />
								</button>
							</div>
						</div>
					</div>
					<span className="text-gray-400 text-sm">
						Copyright 2023. All Rights Reserved
					</span>
				</div>
			</section>
		</>
	);
}
export default Footer;
