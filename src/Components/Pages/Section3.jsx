import React from 'react';
import hole1 from '../Images/section2_img/banking-hole.png';
import track2 from '../Images/section2_img/banking-track-2.png';
import column3 from '../Images/section2_img/banking-column.png';
import track4 from '../Images/section2_img/banking-track-1.png';
import ramp5 from '../Images/section2_img/banking-ramp-1.png';
import phone6 from '../Images/section2_img/banking-phone.png';
import stairs7 from '../Images/section2_img/banking-stairs-1.png';
import stairs8 from '../Images/section2_img/banking-stairs-2.png';
import ramp9 from '../Images/section2_img/banking-ramp-2.png';
import cubes10 from '../Images/section2_img/banking-cubes.png';
import monster11 from '../Images/section2_img/banking-monster.png';
import tube12 from '../Images/section2_img/banking-tube.png';
import hole13 from '../Images/section2_img/banking-hole (1).png';

const Section3 = () => {
    return (
        <>
            <div className='h-screen w-screen bg-[#00D54B] overflow-hidden'>
                <div className='flex flex-row justify-between'>
                    <img src={hole1}/>
                    <img src={track2} className='mr-56 mt-5'/>
                </div>

                <div className='flex flex-row space-x-96'>
                    <img className='flex absolute ml-16 pl-2 -mt-16' src={column3}/>
                    <img src={track4} className='flex absolute pl-10 -mt-2'/>
                    <img src={ramp5} className='absolute flex right-0 pr-96 mt-8'/>
                </div>

                <img src={phone6} className='absolute mx-[38.2%]'/>
                <img src={stairs7} className='absolute right-0 mt-28 mr-44'/>

                <div className='justify-between flex-row flex mt-56'>
                    <div className='flex flex-row ml-14 space-x-28'>
                        <img src={stairs8}/>
                        <img src={ramp9} className='absolute mt-24'/>
                    </div>

                    <div className='flex flex-row mr-80 space-x-16'>
                        <img src={cubes10} className='absolute -ml-72 mt-28'/>
                        <img src={monster11} className='absolute mt-52'/>
                    </div>
                </div>

                <div className='-mt-3 ml-[37%] space-x-60'>
                    <img src={tube12}/>
                    <img src={hole13} className='-mt-11'/>
                </div>

                {/* text box */}
                <div className='absolute -mt-96 ml-64'>
                    <div className='font-Agrandir font-[800] leading-[2.5rem] text-[2.5rem] text-[#FFFFFF] pb-3 -mt-10'>Banking</div>
                    <div className='font-Mulish font-[400] leading-[1.375rem] text-[#000000] tracking-[0.3px] text-[1rem]'>Receive your paycheck, tax returns, and<br/> other direct deposits up to two days early<br/> using your Cash App routing<br/> and account number.</div>
                </div>
            </div>
        </>
    );
};

export default Section3;