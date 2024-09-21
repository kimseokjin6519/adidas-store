import React from 'react';

const ShowCase = () => {
    return (
        <div className="flex space-x-5 w-full">
            <div className="">
                <img src="https://via.placeholder.com/300x400" alt="Large Card 1" className="w-full h-full object-cover bg-blue-300" />
            </div>
            <div className="">
                <img src="https://via.placeholder.com/300x400" alt="Large Card 2" className="w-full h-full object-cover bg-blue-300" />
            </div>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-2 ml-5">
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 1" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 2" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 3" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 4" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 5" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 6" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 5" className="w-full h-full object-cover bg-red-300" />
                </div>
                <div className="">
                    <img src="https://via.placeholder.com/200x200" alt="Small Card 6" className="w-full h-full object-cover bg-red-300" />
                </div>
            </div>
        </div>
    );
};

export default ShowCase;
