import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })


const GetStarted = () => {
  return (
    <section className='min-h-[787px] w-full flex flex-col items-center justify-center '>
      <div className={`frame-container ${poppins.className}`}>

        {/* top */}
        <div className='flex items-center w-full justify-between'>

          {/* LEFT */}
          <div>
            <div className='text-[4rem] font-black text-prime'><span className='outline-text italic pr-3'>JUST</span> ONE WEEK <span className='outline-text italic pl-2'>FROM</span></div>
            <div className='text-[4rem] font-black text-prime'>START <span className='outline-text italic pr-3'> → TO </span>FINISH</div>
          </div>

          {/* Right */}
          <div className='w-[180px] h-[180px]  rounded-full border-2 border-point flex flex-col items-center justify-center text-point font-bold text-[1.5rem]'>
            <div>→ GET ←</div>
            <div>STARTED</div>
          </div>


        </div>

        {/* steps */}
        <div className='flex mt-16 box-border pb-16 border-b-[3px] border-[#3A3A3A] border-dashed relative'>

          {/* step 1 */}
          <div className='w-1/5 '>

            <div className='text-[15px] font-medium text-prime'>Day 1</div>
            <div className='text-[1.25rem] font-bold text-prime mt-3'>The Entrance</div>

            <div className='absolute w-10 h-10 bottom-[-20px] left-0 rounded-full border-2 border-point flex justify-center items-center'>
              <div className='w-7 h-7 rounded-full bg-point'></div>
            </div>

          </div>

          {/* step 2 */}
          <div className='w-1/5'>
            <div className='text-[15px] font-medium text-prime'>Day 2</div>
            <div className='text-[1.25rem] font-bold text-prime mt-3'>The Kick-Off</div>

            <div className='absolute w-10 h-10 bottom-[-20px] left-1/5 rounded-full border-2 border-point flex justify-center items-center'>
              <div className='w-7 h-7 rounded-full bg-point'></div>
            </div>
          </div>

          {/* step 3 */}
          <div className='w-2/5'>
            <div className='text-[15px] font-medium text-prime'>Day 3 → 6</div>
            <div className='text-[1.25rem] font-bold text-prime mt-3'>Design Concept</div>

            <div className='absolute w-10 h-10 bottom-[-20px] left-2/5 rounded-full border-2 border-point flex justify-center items-center'>
              <div className='w-7 h-7 rounded-full bg-point'></div>
            </div>
          </div>

          {/* step 4 */}
          <div className='w-1/5'>
            <div className='text-[15px] font-medium text-prime'>Day 7</div>
            <div className='text-[1.25rem] font-bold text-prime mt-3'>Rollout</div>

            <div className='absolute w-10 h-10 bottom-[-20px] left-4/5 rounded-full border-2 border-point flex justify-center items-center'>
              <div className='w-7 h-7 rounded-full bg-point'></div>
            </div>
          </div>

        </div>


        {/* steps description */}
        <div className='flex mt-16 text-prime '>
          {/* step 1 des */}
          <div className='w-1/5 box-border pr-10'>
            <div>Within 1-2 business days, we’ll reach out to you and schedule meeting to discuss details.</div>
          </div>
          {/* step 2 des */}
          <div className='w-1/5 box-border pr-10'>
            <div>At this stage, we’ll discuss with you all the details and issues needed to start the concept creating process.</div>
          </div>
          {/* step 3 des */}
          <div className='w-2/5 box-border pr-16'>
            <div>Considering the required scope of work and your business needs, we develop a quick and scalable solution.</div>
          </div>
          {/* step 4 des */}
          <div className='w-1/5 box-border pr-10'>
            <div>We deliver finalized concept assets according to the required scope 1 week after the project start.</div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default GetStarted