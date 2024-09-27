import React from 'react';
import { useLocation } from 'react-router-dom';

const WishList = () => {
    const location = useLocation();
    const wishlist = location.state?.wishlist || []; // Assuming each item is an object

    return (
        <div className="p-5 bg-gray-100 min-h-screen">
            <h2 className="mb-5 text-3xl font-bold">My Wishlist</h2>
            <p className="mb-5 text-lg text-gray-700">{wishlist.length} ITEMS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.length > 0 ? (
                    wishlist.map(item => (
                        <div key={item._id} className="bg-white rounded-lg shadow-lg p-4">
                            <img src={item.url} alt={item.title} className="w-full h-40 object-cover rounded-md mb-3" />
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-xl font-bold text-gray-800">${item.price}</p>
                            <button className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors">
                                Remove from Wishlist
                            </button>
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
