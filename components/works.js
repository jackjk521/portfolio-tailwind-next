import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Works() {
  const arrowVariants = {
    initial: { rotate: 0, fill: "white" },
    hover: { rotate: -45, fill: "white" },
  };

  const arrowTransition = {
    type: "spring",
    stiffness: 100,
    damping: 10,
  };

  return (
    <section
      class="rounded-lg body-font mb-4 bg-cover bg-no-repeat bg-gray-900"
      style={{ backgroundImage: `url('/images/dots_bg.png')`, height: "100%" }}
      id="works_experience">
      <div class="container px-7 py-7 mx-auto">
        <h1 class="font-playfair-display text-2xl font-bold p-5"> Works </h1>

        {/* 1st Card Start  */}
        <div class="flex flex-wrap -m-4 mb-4">
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>

              {/* Arrow Icon  */}
              <div className="flex items-center bg-black hover:bg-white rounded-full">
                <motion.span
                  className="inline-block w-4 h-4 bg-black rounded-full"
                  variants={arrowVariants}
                  whileHover="hover"
                  transition={arrowTransition}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20"
                    fill="none"
                    stroke-width="1"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="black" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>

                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg> */}
                </motion.span>
              </div>

              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Raclette Blueberry Nextious Level
              </h1>
              <p class="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>

          {/* 2nd Card START  */}
          <div class="p-4 lg:w-1/3">
            <div class="h-full border border-gray-800  bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                PERSONAL
              </h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-50 mb-3">
                Custom BMS System
              </h1>
              <p class="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              {/* Add the arrow icon here  */}

              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              {/* Tech Stack Used  */}
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/nextjs.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="nextjs_logo"
                />
                <Image
                  src="/images/materialui.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="materialui_logo"
                />
                <Image
                  src="/images/django.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="django_logo"
                />
              </div>
            </div>
          </div>

          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Selvage Poke Waistcoat Godard
              </h1>
              <p class="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <a class="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* See More button  */}
        <div class="flex justify-center w-full">
          {" "}
          <button class="text-xs font-medium uppercase px-5 py-3 rounded-full bg-gray-500 text-gray-50 hover:bg-green-400">See More</button>
        </div>
      </div>
    </section>
  );
}

export default Works;
