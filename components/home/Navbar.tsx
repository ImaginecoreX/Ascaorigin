import React from 'react';
import { Pacifico, Quando } from 'next/font/google';

const pacifico = Pacifico({weight:['400'],subsets:['latin']});
const quando = Quando({weight:['400'], subsets:['latin']});

const Navbar = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='frame-container flex items-center justify-between mt-10'>

        <div className={`${pacifico.className} text-white text-[1.5rem]`}>Ascaorign</div>

        <div className={`${quando.className} text-[15px] flex items-center gap-12 text-white`}>
          <div>How It’s Done</div>
          <div>Recent Concepts</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>

      </div>
    </div>
  )
}

export default Navbar