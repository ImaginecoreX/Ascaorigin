import React from 'react';
import { Poppins } from "next/font/google";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { AllQAs } from '@/util/qa/QA';
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


const QA = () => {
  return (
    <section className={`${poppins.className} w-full h-auto box-border py-[120px] flex flex-col items-center`}>
      <div className='frame-container'>

        <div className='text-[4rem] mobileView:text-[2.4rem] font-black text-prime leading-[60px] w-full box-border pb-[80px] mobileView:leading-[48px] mobileView:pb-6 border-b border-[#ffffff24]'>FREQUENTLY<br /> ASKED →<br /> QUESTIONS</div>

        <div>
          <Accordion type="single" collapsible className="w-full text-white">
            
            {AllQAs.map((data:AllQAsProps, index)=>(
              <AccordionItem value={data.value} key={index}>
              <AccordionTrigger className='text-[2rem] mobileView:text-[1.5rem] mobileView:w-10/12 mobileView:text-start'>{data.title}</AccordionTrigger>
              <AccordionContent className='text-[1rem] text-prime leading-[30px]'>
              {data.description}
              </AccordionContent>
            </AccordionItem>
            ))}
            
            
          </Accordion>
        </div>

      </div>
    </section>
  )
}

export default QA;