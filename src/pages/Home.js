import React, {useState} from 'react';
import AdidasLogo from '../assets/images/adidas-logo.png';
import Splash from '../assets/images/splash.png';
import ShowCase from '../components/ShowCase';
import { useNavigate } from 'react-router-dom';
import { MyWishListHeaderIcon, MyCartHeaderIcon } from '../components/MyWishList';

const Home = ({ wishlist, setWishlist }) => {
   const navigate = useNavigate();   
   const handleWishListHeaderIconClick = () => {
      navigate('/wishlist', { state: { wishlist } }); 
   };
   const handleMyCartHeaderIconClick = () => {
      navigate('/mycart', { state: { wishlist } }); 
   };

   return (
      <div className="w-full min-h-screen flex flex-col items-center">
         
         {/* Top Content - Black Fill */}
         <div className="w-full fixed top h-[40px] z-10 bg-black text-white"></div>
         
         {/* Top Content @ 40px - Main Menu */}
         <div className="w-full fixed top-[40px] h-[80px] bg-white flex z-10 border-b border-black shadow-md">

            {/* Top Content @ 40px - 1/3 */}
            <div className="flex w-1/3 justify-start items-center">
               <img src={AdidasLogo} alt="Adidas Logo" className="h-[60px] ml-10"/>
            </div>

            {/* Top Content @ 40px - 2/3 */}
            <div className="flex w-1/3 justify-center items-center bg-white flex justify-center gap-4 text-base font-semibold tracking-tighter">
               <div>남성</div>
               <div>여성</div>
               <div>키즈</div>
               <div>세일</div>
               <div>신제품</div>
            </div>
                
            {/* Top Content @ 40px - 3/3 */}
            <div className="flex w-1/3 justify-end items-center">    
               <input type="text" placeholder="검색" className="pl-2 w-48 mr-6 box-border rounded-lg focus:outline-none text-sm font-semibold bg-gray-200 border-gray-500 border" />               
               <div className="mr-2" onClick={handleWishListHeaderIconClick}><MyWishListHeaderIcon wishlist={wishlist}/></div>
               <div className="mr-0" onClick={handleMyCartHeaderIconClick}><MyCartHeaderIcon wishlist={wishlist}/></div>  
            </div>
         </div>

         {/* Main Campaign */}
         <div className="w-full bg-white flex-col items-center justify-center" style = {{paddingTop: '60px'}}>    
            <div className="h-full bg-gray-400">
               <img src={Splash} alt="Splash"  style={{width: '100%', height: '100%', objectFit: 'fit' }} />
            </div>
         </div>

         {/* Showcase # 1 */}
         <div className = "mt-5 ml-5 mb-20">
            <ShowCase wishlist={wishlist} setWishlist={setWishlist} />
         </div>

         {/* Showcase # 2 */}
         <div className="flex flex-col w-full">
            <div style = {{ backgroundColor: '#E5AE89', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }} className = "border-t border-black w-full h-5 w-full"></div>
            <div style = {{ }} className="w-full gap-20 bg-white flex justify-center pt-10 mb-10 text-base font-semibold">
               <div>대학 스타일</div>
               <div>가을 운동</div>
               <div>건조 유지</div>
               <div>따뜻하게 유지</div>
            </div>
         </div>

         {/* Base Banner */}
         <div className="flex w-full">
            <div style={{ backgroundColor: '#292B31' }} className = "flex items-center justify-center text-center bg-gray-900 h-10 text-white text-xs w-full" >2024 아디다스 아메리카, Inc.
            </div>
         </div>

      </div>
   );
}

export default Home;
