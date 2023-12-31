"use client";
import CreateFixtures from "@/components/CreateFixtures";
import EditResult from "@/components/EditResult";
import Post from "@/components/Post";
// import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";

function Dashboard() {
  // const lenis = new Lenis();
  // lenis.on("scroll", (e) => {
  // 	console.log(e);
  // });
  // function raf(time) {
  // 	lenis.raf(time);
  // 	requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [Tab, setTab] = useState("TwitterPost");

  const tabClick = (value) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", value);
    // const tab = searchParams.get('tab')
    router.push(`/dashboardunilorin?tab=${value}`);
  };

  const tabs = [
    { link: "createFixtures", name: "Create Fixtures" },
    { link: "editResult", name: "Add Result" },
    { link: "twitterPost", name: "Twitter Post" },
  ];

  const isActive = (name) => searchParams.get("tab") === name;

  return (
    <section className=" container mx-auto px-3 flex flex-col gap-4 min-h-screen mt-4">
      <aside className="max-w-2xl w-full   mx-auto border-b pb-2 ">
        <div className="items-center justify-around text-sm mt-3 flex flex-row   border-none  w-full font-semibold space-x-4 ">
          {tabs.map((item, index) => (
            <button
              onClick={() => tabClick(item.link)}
              key={item.name}
              className="transition ease-in-out duration-700  relative px-3 py-1 
								
							"
            >
              {isActive(item.link) && (
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
        {searchParams.get("tab") === "createFixtures" && <CreateFixtures />}
        {searchParams.get("tab") === "editResult" && <EditResult />}
        {searchParams.get("tab") === "twitterPost" && <Post />}
      </main>
    </section>
  );
}

export default Dashboard;
