import React from "react";
import Image from "next/image";
import Navbar from "../components/home/Navbar";

import { Poppins } from 'next/font/google';

const poppins = Poppins({weight:['100','200','300','400','500','600','700','800','900'], subsets: ['latin'] })


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      <Navbar/>

      {/* HERO TEXT ------------------------------------------------>> */}
      <div className="flex w-full flex-col items-center h-[350px] mt-[28px] ">
        <div className="frame-container  ">

          {/* LEFT TEXT */}
          <div className={`${poppins.className} mt-[71px]`}>

            <div>
              <div className="outline-text text-[2.5rem] font-black italic leading-[48px]">STARTUP-READY </div>
              <div className="text-[2.5rem] font-black  text-prime leading-[48px]">CONCEPT <span className="outline-text ml-2 mr-3 italic">FOR</span> $499</div>
              <div className="text-[2.5rem] font-black  text-prime leading-[48px]"><span className="outline-text mr-2 italic">WITHIN</span> <span className="mr-2">→</span> ONE WEEK</div>
            </div>

          </div>

        </div>
      </div>
      {/* HERO TEXT END --------------------------------------------->> */}


    </main>
  );
}
