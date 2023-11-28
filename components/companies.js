import React from "react";
import Image from "next/image";

function Companies() {
  return (
    <div class="container px-5 mx-auto">
      <h1 class="text-xl font-bold p-5 text-center">
        Companies I have worked with
      </h1>
 
      {/* Company Logos  */}
      <div class="grid grid-cols-12 gap-4 p-1 mb-3 items-center justify-center">
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4">
          <Image
            src="/images/hatchit_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="hatchit_logo"
          />
        </div>
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4">
          <Image
            src="/images/jairosoft_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
            alt="jairosoft_logo"
          />
        </div>
        <div class="col-span-12 rounded-lg bg-black-200 p-5 sm:col-span-4">
          <Image
            src="/images/color_city_logo.png"
            width={200}
            height={100}
            class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
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
