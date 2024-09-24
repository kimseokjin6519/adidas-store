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
      <div className="flex space-x-5 w-full">

         <div style={{ width: '300px', height: '460px', position: 'relative' }}>
            <img style={{ }} src={products[0]?.url} alt={products[0]?.title} className="w-full h-full object-cover bg-blue-300" />
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-medium p-1"> 
               {products[0]?.title}
            </div>
         </div>

         <div style={{ width: '300px', height: '460px' , position: 'relative'}}>
            <img style={{ }} src={products[1]?.url} alt={products[1]?.title} className="w-full h-full object-cover bg-blue-300" />
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-medium p-1">
               {products[1]?.title}
            </div>
         </div>

         <div className="grid grid-cols-4 grid-rows-2 gap-x-5">
            {products.slice(2, 10).map((product, index) => (
               <div key={index} style={{ height: '230px', width: '200px', position: 'relative' }} className="border-black border-0">
                  <img style={{ height: '200px', width: '200px'}} src={product.url} alt={product.title} className="w-full h-full object-cover bg-blue-300" />
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
