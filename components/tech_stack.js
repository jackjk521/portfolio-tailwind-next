import React from "react";
import Companies from "./companies";
import Tech_Marquee from "./tech_marquee";
import Learning_Marquee from "./learning_marquee";
import Image from "next/image";

function TechStack() {
  return (
    <div class="grid grid-cols-12 gap-4 p-1 mb-3" id="tech_stack">
      <div class="col-span-12 rounded-lg border border-gray-500 bg-gray-800 p-2 pt-10 sm:col-span-5">
        {/* <!--Tech Stack --> */}
        <h1 class="text-2xl font-bold p-5 text-center"> My Top Notch Stack </h1>
        {/* Slideshow  */}
        <Tech_Marquee />
        {/* <!--Tech Stack --> */}
        <h1 class="text-2xl font-bold p-5 text-center pt-10">
          {" "}
          Learning Stack{" "}
        </h1>
        {/* Slideshow  */}
        <Learning_Marquee />
      </div>

      <div class="col-span-12 rounded-lg bg-black-200 sm:col-span-7">
        <div class="col-span-12 bg-black-200 mb-3">
          <div class="grid grid-cols-12 gap-4 p-1">
            {/* <!-- Tech to Learn --> */}
            <div class="col-span-5 rounded-lg border border-gray-400 bg-black-200 p-10 p-1">
              {" "}
              <h1 class="text-2xl font-bold p-5"> Status </h1>
            </div>

            {/* <!-- Tech to Learn --> */}
            <div class="col-span-7 rounded-lg border border-gray-400 bg-gray-800 p-10 p-1">
              {" "}
              <h1 class="text-2xl font-bold p-5 text-center"> Interests </h1>
              <div class="flex items-center">
                <div class="flex space-x-4">
                  <Image
                    src="/images/finance_icon.gif"
                    width={150}
                    height={0}
                    // className="rounded-full"
                    alt="finance_icon"
                  />
                </div>
                <div class="flex space-x-4">
                  <Image
                    src="/images/weights_icon.png"
                    width={150}
                    height={0}
                    // className="rounded-full"
                    alt="weights_icon"
                  />
                </div>
                <div class="flex space-x-4">
                  <Image
                    src="/images/celebrate_icon.gif"
                    width={150}
                    height={0}
                    // className="rounded-full"
                    alt="celebrate_icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Companies --> */}
        <div class="col-span-12 rounded-lg border border-gray-400 bg-black-200 px-5 py-4">
          <Companies />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
