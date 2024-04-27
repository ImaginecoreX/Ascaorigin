import React from 'react';
import { Poppins } from "next/font/google";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


const QA = () => {
  return (
    <section className={`${poppins.className} w-full h-auto box-border py-[120px] flex flex-col items-center`}>
      <div className='frame-container'>

        <div className='text-[4rem] font-black text-prime leading-[60px] w-full box-border pb-[80px] border-b border-[#ffffff24]'>FREQUENTLY<br /> ASKED →<br /> QUESTIONS</div>

        <div>
          <Accordion type="single" collapsible className="w-full text-white">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className='text-[2rem]'>What is a concept, and what does it include?</AccordionTrigger>
              <AccordionContent className='text-[1rem] text-prime leading-[30px]'>
              A concept is an idea wrapped in a design. Depending on the complexity of the product, it’s either 3-5 informational blocks (landing page), 2-5 mobile screens (mobile app), or 2 primary screens (dashboard). If to be recognized the idea requires animation — it can be added free of charge. ‍ It can be used as promo materials, you can showcase them to stakeholders and investors, and it can be easily scalable to your project MVP. It can be used by: first-time entrepreneurs, developers in need of UI design, tech professionals looking to venture out, side hustlers, founders looking for VC, designers who need a detached view, look, and everyone who could use a great design concept. ‍ Webflow implementation allows you to get a fully functional and deployed website developed by our team on Webflow. ‍ One of the main requirements allowing us to charge such a competitive price is limited edits per concept. We can do small changes to the copy and layouts but every significant pivot should happen on terms different from the initial agreement.
              </AccordionContent>
            </AccordionItem>
            
            
          </Accordion>
        </div>

      </div>
    </section>
  )
}

export default QA