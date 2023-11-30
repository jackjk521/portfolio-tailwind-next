import React from "react";
import Image from "next/image";
import Link from "next/link";

function Work_List() {
  return (
    <section
      class="rounded-lg body-font mb-4 bg-cover bg-no-repeat bg-gray-900"
      style={{ backgroundImage: `url('/images/dots_bg.png')`, height: "100%" }}
      id="works_experience">
      <div class="container px-7 py-7 mx-auto">
        <Link class="flex items-center" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 rounded-full inline-block">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <h1 class="font-playfair-display text-2xl font-bold p-5">
            Categories
          </h1>
        </Link>

        {/* Card List  */}
        <div class="flex flex-wrap -m-4 mb-4">
          {/* 1st Card Start  */}
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
              <a class="text-indigo-500 gap-2 inline-flex items-center mb-3">
                Learn More
                {/* Arrow Icon  */}
                <div className="flex items-center bg-black rounded-full">
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

              {/* Tech Stack Used  */}
              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
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
              <a class="text-indigo-500 gap-2 inline-flex items-center mb-3">
                Learn More
                {/* Arrow Icon  */}
                <div className="flex items-center bg-black rounded-full">
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

              {/* Tech Stack Used  */}
              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
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
          </div>
          {/* 3rd Card Start  */}
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
              <a class="text-indigo-500 gap-2 inline-flex items-center mb-3">
                Learn More
                {/* Arrow Icon  */}
                <div className="flex items-center bg-black rounded-full">
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

              {/* Tech Stack Used  */}
              <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
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
          </div>
          {/* 3rd Card END  */}
        </div>
      </div>
    </section>
  );
}

export default Work_List;