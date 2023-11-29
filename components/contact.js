import React from "react";

function Contact() {
  return (
    <div
      className="container mx-auto max-w-7xl px-4 lg:px-24 py-16 rounded-lg bg-gray-900 text-center "
      id="contact_me">
      <h1 class="text-xl sm:text-3xl lg:text-4xl font-bold pt-3"> Do you have an idea </h1>
      <h1 class="text-xl sm:text-3xl lg:text-4xl font-bold pb-3 mb-3">  you want to bring to life ?  </h1>

      <a
        type="button"
        href="https://www.linkedin.com/in/jed-abner-chu/"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="inline-block rounded-full bg-gray-500 px-6 py-3 text-xs font-medium uppercase leading-normal text-white hover:bg-green-500" >
        Connect with me
      </a>
    </div>
  );
}

export default Contact;
