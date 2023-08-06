import React from "react";
import vector3 from "../Images/Vector (3).png";
import stock from "../Images/investing-stocks.png";
import bitcoin from "../Images/investing-bitcoin.png";
import vectorsec5 from "../Images/Vector (4).png";
import vectorsec52 from "../Images/Vector (5).png";
import graph1 from "../Images/investing-graph-1.png";
import graph2 from "../Images/investing-graph-2.png";
import graph3 from "../Images/investing-graph-3 1.png";

const Section5 = () => {
  return (
    <>
      <div
        style={{ boxSizing: "border-box" }}
        className="h-screen w-auto cursor-auto m-0 p-0 overflow-hidden"
      >
        <div className="w-screen h-[55%] bg-[#00D54B] mix-blend-overlay">
          <div style={{ position: "absolute", zIndex: -1 }} className="-mt-24">
            <img src={vector3} className="w-screen" alt="Vector" />
          </div>

          <div className="font-[800] font-Agrandir text-[#FFFFFF] text-center justify-center text-[2.5rem] flex leading-[2.5rem] pt-24 pb-16">
            Investing
          </div>

          <div className="flex flex-row justify-between px-[5rem] bottom-0">
            <div className="p-6 h-[8.5rem] mx-4 mt-4">
              <div className="font-Agrandir font-[800] leading-[2.5rem] text-[1.375rem]">
                Stocks
              </div>
              <div>
                Whether you’re an expert or just getting
                <br /> started, Cash App is the fastest and most
                <br /> accessible way to invest in stocks. Start now
                <br /> with as little as $1.
              </div>
            </div>

            <div className="-ml-32">
              <img
                src={stock}
                style={{ zIndex: 1 }}
                className="absolute w-[10rem]"
              />
            </div>
            <div className="ml-16">
              <img
                src={bitcoin}
                style={{ zIndex: 1 }}
                className="absolute w-[10rem]"
              />
            </div>

            <div className="p-6 h-[8.5rem] mr-20 mt-4">
              <div className='font-"Agrandir" font-[800] leading-[2.5rem] text-[1.375rem]'>
                Bitcoin
              </div>
              <div>
                Cash App is the fastest way to convert
                <br /> dollars to bitcoin. From your home screen,
                <br /> six taps are all it takes to stack sats, buy an
                <br /> entire bitcoin, or just see what it’s all about.
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-[45%] overflow-hidden">
          <div className="mix-blend-overlay">
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-0.25 bg-[#000000]"></div>
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-4 bg-[#000000]"></div>
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-6 bg-[#000000]"></div>
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-8 bg-[#000000] "></div>
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-20 bg-[#000000] "></div>
            <div className=" w-screen h-[0.12rem] bg-opacity-10 mt-36 bg-[#000000]"></div>
          </div>

          <div className="mix-blend-overlay -mt-80 pt-3">
            <img src={vectorsec5} className="opacity-30 pl-10 h-[20.15rem]" />
            <img
              src={vectorsec52}
              className="-mt-60 ml-4 h-[20.15rem] opacity-30"
            />
          </div>

          <div className="-mt-96 w-screen">
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

export default Section5;
