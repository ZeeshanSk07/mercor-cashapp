import React, { useState } from "react";
import vector from "../Images/Vector.png";
import dollar from "../Images/logo.png";
import eye from "../Images/eye button.png";
import { CgMenuGridO } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

import cube from "../Images/intro-cube 1.png";
import cubebig from "../Images/intro-cubes 1.png";
import pillar from "../Images/intro-pillar 1.png";
import stairs from "../Images/intro-stairs 1.png";
import phone from "../Images/intro-phone 1.png";


const Hero = () => {
  const [open, setopen] = useState(true);
  return (
    <>
      <div className="h-screen w-screen absolute bg-[#000000] font-Agrandir z-0 text-[#FFFFFF] p-8 px-10 md:p-6 md:px-20 cursor-auto overflow-hidden">
        <div
          style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
          className="-mt-8"
        >
          <img src={vector} className="w-screen h-[54.4375rem] " alt="Vector" />
        </div>
        {/* header */}
        <div className="flex flex-row justify-between ">
          <img
            src={dollar}
            alt="Dollar"
            className="w-[1.875rem] h-[2.75rem]"
          ></img>
          {/* navbar */}
          <div className="my-auto">
            
            <div className="uppercase my-auto md:flex hidden">
              <ul className="flex-row font-['Agrandir'] flex space-x-6 font-[800] tracking-[0.5px] text-[0.75rem]">
                <li>Sign In</li>
                <li>Legal</li>
                <li>Licenses</li>
                <li>Security</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Support</li>
                <li>Status</li>
                <li>Codeblog</li>
              </ul>
            </div>
          </div>
          <img src={eye} alt="View" className="w-[4rem] h-[2.25rem] md:mt-0 mt-1"></img>
          <div className={`flex md:hidden ml-6 mr-10 ${!open ? 'bg-white' : ''}`} onClick={() => {setopen(!open)}}>
              {open ? (
                <CgMenuGridO size={46} color="#00D54B" className="absolute" />
              ) : (
                <RxCross2 size={44} color="#00D54B" className="absolute z-30" />
              )}
            </div>
        </div>
        {!open ? (
          <div>
            <ul className={`text-[#00D54B] h-full absolute z-20 bg-white bg-opacity-90 pb-[44.45%] pt-28 -mt-20 ${!open ? 'right-0': open ? '-right-20' : ''} md:hidden ease-linear duration-300 absolute flex-col text-center flex font-[800] leading-[0.5px] uppercase text-[1rem]`}>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Sign In
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Legal
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Licenses
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Security
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Careers
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Press
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Support
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Status
              </li>
              <li className="py-5 px-16 w-auto border-white border-[1px]">
                Codeblog
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        {/* center */}
        <div className="flex flex-col ml-2 w-screen h-screen px-[12%] justify-between">
          <div className="md:flex flex-row justify-evenly md:justify-between">
            <img
              src={cube}
              className="w-[4.625rem] h-[4.575625rem] md:mt-0 mt-8 -ml-12 md:-ml-4"
            />
            <img
              src={stairs}
              className="w-[12.5rem] h-[16.30625rem] md:block hidden md:mt-0 -mt-16 mb-4 md:ml-0 ml-28 mr-32"
            />
          </div>
          <div className="md:w-auto md:h-auto mx-auto text-center absolute -z-10 md:z-0 md:relative mt-12 md:ml-auto -ml-28 md:-mt-40 uppercase  ">
            <div className="md:text-[12.0625rem] font-['Agrandir'] text-[5rem] font-[800] md:w-[44.4375rem]  md:h-[18.93rem] leading-[10.375rem] md:mr-52 md:pb-8 pb-4 mt-8 -mr-10">
              CASh
            </div>
            <img
              src={phone}
              className="md:-mt-[23rem] -mt-36 pr-20 md:pr-0 md:ml-48 ml-44 mb-6 w-60 h-40 md:w-[23.125rem] md:h-[28.3175rem]"
            />
            <div className="md:text-[12.0625rem] text-[5rem] font-[800] md:w-[44.4375rem] md:h-[18.93rem] font-['Agrandir'] md:-mt-64 -mt-36 mb-16 md:mr-56 -mr-8 leading-[10.375rem]">
              APp
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <img
              src={cubebig}
              className="w-[11.75rem] h-[11.03rem] -mt-96 pt-4 md:pt-0 md:-mt-56 ml-6  md:-ml-20"
            />
            <img
              src={pillar}
              className="w-[17.5rem] h-[20.6175rem] md:flex hidden mr-80 -mt-64 shadow-[0_0.25rem_0.25rem_0_rgba(0, 0, 0, 0.25)"
            />
          </div>
        </div>

        {/* footer */}
        
      </div>
    </>
  );
};

export default Hero;
