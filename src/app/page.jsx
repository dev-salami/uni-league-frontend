"use client";
import axios from "axios";
import React from "react";
import { Tweet } from "react-tweet";
import bg from "../../public/assets/bg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

async function Page() {
  const { data } = await axios.get(
    "https://uni-league.onrender.com/api/v1/post"
  );
  return (
    <div data-theme="dark" className="">
      <div className="relative w-full aspect-[2/2] sm:aspect-[4/3] lg:aspect-[5/3] xl:aspect-[5/2] ">
        <Image className="-z-10" fill src={bg}></Image>
        <section className="  p-4 bg-black/60 w-full h-full flex flex-col justify-center">
          <div className="text-center leading-[5px] md:leading-3">
            <motion.div
              transition={{ duration: 0.4, delay: 0 }}
              initial={{ opacity: 0, translateX: +60 }}
              animate={{ opacity: 1, translateX: 0 }}
              className="uppercase text-3xl sm:text-5xl md:text-7xl  block"
            >
              University of Ilorin
            </motion.div>
            <br />
            <motion.div
              transition={{ duration: 0.4, delay: 0.4 }}
              initial={{ opacity: 0, translateX: -60 }}
              animate={{ opacity: 1, translateX: 0 }}
              className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold block"
            >
              Football League
            </motion.div>
            <br />
            <motion.div
              transition={{ duration: 0.4, delay: 0.8 }}
              initial={{ opacity: 0, translateX: +60 }}
              animate={{ opacity: 1, translateX: 0 }}
              className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold block"
            >
              Home of sports
            </motion.div>
          </div>

          <div>
            <motion.p
              transition={{ duration: 0.4, delay: 1.2 }}
              initial={{ opacity: 0, translateX: +60 }}
              animate={{ opacity: 1, translateX: 0 }}
              className="max-w-5xl mt-6 text-sm sm:text-base text-center mx-auto"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ratione eius maiores veniam cumque nemo vel quos nesciunt,
              voluptates tempore molestias ad provident, tenetur quia? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione
              eius maiores veniam cumque nemo vel quos nesciunt, voluptates
              tempore molestias ad provident, tenetur quia?
            </motion.p>
            <div className="w-fit mx-auto flex gap-6 mt-6">
              <motion.button
                transition={{ duration: 0.5, delay: 1.5 }}
                initial={{ opacity: 0, translateX: -60 }}
                animate={{ opacity: 1, translateX: 0 }}
                className="px-5 py-1 w-fit rounded-full bg-white text-black font-semibold"
              >
                <Link href="/fixtures">Fixtures</Link>
              </motion.button>
              <motion.button
                transition={{ duration: 0.5, delay: 1.5 }}
                initial={{ opacity: 0, translateX: +60 }}
                animate={{ opacity: 1, translateX: 0 }}
                className=" w-fit rounded-full text-white bg-[#6E40FF] font-semibold"
              >
                <Link className="px-5 py-1" href="/tables">
                  Table
                </Link>
              </motion.button>
            </div>
          </div>
        </section>
      </div>
      <div className=" container mx-auto px-4 ">
        <p className="font-semibold text-lg text-center p-3">TOP STORIES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.length === 0 ? (
            <div>There are currently no content</div>
          ) : (
            <>
              {data.map((post) => (
                <Tweet key={post._id} id={post.id} />
              ))}
            </>
          )}
        </div>
      </div>
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
