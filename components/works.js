import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import WorkCard from "./utlity/work_card";

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

  return (
    <section
      class="rounded-lg body-font mb-4 bg-cover bg-no-repeat bg-gray-900"
      // style={{ backgroundImage: `url('/images/dots_bg.png')`, height: "100%" }}
      id="works_experience">
      <div class="container px-7 py-7 mx-auto">
        <h1 class="font-playfair-display text-2xl font-bold p-5"> Works </h1>

        {/* Card List  */}
        <div class="flex flex-wrap -m-4 mb-4">
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
            work_description="IBCOL Finalist Submission on EduTrack: A Blockchain-Powered Web System for Productivity, Incentives and Charity"
            work_link="https://jakc423.notion.site/jakc423/EduTrack-A-Blockchain-Powered-Web-System-for-Productivity-Incentives-and-Charity-fe07046fa842481a9d5864314c66d582"
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
            work_type="Website"
            work_name="YM Cargo Company Website"
            work_description="Company Website for YM Cargo PH under HatchIt Solutions"
            work_link="https://ymcargo.ph/"
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

          {/* Featured END  */}
        </div>
        {/* See More button  */}
        <div class="flex justify-center w-full">
          <NextLink
            href="/works"
            className="text-xs font-medium uppercase px-5 py-3 rounded-full bg-gray-500 text-gray-50 hover:bg-green-400">
            See More
          </NextLink>
        </div>
      </div>
    </section>
  );
}

export default Works;
