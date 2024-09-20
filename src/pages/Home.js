import React from 'react';
import AdidasLogo from '../assets/images/adidas-logo.png';
import Splash from '../assets/images/splash.png';

function Home() {
   return (
      <div className="w-full min-h-screen flex flex-col items-center">
         <div className="w-full h-0 bg-gray-100 flex justify-center items-center"></div>

         <div className="w-full bg-white flex justify-center items-center fixed" style = {{height: '55px'}}>

            <img src={AdidasLogo} alt="Adidas Logo" style={{ position: 'absolute', left: '15px', height: '50px', width: 'auto' }} />
            
            <div className="flex justify-center items-center h-full" style = {{height: '55px'}}>
               <span className="w-full bg-white flex justify-center gap-5 items-endtext-sm font-semibold">
                  <div>Men</div>
                  <div>Women</div>
                  <div>Kids</div>
                  <div>Sale</div>
                  <div>New</div>
               </span>
            </div>
            
            <svg style={{ position: 'absolute', right: '75px', marginTop: '2px' }} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
            <svg style={{ position: 'absolute', right: '45px', marginTop: '2px'}} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
         </div>

         <div className="w-full bg-white flex-col items-center justify-center">    
            <div className="h-full bg-gray-400">
               <img src={Splash} alt="Splash"  style={{width: '100%', height: '100%', objectFit: 'fit' }}  />
            </div>

            <div className="text-center text-black">
               <strong className="block text-lg"></strong>
               <span className="block pt-5 text-3xl font-bold" style={{ fontFamily: '' }}>ADIDAS</span>
               <span className="block text-lg mt-2">
                  There is no tomorrow. There is no yesterday. There is only, right now.
               </span>
            </div>
            
            <div className="text-center text-black">
               <strong className="block text-lg"></strong>
               <span className="block pt-5 text-3xl font-bold" style={{ fontFamily: '' }}>ADIDAS</span>
               <span className="block text-lg mt-2">
                  There is no tomorrow. There is no yesterday. There is only, right now.
               </span>
            </div>
          
         </div>
      </div>
   );
}

export default Home;
