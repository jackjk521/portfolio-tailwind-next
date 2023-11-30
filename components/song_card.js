import React from "react";
import Image from "next/image";
function SongCard() {
  return (
    <React.Fragment>
      {/* Music Player Card  */}
      <div class="p-2 flex justify-center items-center">
        <div class="p-4">
          {/* <!-- Album Cover --> */}
          <Image
            src="/images/magic_kong.png"
            width={120}
            height={0}
            className="mx-auto rounded-lg mb-4 shadow-md shadow-slate-500"
            alt="magic_kong"
          />
          {/* <!-- Song Title --> */}
          <h2 class="text-sm lg:text-xl font-semibold text-center mb-1">Work Smart Not Hard</h2>
          {/* <!-- Artist Name --> */}
          <p class="text-gray-400 text-xs sm:text-sm text-center">Daily Reminder</p>
          {/* <!-- Music Controls --> */}
          <div class="mt-6 flex justify-center items-center">
            <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <svg
                viewBox="0 0 24 24"
                class="w-2 h-2 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                    fill="#000000"></path>
                  <path
                    d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                    fill="#000000"></path>
                </g>
              </svg>
            </button>
            {/* Play Button  */}
            <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
              <svg
                viewBox="0 0 24 24"
                class="w-3 h-3 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    fill="#000000"
                  />
                </g>
              </svg>

              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg> */}
            </button>
            <button class="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <svg
                viewBox="0 0 24 24"
                class="w-2 h-2 text-gray-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                    fill="#000000"></path>
                  <path
                    d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z"
                    fill="#000000"></path>
                </g>
              </svg>
            </button>
          </div>
          {/* <!-- Progress Bar --> */}
          <div class="mt-6 bg-gray-200 h-1 rounded-full">
            <div class="bg-teal-500 h-1 rounded-full w-1/2"></div>
          </div>
          {/* <!-- Time Information --> */}
          <div class="flex justify-between mt-2 text-sm text-gray-600">
            <span>4:23</span>
            <span>8:21</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SongCard;
