import React from "react";
import Image from "next/image";

function Companies() {
  return (
    <div class="container px-5 py-12 h-full m-auto">
      <h1 class="font-playfair-display text-2xl font-bold p-5 text-center">
        Companies I have worked with
      </h1>

      {/* Company Logos  */}
      <div class="grid grid-cols-12 gap-4 p-1 mb-3 items-center justify-center">
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4 flex justify-center">
          <Image
            src="/images/hatchit_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out filter grayscale hover:scale-110"
            alt="hatchit_logo"
          />
          {/* Hover the number of years  */}
          {/* <div class="relative group">
            <button class="relative z-10 middle none center rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Company
            </button>
            <div class="absolute top-0 group-hover:-top-[3rem] transition-all ease-in-out duration-500">
              <div class="z-0 w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white   text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <h3 class="font-sans font-normal text-sm text-gray-900 py-2 px-5">
                  Awesome ❤
                </h3>
              </div>
            </div>
          </div> */}
          {/* End of popover  */}
        </div>
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4 flex justify-center">
          <Image
            src="/images/jairosoft_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out filter grayscale hover:scale-110"
            alt="jairosoft_logo"
          />
        </div>
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4 flex justify-center">
          <Image
            src="/images/color_city_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out filter grayscale hover:scale-110"
            alt="color_city_logo"
          />
        </div>
        {/* Add more companies  */}
        {/* <div class="col-span-12 rounded-lg border border-gray-400 bg-black-200 p-5 sm:col-span-4">
          <Image
            src="/images/profile_img.jpg"
            width={150}
            height={0}
            className="rounded-full"
            alt="profile_img"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Companies;
