import React from "react";
import vector3 from "../Images/Vector (3).png";
import stock from "../Images/investing-stocks.png";
import bitcoin from "../Images/investing-bitcoin.png";
import vectorsec5 from "../Images/Vector (4).png";
import vectorsec52 from "../Images/Vector (5).png";
import graph1 from "../Images/investing-graph-1.png";
import graph2 from "../Images/investing-graph-2.png";
import graph3 from "../Images/investing-graph-3 1.png";

const Section6 = () => {
  return (
    <>
      <div
        style={{ boxSizing: "border-box" }}
        className="h-screen md:w-auto min-w-fit cursor-auto m-0 p-0 overflow-hidden"
      >
        <div className="w-screen md:h-[55%] h-[60%] bg-[#00D54B] mix-blend-overlay">
          <div style={{ position: "absolute", zIndex: -1 }} className="md:-mt-24">
            <img src={vector3} className="md:w-screen w-[100rem] md:h-auto h-[100vh]" alt="Vector" />
          </div>


          <div className="flex flex-row-reverse w-fit md:w-auto justify-between px-[5rem] bottom-0">
              <div className="md:p-6 md:hidden md:h-[8.5rem] h-auto md:mx-4 mx-44 pl-2 md:pl-auto md:mr-auto pt-1 md:pt-auto -mr-40 md:mt-4 mt-52">
                <div className="font-Agrandir font-[800] leading-[2.5rem] text-[1.2rem] md:text-[1.375rem]">
                  Bitcoin
                </div>
                <div className="md:text-[1rem] text-[0.85rem]">
                  Cash App is the fastest way to<br /> convert
                   dollars to bitcoin. From<br />  your home screen,
                  six taps are<br /> all it takes to stack sats, buy an<br/>
                   entire bitcoin, or just see what<br/> it’s all about.
                </div>
              </div>

              <div className="md:-ml-32 -ml-12 md:mt-auto mt-44">
                <img
                  src={bitcoin}
                  style={{ zIndex: 1 }}
                  className="absolute w-[10rem]"
                />
              </div>
          </div>
        </div>

        <div className="w-screen h-[45%] md:mt-auto mt-2 overflow-hidden">
          <div className="mix-blend-overlay">
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-0.25 mt-1 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-4 mt-6 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-6 mt-12 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-8 mt-20 bg-[#000000] "></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-20 mt-28 bg-[#000000] "></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-36 mt-40 bg-[#000000]"></div>
          </div>

          <div className="mix-blend-overlay -mt-80 pt-3">
            <img src={vectorsec5} className="md:opacity-30 opacity-50 md:pl-10 md:h-[20.15rem] h-[18rem] md:mt-auto -mt-40 -pl-20" />
            <img
              src={vectorsec52}
              className="-mt-60 ml-4 h-[20.15rem] opacity-30"
            />
          </div>

          <div className="-mt-96 w-screen md:block hidden">
            <img src={graph1} className="absolute -mt-10 w-[47%]" />
            <img
              src={graph2}
              className="absolute right-0 -mt-[28.6%] w-[21%] "
            />
            <img src={graph3} className="absolute right-0 -mt-8 w-[30%]" />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Section6;
