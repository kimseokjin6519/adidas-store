import React from 'react';
import AdidasLogo from '../assets/images/adidas-logo.png';
import Splash from '../assets/images/splash.png';
import ShowCase from '../components/ShowCase';

function Home() {
   return (
      <div className="w-full min-h-screen flex flex-col items-center">
         <div className="w-full bg-white flex justify-center items-center fixed z-10" style = {{height: '55px'}}>
            <img src={AdidasLogo} alt="Adidas Logo" style={{ position: 'absolute', left: '10px', height: '55px', width: 'auto' }} />
            <div className="flex justify-center items-center h-full" style = {{height: '55px'}}>
               <span className="w-full bg-white flex justify-center gap-5 pt-2 pl-5 text-base font-semibold">
                  <div>Men</div>
                  <div>Women</div>
                  <div>Kids</div>
                  <div>Sale</div>
                  <div>New</div>
               </span>
            </div>
            <div style = {{ position: 'absolute', right: '70px', marginTop: '10px' }}>
               <input type="text" placeholder="Search" className="box-border rounded-xl w-3/4 focus:outline-none text-sm bg-gray-200 border-gray-500 border pl-2" />
            </div>
            <svg style={{ position: 'absolute', right: '75px', marginTop: '10px' }} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
            <svg style={{ position: 'absolute', right: '45px', marginTop: '10px' }} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
         </div>
         <div className="w-full bg-white flex-col items-center justify-center" style = {{paddingTop: '55px'}}>    
            <div className="h-full bg-gray-400">
               <img src={Splash} alt="Splash"  style={{width: '100%', height: '100%', objectFit: 'fit' }} />
            </div>
            <div className = "mt-5 ml-5 mb-20">
               <ShowCase />
            </div>
            <div style = {{ backgroundColor: '#FFC107' }} className = "border-t border-black h-10 w-full"></div>
            <div style = {{ gap: '150px'}} className="w-full bg-white flex justify-center pt-10 mb-10 text-base font-medium">
               <div>Collegiate</div>
               <div>Fall Althletics</div>
               <div>Stay Dry</div>
               <div>Keep Warm</div>
            </div>
            <div style={{ backgroundColor: '#23211b' }} className = "flex items-center justify-center text-center bg-gray-900 h-10 text-white text-xs w-full" >© 2024 adidas America, Inc.</div>
         </div>
      </div>
   );
}

export default Home;
