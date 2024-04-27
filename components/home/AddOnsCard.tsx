import React from 'react';
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const AddOnsCard = ({description,price,time,title}:AddOnsCardProps) => {
  return (
    <div className={`${poppins.className} w-full bg-shade rounded-[1.5rem] box-border px-[30px] py-[30px] h-fit`}>

      <div className='box-border pb-[26px] border-b border-[#ffffff12]'>
        <div className='text-[1.25rem] font-bold text-white'>{title?title:"Pitch Deck"}</div>
        <p className='text-[15px] text-white opacity-[64%] mt-3'>{description?description:"We will write and design an engaging presentation of your concept for your key audience."}</p>
      </div>

      <div className='mt-6'>
          <div className='text-[15px] text-white flex justify-between items-center'>
            <div className='opacity-65'>Estimated time</div>
            <div >{time?time:"1w"}</div>
          </div>

          <div className='text-[15px] text-white flex justify-between items-center mt-4'>
            <div className='opacity-65'>Price</div>
            <div>{price?price:"$1,500"}</div>
          </div>
      </div>

    </div>
  )
}

export default AddOnsCard