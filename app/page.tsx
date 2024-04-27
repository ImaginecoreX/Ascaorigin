import React from "react";
import Image from "next/image";
import Navbar from "../components/home/Navbar";
import HeroText from "@/components/home/HeroText";
import HeroDisplay from "@/components/home/HeroDisplay";
import Concept from "@/components/home/Concept";
import GetStarted from "@/components/home/GetStarted";
import About from "@/components/home/About";
import OurValues from "@/components/home/OurValues";
import AddOns from "@/components/home/AddOns";
import QA from "@/components/home/QA";


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <Navbar />

      {/* HERO TEXT ------------------------------------------------>> */}
      <HeroText />
      {/* HERO Display ------------------------------------------------>> */}
      <HeroDisplay />

      {/* About Section------------ */}
      <About />
      {/* About Section------------ */}

      {/* Concept Section------------ */}
      <Concept />
      {/* Concept Section------------ */}

      {/* Get Started - Steps we take */}
      <GetStarted/>

      {/* OUR VALUES */}
      <OurValues/>

      {/* Project Service Add-Ons */}
      <AddOns/>

      {/* FREQUENTLY ASKED → QUESTIONS */}
      <QA/>

    </main>
  );
}
