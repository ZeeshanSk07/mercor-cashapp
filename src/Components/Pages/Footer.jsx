import React from 'react';
import twitter from "../Images/Frame (1).png";
import social from "../Images/Frame.png";
import insta from "../Images/Frame (2).png";
import { BsArrowDown } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Footer = () => {
    return (
        <>
           <div className="w-screen md:px-[5%] px-8 overflow-hidden h-[4.5rem] flex flex-row justify-between">
                <div className="flex flex-row md:justify-between text-white justify-between md:w-auto w-full my-auto py-auto md:space-x-6 uppercase font-Agandir font-[800]">
                        <div className="flex border-[1px] border-[#FFFFFF] md:w-[10.625rem] min-w-fit bg-[#000000] my-auto py-auto md:px-auto px-3 rounded-[0.4375rem] justify-center p-2">
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
        </>
    );
};

export default Footer;