import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  const heartVariants = {
    initial: { fill: "currentColor" },
    hover: { fill: "red" },
  };

  return (
    // <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-4 p-1 mb-3">
      {/* About Me with Image  */}
      <div class="col-span-12 rounded-lg bg-gray-900 p-5 sm:col-span-8">
        <div class="ps-5 pt-3">
          <Image
            src="/images/profile_img.png"
            width={150}
            height={0}
            className="rounded-full"
            alt="profile_img"
          />
        </div>

        <h1 class="font-playfair-display text-xl sm:text-2xl lg:text-4xl font-bold px-5 pt-4"> Full Stack Software Engineer</h1>

        <h1 className="font-playfair-display text-xl sm:text-2xl lg:text-4xl font-bold px-5 flex items-center">
          with a{" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="ps-5 w-30 h-20"
            variants={heartVariants}
            whileHover="hover">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </motion.svg>
        </h1>
      </div>
      {/* <!-- Overview --> */}
      <div class="col-span-12 rounded-lg bg-gray-900 p-5 sm:col-span-4">
        <h1 class="font-playfair-display text-2xl font-bold p-5"> Overview</h1>
        <a
          aria-current="true"
          type="button"
          class="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600">
          <h2 class="font-playfair-display text-xl font-bold px-5"> About me</h2>
        </a>
        <a
          type="button"
          href="#tech_stack"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="font-playfair-display text-xl font-bold px-5"> Tech </h2>
        </a>
        <a
          type="button"
          href="#works_experience"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="font-playfair-display text-xl font-bold px-5"> Works </h2>
        </a>
        <a
          type="button"
          href="#contact_me"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="font-playfair-display text-xl font-bold px-5"> Connect with me </h2>
        </a>
      </div>
    </div>
    // </div>
  );
}

export default About;
