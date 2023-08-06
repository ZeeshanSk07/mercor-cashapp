import React, { useState } from "react";
import vector from "../Images/Vector.png";
import dollar from "../Images/logo.png";
import eye from "../Images/eye button.png";
import { CgMenuGridO } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";
import cube from "../Images/intro-cube 1.png";
import cubebig from "../Images/intro-cubes 1.png";
import pillar from "../Images/intro-pillar 1.png";
import stairs from "../Images/intro-stairs 1.png";
import phone from "../Images/intro-phone 1.png";
import twitter from "../Images/Frame (1).png";
import social from "../Images/Frame.png";
import insta from "../Images/Frame (2).png";
import { BsArrowDown } from "react-icons/bs";

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
              <ul className="flex-row flex space-x-6 font-[800] tracking-[0.5px] text-[0.75rem]">
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
            <ul className={`text-[#00D54B] absolute z-20 bg-white bg-opacity-90 pb-[44.45%] pt-28 -mt-20 md:hidden ${open ? '-right-full' : 'right-0'} transform transition ease-linear duration-100 absolute flex-col text-center flex font-[800] leading-[0.5px] uppercase text-[1rem]`}>
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
              className="w-[12.5rem] h-[16.30625rem] md:block hidden md:mt-0 -mt-16 mb-4 md:ml-0 ml-28 mr-56"
            />
          </div>
          <div className="md:w-auto md:h-auto mx-auto text-center absolute -z-10 md:z-0 md:relative mt-12 md:ml-auto -ml-28 md:-mt-40 uppercase  ">
            <div className="md:text-[12.0625rem] text-[6rem] font-[800] md:w-[44.4375rem] tracking-widest md:h-[18.93rem] leading-[10.375rem] md:mr-52 md:pb-8 pb-4 mt-8 -mr-10">
              CASh
            </div>
            <img
              src={phone}
              className="md:-mt-[21.4rem] -mt-36 pr-20 md:pr-0 ml-48 mb-6 w-60 h-40 md:w-[23.125rem] md:h-[28.3175rem]"
            />
            <div className="md:text-[12.0625rem] text-[6rem] font-[800] md:w-[44.4375rem] md:h-[18.93rem] tracking-wider md:-mt-72 -mt-36 mb-16 md:mr-56 -mr-8 leading-[10.375rem]">
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
        <div className="w-screen md:pr-[9%] md:px-0 px-7 bottom-0 sticky overflow-hidden md:overflow-visible h-[4.5rem] md:ml-0 -ml-10 flex flex-row justify-between -mt-20">
          <div className="flex flex-row md:justify-between justify-between md:w-auto w-full my-auto py-[1.5625rem] md:space-x-6 uppercase font-Agandir font-[800]">
            <div className="flex border-[1px] border-[#FFFFFF] md:w-[10.625rem] min-w-fit bg-[#000000] py-auto md:px-auto px-3 rounded-[0.4375rem] justify-center p-2">
              <AiFillApple color="#00D54B" size="22" className="mr-2 my-auto" />
              App Store
            </div>
            <div className="flex border-[1px] border-[#FFFFFF] md:w-[10.625rem] min-w-fit bg-[#000000] my-auto rounded-[0.4375rem] justify-center p-2">
              <BsGooglePlay color="#00D54B" className="mr-2 my-auto" />
              Google Play
            </div>
          </div>

          <div className="ml-64 p-4 md:block hidden">
            <BsArrowDown color="#00D54B" size="35" />
          </div>

          <div className="md:flex hidden flex-row">
            <div className="font-Mulish text-[#B6B6B6] leading-[0.8125rem] px-1.5 mr-16 text-[0.625rem] w-[22.6875rem]">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </div>

            <div className="md:flex hidden flex-row my-auto justify-between space-x-12 mr-12 p-2">
              <img src={insta} />
              <img src={twitter} />
              <img src={social} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
