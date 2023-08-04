import React from 'react';
import Hero from './Pages/Hero';
import Section2 from './Pages/Section2';
import Section3 from './Pages/Section3';
import Section4 from './Pages/Section4';
import Section5 from './Pages/Section5';

const Main = () => {
    return (
       <>
        <div className='h-screen w-auto overflow-hidden'><Hero/></div>
        <div className='h-screen w-auto overflow-hidden'><Section2/></div>
        {/* <Section3/>
        <Section4/> */}
        <Section5/>
       </>
    );
};

export default Main;