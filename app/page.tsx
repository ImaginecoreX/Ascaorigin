import React from "react";
import Image from "next/image";
import Navbar from "../components/home/Navbar";
import HeroText from "@/components/home/HeroText";
import HeroDisplay from "@/components/home/HeroDisplay";
import GetStarted from "@/components/home/GetStarted";
import About from "@/components/home/About";



export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <Navbar />

      {/* HERO TEXT ------------------------------------------------>> */}
      <HeroText/>
      {/* HERO Display ------------------------------------------------>> */}
      <HeroDisplay/>

      {/* About Section------------ */}
      <About />
      {/* About Section------------ */}


      {/* Get Started - Steps we take */}
      <GetStarted/>

    </main>
  );
}
