import React, { useState } from 'react';

const MyWishList = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prev) => !prev);
    };

    return (
        <svg
            onClick={handleToggle}
            className={`absolute top-2 right-2 w-3 h-3 cursor-pointer ${isToggled ? 'text-gray-700' : 'text-gray-700'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill={isToggled ? 'text-gray-700' : 'none'}
            /* fill='none' */
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isToggled 
                    ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" // Filled heart path
                    : "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"} // Outlined heart path
            />
        </svg>
    );
};

export default MyWishList;
