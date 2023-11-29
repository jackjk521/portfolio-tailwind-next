import React from "react";
import Image from "next/image";

function Interests() {
  return (
    <React.Fragment>
      <h1 class="font-playfair-display text-2xl font-bold p-5 text-center"> Interests </h1>
      <div class="flex items-center">
        <div class="flex space-x-4">
          <Image
            src="/images/finance_icon.gif"
            width={150}
            height={0}
            // className="rounded-full"
            alt="finance_icon"
          />
        </div>
        <div class="flex space-x-4">
          <Image
            src="/images/weights_icon.png"
            width={150}
            height={0}
            // className="rounded-full"
            alt="weights_icon"
          />
        </div>
        <div class="flex space-x-4">
          <Image
            src="/images/celebrate_icon.gif"
            width={150}
            height={0}
            // className="rounded-full"
            alt="celebrate_icon"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Interests;
