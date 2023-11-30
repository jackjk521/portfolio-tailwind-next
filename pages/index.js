import React from "react";
import { Inter } from "next/font/google";
// Components
import BentoSquare from "@/components/utlity/bento_square";
import Works from "@/components/works";
import About from "@/components/about";
import TechStack from "@/components/tech_stack";
import Contact from "@/components/contact";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <About />
      <TechStack />
      <Works />
      <Contact />
    </React.Fragment>
  );
}
