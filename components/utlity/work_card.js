import React from "react";
import Image from "next/image";
import ReusablePopover from "./popover";

function WorkCard({
  work_type,
  work_name,
  work_description,
  work_link,
  children,
  images = null,
}) {
  // console.log(images)
  return (
    <React.Fragment>
      {" "}
      <div class="p-4 lg:w-1/3">
        <div class="h-full border border-gray-700  bg-gray-700 bg-opacity-50 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {work_type}
          </h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-50 mb-3">
            {work_name}
          </h1>
          <p class="leading-relaxed mb-3">{work_description}</p>

          {/* Add the arrow icon here  */}
          {work_link == "NDA" ? (
            <a
              class="text-indigo-500 gap-2 inline-flex items-center mb-3">
              NDA
            </a>
          ) : (
            <a
              href={work_link}
              class="text-indigo-500 gap-2 inline-flex items-center mb-3">
              Learn More
              {/* Arrow Icon  */}
              {/* Add link here  */}
              <div className="flex items-center bg-gray-700 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-7 h-7 transform origin-center transition-transform duration-300 hover:-rotate-45"
                  viewBox="0 0 24 24"
                  fill="white">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="white"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </a>
          )}

          {/* <ReusablePopover buttonText="Learn More" images={images}/> */}

          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkCard;
