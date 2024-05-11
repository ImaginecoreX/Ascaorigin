"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Input } from "../ui/input";
import packge from "@/data/packge.json";
import { useState } from "react";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


const Footer = () => {
  const [selectPackge, setSelectPackge] = useState<{}>([]);

  const [price, setPrice] = useState(0);

  console.log(selectPackge);

  return (
    <footer className={`${poppins.className} flex flex-col  frame-container`}>
      <div className=" flex flex-col mobileView:items-center mdUp:flex-row w-full">
        {/* LEFT */}
        <div className="mdUp:w-2/6 w-full flex flex-col">
          <div className="text-[4rem] font-black text-prime leading-[48px]">
            DROP → 
          </div>
          <div className="text-[4rem] font-black text-prime leading-[48px] pt-3">
            US A LINE
          </div>

          <p className="text-[20px] font-normal text-prime mt-[100px]">
            Introduce yourself, your project/idea, and explain why it matters to
            you and everyone else.
          </p>
        </div>
        {/* RIGHT */}
        <div className="mdUp:w-4/6 w-full flex flex-col gap-[30px] box-border p-[10px]">
          <Input
            type="Email"
            placeholder="Email"
            className="bg-[#131313] rounded-[25px]"
          />
          <textarea
            placeholder="Describe your idea"
            className="bg-[#131313] p-[10px] rounded-[25px] h-[100px]"
          />

          <label className=" text-[20px] font-bold text-white">
            Project add-ons
          </label>

          <div className=" w-full grid grid-cols-5 gap-1">
            {packge.map((data: any, index) => (
              <div
                key={data.id}
                onClick={() => {
                  setPrice(price + parseInt(data.price));
                  selectPackge?.push(data);
                }}
                className="h-[50px] hover:border hover:border-[#ffff] flex  rounded-full justify-center items-center box-border p-[2px]  bg-[#131313]"
              >
                <label className="text-[16px] font-medium text-white">
                  {data.name}
                </label>
              </div>
            ))}
          </div>

          <div className=" w-full flex gap-[10px] ">
            <button className="bg-point text-[15px] font-bold py-3 px-5 rounded-full mt-10">
              Submit your idea →
            </button>
            <div className=" flex flex-col gap-2 justify-center items-center">
              <div className=" flex flex-row">
                <p className="text-[16px] font-medium text-white">
                  Estimated cost & time →
                </p>
                <p className="text-[16px] font-medium text-[#FFBC0E]">
                  ${price}
                </p>
              </div>
             
            </div>
          </div>

          <div className=" w-full grid grid-cols-5 gap-1">
                {selectPackge.map((data: any) => (
                  <div
                    key={data.id}
          
                    className="h-[50px] hover:border hover:border-[#ffff] flex  rounded-full justify-center items-center box-border p-[2px]  bg-[#ffda37]"
                  >
                    <label className="text-[16px] font-medium text-white">
                      {data.name}
                    </label>
                  </div>
                ))}
              </div>
        </div>
      </div>

      <div className="w-full flex justify-between mt-[100px]">
        <div className=" text-[16px] font-medium text-white">
          Instagram • Dribbble • WA
        </div>
        <div className="text-[16px] font-medium text-white">
          Made By <p className="text-[#FFBC0E]">ImaginecoreX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
