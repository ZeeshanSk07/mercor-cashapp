import React from 'react';
import vector2 from '../Images/Vector (2).png';
import paymentphone from '../Images/payments-phone 1.png';
import pillar1 from '../Images/payments-pillar-medium (3).png';
import pillarlg from '../Images/payments-pillar-large.png';
import pillarbgest from '../Images/payments-column.png';
import pillarsm from '../Images/payments-pillar-small.png';
import pillarrow2 from '../Images/payments-pillar-medium (1).png';
import pillarrow from '../Images/payments-pillar-medium.png';
import pillarmd2 from '../Images/payments-pillar-medium (2).png';
import pillartop from '../Images/payments-column (1).png';
import pillartop2 from '../Images/payments-column (2).png';


const Section2 = () => {
    return (
        <>
          <div className='h-screen w-auto text-black cursor-auto overflow-hidden'>
               <div style={{ position: 'absolute', zIndex: -1 }} className='bottom-6'>
                    <img src={vector2} className='w-screen text-[#000000]' alt='Vector' />
                </div>

                <div className='flex flex-row px-auto absolute' style={{ zIndex:-1}}>
                    <div className='my-auto ml-72 pl-6'>
                        <div className='text-[#00D54B] font-Agrandir leading-[2.5rem] text-[2.5rem] pb-3 font-[800]'>Payments</div>
                        <div className='font-Mulish font-[400] tracking-[0.3px] leading-[1.375rem]'>Send and receive money with anyone, donate <br/> to an important cause, or tip professionals. <br/>Just enter a $cashtag, phone number, or <br/>scan their QR code to pay.</div>
                    </div>
                    <img src={paymentphone} className='justify-center pt-3 mt-16 -ml-64 ' />
                    <img src={pillar1} className='w-[10.75rem] h-[15.858125rem] -mb-16 mt-72'/>
                    <img src={pillarbgest} className='absolute flex flex-end right-0 -mr-56 pr-6 mt-[13.5%]' />
                    <img src={pillarsm}  className='w-[8.4375rem] h-[8.2075rem] absolute bottom-0 -mb-40 ml-[25%]'/>
                </div>
                
                <div className='flex absolute mt-[19%] ml-[48%]'>
                    <img src={pillarlg} className='w-[13.125rem] h-[20.831875rem]' />
                    
                    <div className='flex flex-row mt-36'>
                        <img src={pillarrow} className='flex absolute -left-96 -ml-32' />
                        <img src={pillarrow2} className='flex absolute -left-36 -mt-2'/>
                    </div>
                    <img src={pillarmd2} className='flex absolute mt-64 ml-6' />
                </div>

                <div className='flex flex-row left-0 mt-60 '>
                        <img src={pillartop} className='absolute flex pt-16 h-[31.09625rem]' />
                        <img src={pillartop2} className='absolute flex right-0 w-[54rem] h-[31.09625rem] mr-64 pr-4 pt-10'/>
                    </div>
                
          </div>  
        </>
    );
};

export default Section2;