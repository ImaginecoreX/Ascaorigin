import React from 'react'
import { Poppins } from "next/font/google";
import AddOnsCard from './AddOnsCard';
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const AddOns = () => {
  return (
    <section className={`${poppins.className} w-full  flex flex-col items-center`}>
      <div className='frame-container flex gap-20'>

        {/* LEFT TEXT */}
        <div className='w-2/6 min-h-screen box-border pt-[160px] pb-[160px]'>

          <div className='text-[4rem] outline-text font-black italic pl-3 leading-[48px]'>PROJECT  →</div>
          <div className='text-[4rem] font-black text-prime leading-[48px] pt-3'>ADD-ONS</div>

          <p className='mt-20 text-[1.25rem] text-prime'>Depending on the state of the idea, some concepts might benefit from additional services we have to offer. There add-ons are a part of a larger scope and they are instrumental in the success of the concept.</p>

          <button className='text-[15px] font-bold bg-point py-3 px-5 rounded-full mt-24'>Order a Concept →</button>

        </div>

        {/* RIGHT CARDS */}
        <div className='w-4/6 min-h-screen box-border pt-[160px] pb-[160px] grid grid-cols-2 gap-[16px]'>

          <div className='relative'>
            <div className='bg-pointB rounded-[24px]  h-20 w-full -z-10 absolute top-[-24px] flex  justify-center'>
              <div className='text-[14px] font-bold mt-[2px]'>PREMIUM</div>
            </div>
            <AddOnsCard />
          </div>
          
          <AddOnsCard />
          <AddOnsCard />
          <AddOnsCard />
          <AddOnsCard />
          <AddOnsCard />

        </div>

      </div>
    </section>
  )
}

export default AddOns