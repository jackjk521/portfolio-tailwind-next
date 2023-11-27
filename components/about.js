import React from "react";
import Image from "next/image";

function About() {
  return (
    // <div class="container mx-auto">
    <div class="grid grid-cols-12 gap-4 p-1 mb-3">
      {/* About Me with Image  */}
      <div class="col-span-12 rounded-lg border border-gray-500 bg-black-200 p-5 sm:col-span-8">
        <div class="ps-5 pt-3">
          <Image
            src="/images/profile_img.jpg"
            width={150}
            height={0}
            className="rounded-full"
            alt="profile_img"
          />
        </div>

        <h1 class="text-5xl font-bold p-5">
          {" "}
          a Full Stack Software Engineer
        </h1>
        
        <h1 class="text-5xl font-bold p-5">
          {" "}
          with a Heart 
        </h1>
        {/* <img
          src="/images/profile_img.jpg"
          class="w-32 rounded-full"
          alt="Avatar"
        /> */}
      </div>
      {/* <!-- Overview --> */}
      <div class="col-span-12 rounded-lg border border-gray-400 bg-black-200 p-5 sm:col-span-4">
        <h1 class="text-2xl font-bold p-5"> Overview</h1>
        <a
          aria-current="true"
          type="button"
          class="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600">
          <h2 class="text-xl font-bold px-5"> About me</h2>
        </a>
        <a
          type="button"
          href="#tech_stack"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="text-xl font-bold px-5"> Tech </h2>
        </a>
        <a
          type="button"
          href="#works_experience"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="text-xl font-bold px-5"> Works </h2>
        </a>
        <a
          type="button"
          href="#contact_me"
          class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
          <h2 class="text-xl font-bold px-5"> Connect with me </h2>
        </a>
      </div>
    </div>
    // </div>
  );
}

export default About;
