import React from "react";
import Companies from "./companies";
import Tech_Marquee from "./tech_marquee";
import Learning_Marquee from "./learning_marquee";
import SongCard from "./song_card";
import Interests from "./interest";

function TechStack() {
  return (
    <div class="grid grid-cols-12 gap-3 mb-4" id="tech_stack">
      {/* Tech Stack Components  */}
      <div class="col-span-12 rounded-lg bg-gray-900 p-2 pt-10 py-5 lg:col-span-5">
        {/* <!--Tech Stack --> */}
        <h1 class="font-playfair-display text-2xl font-bold p-5 sm:pt-5 lg:pt-20  text-center">
          {" "}
          My Top Notch Stack{" "}
        </h1>
        {/* Slideshow  */}
        <Tech_Marquee />
        {/* <!--Tech Stack --> */}
        <h1 class="font-playfair-display text-2xl font-bold p-5 text-center pt-10">
          {" "}
          Learning Stack{" "}
        </h1>
        {/* Slideshow  */}
        <Learning_Marquee />
      </div>

      <div class="col-span-12 rounded-lg bg-black-200 lg:col-span-7">
        <div class="grid grid-cols-12 gap-3">
          {/* <!-- Tech to Learn --> */}
          <div class="col-span-12 rounded-lg bg-gray-900 p-1 md:col-span-6 mb-1 ">
            {/* Music Card here  */}
            <SongCard />
          </div>
          {/* <!-- Interests --> */}
          <div class="col-span-12 rounded-lg bg-gray-900 p-5 md:col-span-6 mb-1">
            {" "}
            <Interests />
          </div>
          {/* <!-- Companies --> */}
          <div class="col-span-12 rounded-lg bg-gray-900 px-5 py-4">
            <Companies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
