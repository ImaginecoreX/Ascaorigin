import { Poppins } from "next/font/google";
import conceptData from "@/data/concept.json"
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Concept = () => {
  return (
    <section className="flex flex-row min-h-screen frame-container">
      {/* LEFT SECTION */}
      <div className="nsTsm:w-full w-1/3 flex flex-col box-border p-[2rem] gap-2">
        {/* what you'll get as a result */}
        <div className={`${poppins.className}`}>
          <p className="outline-text text-[40px] font-black italic leading-[48px] uppercase">
            what you'll
          </p>
          <p className="text-[40px] font-black  text-prime leading-[48px] uppercase">
            get
          </p>
          <p className="outline-text text-[40px] font-black italic leading-[48px] uppercase">
            as a
          </p>
          <p className="text-[40px] font-black  text-prime leading-[48px] uppercase">
            result
          </p>
        </div>

        <button className='bg-point text-[15px] font-bold py-3 px-5 rounded-full mt-10'>Order a Concept →</button>
      </div>
      {/* RIGHT SECTION */}
      <div className="w-2/3 nsTsm:w-full box-border py-[40px] px-[50px] grid grid-cols-2  gap-[10px]">
        {conceptData.map((data,index)=>(
            <div className={`${poppins.className} bg-[#131313] box-border p-[20px] rounded-[50px]  h-[400px] flex flex-col gap-[20px]`}>
            <p className="text-[1rem] font-bold text-prime">{data.title}</p>
          <div>
          <p className="text-[1rem] font-normal text-prime  overflow-x-hidden">{data.description}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Concept;
