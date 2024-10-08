import React from "react";
import stairs1 from "../Images/section4_img/boost-stairs-1.png";
import stairs2 from "../Images/section4_img/boost-stairs-2.png";
import phone from "../Images/section4_img/boost-phone.png";
import shoe from "../Images/section4_img/boost-shoe.png";
import hand from "../Images/section4_img/boost-hand.png";
import coffee from "../Images/section4_img/boost-coffee.png";
import card from "../Images/section4_img/boost-card.png";
import burger from "../Images/section4_img/boost-burger.png";

const Section4 = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#000000] overflow-hidden">
        <div className="flex flex-row-reverse">
          <img src={stairs1} className="md:flex md:mt-0 mt-80 right-0"/>
          <img src={stairs2} className="md:flex hidden mr-56 pr-1 mt-28" />
        </div>

        <div className="md:-mt-80 ml-[80%]">
          <img src={coffee} className="absolute md:mt-24 -mt-32 md:pt-2 pt-5 md:-ml-20 -ml-24 md:w-auto w-[2.5rem]" />
          <img src={burger} className="absolute md:-ml-44 -ml-36 md:-mt-10 -mt-44 md:w-auto w-[2.5rem]" />
          <img src={card} className="absolute md:-mt-56 -mt-60 -ml-24 pl-2 md:w-auto w-[2.5rem]" />
          <img src={shoe} className="absolute md:ml-48 ml-7 md:-mt-7 -mt-40 md:pt-0 pt-2 md:w-auto w-[2.5rem]"/>
          <img src={hand} className="absolute md:-mt-96 -mt-80 md:ml-7 -ml-10 md:pt-12 pt-3 md:w-auto w-[2.5rem]" />
        </div>

        <div className="ml-[25%]">
          <div className="absolute z-10 md:-mt-48 -mt-[130%] md:ml-auto -ml-14 text-[#FFFFFF]">
            <div className="font-[800] text-[2.5rem] leading-[2.5rem] font-Agrandir text-[#00D54B] mb-4">
              Cash Card
              <br /> & Boost
            </div>
            <div className="font-[400] font-Mulish text-[1rem] leading-[1.375rem] tracking-[0.3px]">
              The Cash Card is a free, customizable debit
              <br /> card that lets you pay online and in stores. <br />
              It’s the only way to get Boosts—instant <br />
              discounts that work at places where you <br />
              want to spend.
            </div>
          </div>
          <img
            src={phone}
            style={{ zIndex: 0 }}
            className="absolute md:ml-[23%] -ml-12 md:-mt-72 -mt-52 md:pt-2 md:w-auto md:h-auto w-[5rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Section4;
