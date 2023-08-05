import React from 'react';
import stairs1 from '../Images/section4_img/boost-stairs-1.png';
import stairs2 from '../Images/section4_img/boost-stairs-2.png';
import phone from '../Images/section4_img/boost-phone.png';
import shoe from '../Images/section4_img/boost-shoe.png';
import hand from '../Images/section4_img/boost-hand.png';
import coffee from '../Images/section4_img/boost-coffee.png';
import card from '../Images/section4_img/boost-card.png';
import burger from '../Images/section4_img/boost-burger.png';

const Section4 = () => {
    return (
        <>
          <div className='h-screen w-screen bg-[#000000]'>
                <div  className='flex flex-row-reverse'>
                    <img src={stairs1} className='flex right-0'/>
                    <img src={stairs2} className='flex mr-56 pr-1 mt-28' />
                </div>

                <div className='-mt-80 ml-[80%]'>
                    <img src={coffee} className='absolute mt-24 pt-2 -ml-20'/>
                    <img src={burger} className='absolute -ml-44 -mt-10'/>
                    <img src={card} className='absolute -mt-56 -ml-24 pl-2'/>
                    <img src={shoe} className='absolute ml-48 -mt-7'/>
                    <img src={hand} className='absolute -mt-96 ml-7 pt-12'/>
                </div>

                <div className='ml-[26%]'>
                    <div className='absolute -mt-48 text-[#FFFFFF]'>
                        <div className='font-[800] text-[2.5rem] leading-[2.5rem] font-Agrandir text-[#00D54B] mb-4'>Cash Card<br/> & Boost</div>
                        <div className='font-[400] font-Mulish text-[1rem] leading-[1.375rem] tracking-[0.3px]'>The Cash Card is a free, customizable debit<br/> card that lets you pay online and in stores. <br/>It’s the only way to get Boosts—instant <br/>discounts that work at places where you <br/>want to spend.</div>
                    </div>
                    <img src={phone} className='absolute ml-[22%] -mt-72 pt-2'/>
                </div>
          </div>  
        </>
    );
};

export default Section4;