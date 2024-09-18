import React from 'react';
import lv from '../assets/images/lv.png';
import lv2 from '../assets/images/lv2.png';

function Home() {
   return (
      <div className="w-full min-h-screen flex flex-col items-center">
         <div className="w-full h-0 bg-gray-100 flex justify-center items-center"></div>

         <div className="w-full h-20 bg-white flex justify-center items-center fixed">

            <img src={lv} alt="LV" style={{ position: 'absolute', left: '0px', paddingLeft: '15px', height: '2.5rem', width: 'auto' }} />
            
            <div className="flex justify-center items-center h-full">
               <span className="w-full bg-white flex justify-center py-5 text-2xl font-semibold">
                  <div>LOUIS VUITTON</div>
               </span>
            </div>
            
            <svg style={{ position: 'absolute', right: '75px', marginTop: '5px' }} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
            <svg style={{ position: 'absolute', right: '40px', marginTop: '5px'}} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
         </div>

         <div className="w-full bg-white flex-col items-center justify-center pt-20">    
            <div className="h-full bg-gray-400">
               <img src={lv2} alt="lv2"  style={{width: '100%', height: '100%', objectFit: 'fit' }}  />
            </div>

            <div className="text-center text-black">
               <strong className="block text-lg"></strong>
               <span className="block pt-5 text-3xl font-bold" style={{ fontFamily: '' }}>NIKE PRESENCE OF MIND</span>
               <span className="block text-lg mt-2">
                  There is no tomorrow. There is no yesterday. There is only, right now.
               </span>
            </div>
            
            <div className="text-center text-black">
               <strong className="block text-lg"></strong>
               <span className="block pt-5 text-3xl font-bold" style={{ fontFamily: '' }}>NIKE PRESENCE OF MIND</span>
               <span className="block text-lg mt-2">
                  There is no tomorrow. There is no yesterday. There is only, right now.
               </span>
            </div>
          
         </div>
      </div>
   );
}

export default Home;
