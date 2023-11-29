import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Learning_Marquee() {
  return (
    <div class="container mx-auto px-10">
      {" "}
      <Marquee pauseOnHover="true" speed="150">
        <Image
          src="/images/svelte.png"
          width={50}
          height={40}
          className="m-8"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/angular.png"
          width={50}
          height={40}
          className="m-8"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/csharp.png"
          width={50}
          height={40}
          className="m-8"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/powerbi.png"
          width={50}
          height={40}
          className="m-8"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/springboot.png"
          width={50}
          height={40}
          className="m-8"
          alt="profile_img"
        />{" "}
      </Marquee>
    </div>
  );
}

export default Learning_Marquee;
