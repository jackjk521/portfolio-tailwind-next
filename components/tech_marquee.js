import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Tech_Marquee() {
  return (
    <div class="container mx-auto px-10">
      {" "}
      <Marquee pauseOnHover="true" speed="150">
        <Image
          src="/images/bluehost.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/django.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/nextjs.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/laravel.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/postgres.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
        <Image
          src="/images/python.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
         <Image
          src="/images/tailwindcss.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
         <Image
          src="/images/wordpress.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
         <Image
          src="/images/nodejs.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
         <Image
          src="/images/azure.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
         <Image
          src="/images/java.png"
          width={60}
          height={40}
          className="m-4"
          alt="profile_img"
        />{" "}
      </Marquee>
    </div>
  );
}

export default Tech_Marquee;
