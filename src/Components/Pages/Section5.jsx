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
        className="h-screen md:w-auto min-w-fit cursor-auto m-0 p-0 overflow-hidden"
      >
        <div className="w-screen md:h-[55%] h-[60%] bg-[#00D54B] mix-blend-overlay">
          <div style={{ position: "absolute", zIndex: -1 }} className="md:-mt-24">
            <img src={vector3} className="md:w-screen w-[100rem] md:h-auto h-[100vh]" alt="Vector" />
          </div>

          <div className="font-[800] font-Agrandir text-[#FFFFFF] text-center justify-center text-[2.5rem] flex leading-[2.5rem] md:pt-24 pt-20 pb-16">
            Investing
          </div>

          <div className="flex flex-row w-fit md:w-auto justify-between px-[5rem] bottom-0">
            <div className="md:p-6 md:block hidden md:h-[8.5rem] h-auto mx-4 md:ml-0 -ml-14 md:mt-4">
              <div className="font-Agrandir font-[800] leading-[2.5rem] text-[1.2rem] md:text-[1.375rem]">
                Stocks
              </div>
              <div className="md:text-[1rem] text-[0.85rem]">
                Whether you’re an expert or just getting
                <br /> started, Cash App is the fastest and most
                <br /> accessible way to invest in stocks. Start now
                <br /> with as little as $1.
              </div>
            </div>

            <div className="md:p-6 md:hidden md:h-[8.5rem] h-auto mx-4 md:ml-0 -ml-14 md:mt-4 mt-10">
              <div className="font-Agrandir font-[800] leading-[2.5rem] text-[1.2rem] md:text-[1.375rem]">
                Stocks
              </div>
              <div className="md:text-[1rem] text-[0.85rem]">
                Whether you’re an expert or just<br /> getting
                 started, Cash App is the <br />fastest and most
                 accessible way<br /> to invest in stocks. Start now
                 with<br/> as little as $1.
              </div>
            </div>

            <div className="md:-ml-32">
              <img
                src={stock}
                style={{ zIndex: 1 }}
                className="absolute w-[10rem]"
              />
            </div>
            <div className="ml-16 md:block hidden">
              <img
                src={bitcoin}
                style={{ zIndex: 1 }}
                className="absolute w-[10rem]"
              />
            </div>

            <div className="p-6 h-[8.5rem] md:block hidden mr-20 mt-4">
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

        <div className="w-screen h-[45%] md:mt-auto mt-2 overflow-hidden">
          <div className="mix-blend-overlay">
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-0.25 mt-1 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-4 mt-6 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-6 mt-12 bg-[#000000]"></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-8 mt-14 bg-[#000000] "></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-20 mt-16 bg-[#000000] "></div>
            <div className=" md:w-screen w-[3wh] h-[0.12rem] bg-opacity-10 md:mt-36 mt-20 bg-[#000000]"></div>
          </div>

          <div className="mix-blend-overlay -mt-80 pt-3">
            <img src={vectorsec5} className="md:opacity-30 opacity-50 md:pl-10 md:h-[20.15rem] h-[18rem] -pl-14" />
            <img
              src={vectorsec52}
              className="-mt-60 ml-4 h-[20.15rem] md:block hidden opacity-30"
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

export default Section5;
