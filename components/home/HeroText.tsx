import React from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

const HeroText = () => {
  return (
    <div className="flex w-full flex-col items-center h-[350px] mt-[28px] ">
      <div className="frame-container  flex items-center justify-between mt-[71px]">

        {/* LEFT TEXT */}
        <div className={`${poppins.className} `}>

          <div>
            <div className="outline-text text-[2.5rem] font-black italic leading-[48px]">STARTUP-READY </div>
            <div className="text-[2.5rem] font-black  text-prime leading-[48px]">CONCEPT <span className="outline-text ml-2 mr-3 italic">FOR</span> $499</div>
            <div className="text-[2.5rem] font-black  text-prime leading-[48px]"><span className="outline-text mr-2 italic">WITHIN</span> <span className="mr-2">→</span> ONE WEEK</div>
          </div>

        </div>

        {/* RIGHT */}
        <div className={`${poppins.className} w-2/6`}>

          <div className='text-prime'>Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine.</div>

          <button className='bg-point text-[15px] font-bold py-3 px-5 rounded-full mt-10'>Order a Concept →</button>

        </div>

      </div>
    </div>
  )
}

export default HeroText