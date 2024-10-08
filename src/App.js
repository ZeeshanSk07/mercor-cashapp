
import Hero from '../src/Components/Pages/Hero';
import Section2 from '../src/Components/Pages/Section2';
import Section3 from '../src/Components/Pages/Section3';
import Section4 from '../src/Components/Pages/Section4';
import Section5 from '../src/Components/Pages/Section5';
import Section6 from "./Components/Pages/Section6";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    < >
      <div className="overflow-hidden cursor-pointer">
        <div className='h-screen w-auto'><Hero/></div>
        
        <div className='h-screen w-auto overflow-hidden'><Section2/></div>
        <div className='h-screen w-auto overflow-hidden'><Section3/></div>
        <div className='h-screen w-auto overflow-hidden'><Section4/></div>
        <div className='h-screen w-auto overflow-hidden'><Section5/></div>
        <div className='h-screen w-auto md:hidden overflow-hidden'><Section6/></div>
        
      </div>

      <div className='h-auto w-screen z-30 bottom-0 sticky'><Footer/></div>
    </>
  );
}

export default App;
