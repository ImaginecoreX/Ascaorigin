import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const RecentIdeas = () => {
  return (
    <section className="flex flex-col min-h-screen frame-container">
      <div className={`${poppins.className} flex flex-col`}>
        <p className="outline-text text-[40px] font-black italic leading-[48px] uppercase">
          RECENT →
        </p>
        <p className="text-[40px] font-black  text-prime leading-[48px] uppercase">
          ideas
        </p>
      </div>
      <div className=" w-full flex flex-col  mobileView:items-center mdUp:flex-row">
        {/* LEFT */}
        <div
          className={`${poppins.className}  w-2/5 mobileView:w-full  flex flex-col  box-border p-[5rem]`}
        >
          <label className="text-[24px] font-bold text-prime leading-[48px] mb-[14px]">
            Car Rental Service App
          </label>
          <p className="text-[15px] font-normal text-white mb-[26px] ">
            Developed a concept for a car rental mobile app, allowing users to
            book vehicles across the world hassle-free. The filtering system
            assists in finding a suitable car quickly.
          </p>
          <div className=" flex flex-col">
            <p className="text-[15px] font-medium text-prime">
              → Design for 4 main screens
            </p>
            <p className="text-[15px] font-medium text-prime">
              → Presentation-ready asset
            </p>
            <p className="text-[15px] font-medium text-prime">
              → Ready for development assets
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-3/5">
          <Image
            src={"/idea01.svg"}
            width={0}
            height={0}
            alt="ideas"
            loading="lazy"
            className="set-bg-cover"
          />
        </div>
      </div>

      {/* 2////// */}

      <div className=" w-full  mobileView:items-center mdUp:flex-row flex flex-col">
        {/* LEFT */}
        <div className="  hidden mdUp:w-3/5">
          <Image
            src={"/idea02.svg"}
            width={0}
            height={0}
            alt="ideas"
            loading="lazy"
            className="set-bg-cover"
          />
        </div>

        {/* RIGHT */}
        <div
          className={`${poppins.className} mdUp:w-2/5 w-full  flex flex-col  box-border p-[5rem]`}
        >
          <label className="text-[24px] font-bold text-prime leading-[48px] mb-[14px]">
            Car Rental Service App
          </label>
          <p className="text-[15px] font-normal text-white mb-[26px] ">
            Developed a concept for a car rental mobile app, allowing users to
            book vehicles across the world hassle-free. The filtering system
            assists in finding a suitable car quickly.
          </p>
          <div className=" flex flex-col">
            <p className="text-[15px] font-medium text-prime">
              → Design for 4 main screens
            </p>
            <p className="text-[15px] font-medium text-prime">
              → Presentation-ready asset
            </p>
            <p className="text-[15px] font-medium text-prime">
              → Ready for development assets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentIdeas;
