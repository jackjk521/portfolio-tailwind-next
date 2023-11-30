import React from "react";

function Overview() {
  return (
    <React.Fragment>
      {" "}
      <h1 class="font-playfair-display text-2xl font-bold p-5"> Overview</h1>
      <a
        aria-current="true"
        type="button"
        class="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600">
        <h2 class="font-playfair-display text-xl font-bold px-5"> About me</h2>
      </a>
      <a
        type="button"
        href="#tech_stack"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
        <h2 class="font-playfair-display text-xl font-bold px-5"> Tech </h2>
      </a>
      <a
        type="button"
        href="#works_experience"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
        <h2 class="font-playfair-display text-xl font-bold px-5"> Works </h2>
      </a>
      <a
        type="button"
        href="#contact_me"
        class="block w-full cursor-pointer rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
        <h2 class="font-playfair-display text-xl font-bold px-5">
          {" "}
          Connect with me{" "}
        </h2>
      </a>
    </React.Fragment>
  );
}

export default Overview;
