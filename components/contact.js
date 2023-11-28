import React from "react";

function Contact() {
  return (
    <div
      className="container mx-auto max-w-7xl px-24 py-16 rounded-lg bg-gray-900 text-center "
      id="contact_me">
      <h1 class="text-5xl font-bold pt-3"> Do you have an idea </h1>
      <h1 class="text-5xl font-bold pb-3 mb-3">  you want to bring to life ?  </h1>

      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class="inline-block rounded-full bg-gray-500 px-6 py-3 text-xs font-medium uppercase leading-normal text-white hover:bg-green-500" >
        Connect with me
      </button>
    </div>
  );
}

export default Contact;
