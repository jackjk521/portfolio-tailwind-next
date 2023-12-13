import React from "react";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "./utlity/work_card";

// Images for Custom BMS
const custom_bms_images = [
  {
    src: "/images/profile_img.png",
    alt: "Image 1",
  },
  {
    src: "/images/profile_img.png",
    alt: "Image 2",
  },
  {
    src: "/images/profile_img.png",
    alt: "Image 3",
  },
];

function Work_List() {
  return (
    <section
      class="rounded-lg body-font mb-4 bg-cover bg-no-repeat bg-gray-900"
      id="works_experience">
      <div class="container px-7 py-7 mx-auto">
        <Link href="/" class="flex items-center">
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
            Project List
          </h1>
        </Link>

        {/* Card List  */}
        <div class="flex flex-wrap -m-4 mb-4">
          <div class="container px-7 py-7 mx-auto">
            <h1 class="font-playfair-display text-2xl font-bold p-5">
              Featured
            </h1>
          </div>
          {/* Featured START  */}
          <WorkCard
            work_type="Web Application"
            work_name="Custom BMS"
            work_description="Custom BMS for Color City for inventory, orders and branch management."
            work_link="/"
            images={custom_bms_images}>
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
            {/* Tech Stack end  */}
          </WorkCard>

          <WorkCard
            work_type="Research Paper"
            work_name="EduTrack"
            work_description="IBCOL Finalist Paper on EduTrack: A Blockchain-Powered Web System for Productivity, Incentives and Charity"
            work_link="https://jakc423.notion.site/EduTrack-A-Blockchain-Powered-Web-System-for-Productivity-Incentives-and-Charity-fe07046fa842481a9d5864314c66d582"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/notion.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="notion_logo"
                />
                <Image
                  src="/images/solidity.svg"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="solidity_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>

          <WorkCard
            work_type="Website"
            work_name="YM Cargo Company Website"
            work_description="Company Website for YM Cargo PH under HatchIt Solutions"
            work_link="https://ymcargo.ph/"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/php.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="php_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          {/* Featured END  */}

          <div class="container px-7 py-7 mx-auto">
            <h1 class="font-playfair-display text-2xl font-bold p-5">
              Web Applications
            </h1>
          </div>

          {/* Web Aplication START  */}
          <WorkCard
            work_type="Web Application"
            work_name="Custom BMS"
            work_description="Custom BMS for Color City for inventory, orders and branch management."
            work_link="/"
            images={custom_bms_images}>
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
            {/* Tech Stack end  */}
          </WorkCard>

          <WorkCard
            work_type="Web Application"
            work_name="Clinic Appointment System"
            work_description="Custom system for clinics to manage appointments, patient records and purchases"
            work_link="/"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/react.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="react_logo"
                />
                <Image
                  src="/images/laravel.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="laravel_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          <WorkCard
            work_type="Web Application"
            work_name="King's Quality BMS"
            work_description="Customized business management system for King's Quality under HatchIt Solutions"
            work_link="NDA"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/react.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="react_logo"
                />
                <Image
                  src="/images/laravel.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="laravel_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          <WorkCard
            work_type="Web Application"
            work_name="YM Cargo BMS"
            work_description="Customized business management system for YM Cargo PH under HatchIt Solutions"
            work_link="NDA"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/react.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="react_logo"
                />
                <Image
                  src="/images/laravel.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="laravel_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          <WorkCard
            work_type="Website"
            work_name="Cafe Blogsite"
            work_description="Cafe website from my own inspiration"
            work_link="https://chucafeandbar.mydurable.com/"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/durable.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="durable_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          {/* Web Aplication END  */}

          <div class="container px-7 py-7 mx-auto">
            <h1 class="font-playfair-display text-2xl font-bold p-5">Games</h1>
          </div>
          {/* Games START  */}
          <WorkCard
            work_type="Games"
            work_name="SlitherUI"
            work_description="Snake game with the integration of the game called Life into the game's mechanics"
            work_link="https://github.com/jackjk521/Slither_UI"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/java.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="nextjs_logo"
                />
                {/* <Image
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
                /> */}
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          {/* Games END  */}

          <div class="container px-7 py-7 mx-auto">
            <h1 class="font-playfair-display text-2xl font-bold p-5">
              Research Papers
            </h1>
          </div>
          {/* Research Paper START  */}
          <WorkCard
            work_type="Research Paper"
            work_name="EduTrack"
            work_description="IBCOL Finalist Paper on EduTrack: A Blockchain-Powered Web System for Productivity, Incentives and Charity"
            work_link="https://jakc423.notion.site/EduTrack-A-Blockchain-Powered-Web-System-for-Productivity-Incentives-and-Charity-fe07046fa842481a9d5864314c66d582"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/notion.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="notion_logo"
                />
                <Image
                  src="/images/solidity.svg"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="solidity_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>

          <WorkCard
            work_type="Data Analysis"
            work_name="Bike Rental Analysis"
            work_description="Analyzing data of bike rentals within specific area"
            work_link="https://github.com/jackjk521/Bike-Renting-Analysis"
            images={custom_bms_images}>
            {/* Tech Stack Used  */}
            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
              <div class="container mx-auto px-10 py-6 gap-4 flex items-center justify-center">
                <Image
                  src="/images/python.png"
                  width={50}
                  height={100}
                  class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
                  alt="python_logo"
                />
              </div>
            </div>
            {/* Tech Stack end  */}
          </WorkCard>
          {/* Research Paper END  */}
        </div>
      </div>
    </section>
  );
}

export default Work_List;
