import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })


const GetStarted = () => {
  return (
    <section className='min-h-[787px] w-full flex flex-col items-center'>
      <div className={`frame-container ${poppins.className}`}>

      {/* top */}
      <div>

        {/* LEFT */}
        <div>
          <div className='text-[4rem] font-black text-prime'><span className='outline-text italic pr-3'>JUST</span> ONE WEEK <span className='outline-text italic pl-2'>FROM</span></div>
          <div className='text-[4rem] font-black text-prime'>START <span className='outline-text italic pr-3'> → TO </span>FINISH</div>
        </div>
        
        {/* Right */}
        <div>
          <div className='w-[180px] h-[180px]  rounded-full border-2'></div>
        </div>
        
      </div>


      </div>
    </section>
  )
}

export default GetStarted