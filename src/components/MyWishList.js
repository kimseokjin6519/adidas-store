import React, { useState } from 'react';

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

<svg style={{ position: 'absolute', right: '45px', marginTop: '10px' }} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="20px" height="20px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>

export const MyWishListIcon = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };
    return (
      <svg
         onClick={handleToggle}
         className={`absolute top-2 right-2 w-4 h-4 cursor-pointer`}
         xmlns="http://www.w3.org/2000/svg"
         fill={isToggled ? '#E5AE89' : 'white'}
         viewBox="0 0 24 24"
         stroke={isToggled ? 'black' : '#1F2228'}
         strokeWidth="2">
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
         />
     </svg>
    );
};
