import React, { useState, useEffect } from 'react';

const ShowCase = () => {
   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch('http://192.168.52.128:5000/api/products');
            const data = await response.json();
            const shuffledProducts = shuffleArray(data);
            setProducts(shuffledProducts);
         } catch (error) {
            console.error('Error fetching product data:', error);
         }
      };
      fetchProducts();
   }, []);

   const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
   };
   const [products, setProducts] = useState([]);

   return (
      <div className="flex space-x-2 w-full">
         <div style={{ width: '300px', height: '460px', position: 'relative', marginRight: '25px'}} className = "overflow-hidden whitespace-nowrap">
            <img style={{}} src={products[0]?.url} alt={products[0]?.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-medium p-1 text-right"> 
               {products[0]?.title}
            </div>
         </div>
         <div style={{ width: '300px', height: '460px' , position: 'relative', marginRight: '25px'}} className = "overflow-hidden whitespace-nowrap">
            <img style={{}} src={products[1]?.url} alt={products[1]?.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-medium p-1 text-right">
               {products[1]?.title}
            </div>
         </div>
         <div className="grid grid-cols-4 grid-rows-2 gap-x-2 w-full justify-items-end">
         {products.slice(2, 10).map((product, index) => (
               <div key={index} style={{ height: '230px', width: '200px', position: 'relative' }} className="border-black border-0">
                  <img style={{ height: '200px', width: '200px'}} src={product.url} alt={product.title} className="w-full h-full object-cover bg-blue-300" />
                  
                  <svg
    className="absolute top-2 right-2 w-4 h-4 text-gray-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
                  <div  style={{ width: '200px' }} className="absolute bottom-0 left-0 bg-white text-black text-xs font-medium p-1 overflow-hidden whitespace-nowrap">
                     {product.title}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ShowCase;
