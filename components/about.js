import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SongCard from "./song_card";

function About() {
  const heartVariants = {
    initial: { fill: "currentColor" },
    hover: { fill: "red" },
  };

  return (
    // <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-4 p-1 mb-3">
      {/* About Me with Image  */}
      <div class="col-span-12 rounded-lg flex items-center bg-gray-900 p-5 sm:col-span-8">
        <div class="ps-5 pt-3">
          <Image
            src="/images/profile_img.png"
            width={150}
            height={0}
            className="rounded-full"
            alt="profile_img"
          />
        </div>
        <div class="flex flex-col items-start px-5 ps-8 pt-20 w-full">
          <h1 class="font-playfair-display text-xl sm:text-2xl lg:text-4xl font-bold">
            Full Stack
          </h1>
          <h1 class="font-playfair-display text-md sm:text-2xl lg:text-4xl font-bold">
            Software Engineer
          </h1>
          <h1 class="font-playfair-display text-md sm:text-2xl lg:text-4xl font-bold">
            with a{" "}
          </h1>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-30 h-20 inline-block"
            variants={heartVariants}
            whileHover="hover">
            <motion.path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </motion.svg>
        </div>

        {/* <h1 className="font-playfair-display text-xl sm:text-2xl lg:text-4xl font-bold px-5 flex items-center">
         
        </h1> */}
      </div>
      {/* <!-- Overview --> */}
      <div class="col-span-12 rounded-lg bg-gray-900 p-5 sm:col-span-4">
        <SongCard />
      </div>
    </div>
    // </div>
  );
}

export default About;
