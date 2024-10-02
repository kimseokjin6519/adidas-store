import React from 'react';
import { useLocation } from 'react-router-dom';

const WishList = () => {
    const location = useLocation();
    const wishlist = location.state?.wishlist || []; // Assuming each item is an object

    return (
        <div className="p-5 bg-white min-h-screen">
            <div className="mb-5 text-xl font-semibold">내 위시리스트</div>
            <div className="mb-10 text-sm font-medium text-gray-700">{wishlist.length} 개 아이템</div>

            <div className="grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-10 w-full justify-items-center">
                {wishlist.length > 0 ? (
                    wishlist.map(product => (
                     <div key={product._id} style={{ height: '230px', width: '200px', position: 'relative' }} className="border-black border-0">
                  <img style={{ height: '230px', width: 'auto'}} src={product.url} alt={product.title} className="shadow-md w-full h-full object-cover bg-blue-300" />
                  <div style={{ width: '200px', right: '0', bottom: '0px', padding: '' }} className="absolute bg-white text-black text-xs text-right font-semibold p-1 overflow-hidden whitespace-nowrap">
                     {product.title}
                  </div>
               </div>
                    ))
                ) : (
                    <li className="italic text-gray-600">Your wishlist is empty.</li>
                )}
            </div>
        </div>
    );
};

export default WishList;
