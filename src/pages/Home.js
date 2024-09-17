import React from 'react';
import stepupcity from '../assets/images/stepupcity.png';
import nikeswoosh from '../assets/images/nikeswoosh.png';

function Home() {
   return (
      <div className="w-full min-h-screen flex flex-col items-center">
         <div className="w-full h-5 border bg-gray-100 flex justify-center items-center"></div>

         <div className="w-full h-15 bg-white flex justify-center items-center">

            <img src={nikeswoosh} alt="Nike Swoosh" style={{ position: 'absolute', left: '15px', paddingLeft: '15px', height: '2.5rem', width: 'auto' }} />
            <div className="flex justify-center items-center h-full">
               <span className="w-full bg-white flex justify-center gap-8 py-4 text-sm font-medium">
                  <div>New</div>
                  <div>Men</div>
                  <div>Women</div>
                  <div>Kids</div>
                  <div>Jordan</div>
                  <div>Sale</div>
               </span>
            </div>
         </div>

         <div className="w-full bg-gray-200 flex items-center justify-center">    
            <div className=" h-full bg-gray-400">
               <img src={stepupcity} alt="StepUpCity"  style={{ width: '100%', height: '100%', objectFit: 'fit' }}  />
            </div>

            <div className="absolute bottom-4 text-center text-black">
               <strong className="block text-lg"></strong>
               <span className="block pt-20 text-4xl font-extrabold">NIKE PRESENCE OF MIND</span>
               <span className="block text-lg mt-2">
                  Jalen Brunson and the Nike Dunk are bringing that fire back to the concrete jungle.
               </span>
            </div>

         </div>
      </div>
   );
}

export default Home;
