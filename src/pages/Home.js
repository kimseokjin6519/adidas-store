import React, {useState} from 'react';
import AdidasLogo from '../assets/images/adidas-logo.png';
import Splash from '../assets/images/splash.png';
import ShowCase from '../components/ShowCase';
import { MyWishListHeaderIcon, MyCartHeaderIcon } from '../components/MyWishList';

function Home() {

   const [wishlist, setWishlist] = useState([]);

   return (
      
      <div className="w-full min-h-screen flex flex-col items-center">
         
         <div className="w-full bg-white flex justify-center items-center fixed z-10 border-b border-black shadow-md" style = {{height: '55px'}}>
            <img src={AdidasLogo} alt="Adidas Logo" style={{ position: 'absolute', left: '10px', height: '55px', width: 'auto', paddingTop: '5px' }} />
            <div className="flex justify-center items-center h-full" style = {{height: '55px'}}>
               <div className="w-full bg-white flex justify-center gap-5 pt-3 ml-5 text-base font-semibold">
                  <div>남성</div>
                  <div>여성</div>
                  <div>키즈</div>
                  <div>세일</div>
                  <div>신제품</div>
               </div>
            </div>   
            <div style = {{ position: 'absolute', right: '20px', marginTop: '12px' }} className = "flex gap-3">
               <input type="text" placeholder="검색" className="box-border rounded-sm w-2/3 focus:outline-none text-sm font-semibold bg-gray-200 border-gray-500 border pl-2" />               
               <MyWishListHeaderIcon />
               <MyCartHeaderIcon />
            </div>
         </div>

         <div className="w-full bg-white flex-col items-center justify-center" style = {{paddingTop: '55px'}}>    
            <div className="h-full bg-gray-400">
               <img src={Splash} alt="Splash"  style={{width: '100%', height: '100%', objectFit: 'fit' }} />
            </div>
            <div className = "mt-5 ml-5 mb-20">
               <ShowCase wishlist={wishlist} setWishlist={setWishlist} />
            </div>
            <div style = {{ backgroundColor: '#E5AE89', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }} className = "border-t border-black w-full h-5 w-full"></div>
            <div style = {{ gap: '150px'}} className="w-full bg-white flex justify-center pt-10 mb-10 text-sm font-semibold">
               <div>대학 스타일</div>
               <div>가을 운동</div>
               <div>건조 유지</div>
               <div>따뜻하게 유지</div>
            </div>
            <div style={{ backgroundColor: '#292B31' }} className = "flex items-center justify-center text-center bg-gray-900 h-10 text-white text-xs w-full" >2024 아디다스 아메리카, Inc.
            </div>
         </div>
      </div>
   );
}

export default Home;
