import Main from "./Components/Main";
import Hero from '../src/Components/Pages/Hero';
import Section2 from '../src/Components/Pages/Section2';
import Section3 from '../src/Components/Pages/Section3';
import Section4 from '../src/Components/Pages/Section4';
import Section5 from '../src/Components/Pages/Section5';

function App() {
  return (
    < >
      <div className="overflow-hidden">
        <div className='h-screen w-auto overflow-hidden'><Hero/></div>
        <div className='h-screen w-auto overflow-hidden'><Section2/></div>
        <div className='h-screen w-auto overflow-hidden'><Section3/></div>
        <div className='h-screen w-auto overflow-hidden'><Section4/></div>
        <div className='h-screen w-auto overflow-hidden'><Section5/></div>
        
      </div>
    </>
  );
}

export default App;
