import React, { useState, useEffect } from 'react';
import AdidasON from '../assets/images/adidason.svg'

export const MyWishListHeaderIcon = () => {
   return (   
         <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
   );
};

export const MyCartHeaderIcon = () => {
   return ( 
         <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="21px" height="21px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
   );
};
export const MyWishListIcon = ({ isToggled }) => {
   return ( 
      <img src={AdidasON} alt="Adidas ON" className="absolute top-0 right-0 h-6 cursor-pointer z-10 border-gray-200 border-b-2 border-l-2" />
   );
};