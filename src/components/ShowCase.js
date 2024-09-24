import React, { useState, useEffect } from 'react';

const ShowCase = () => {
   const [products, setProducts] = useState([]);

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

   return (
      <div className="flex space-x-5 w-full">
         <div className="">
            <img style={{ width: '300px' }} src={products[0]?.url} alt={products[0]?.title} className="w-full h-full object-cover bg-blue-300" />
         </div>
         <div className="">
            <img style={{ width: '300px' }} src={products[1]?.url} alt={products[1]?.title} className="w-full h-full object-cover bg-blue-300" />
         </div>
         <div className="grid grid-cols-4 grid-rows-2 gap-2 ml-5">
            {products.slice(2, 10).map((product, index) => (
               <div key={index} style = {{height: '250px', width: '250px'}} className="border-black border-1 relative">
                  <img style= {{ height: '200px', width: '200px' }} src={product.url} alt={product.title} className="w-full h-full object-cover bg-red-300" />
                  <div style= {{ width: '200px' }} className="bottom-0 left-0 bg-white text-black text-xs font-medium pt-2">
                     {product.title}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ShowCase;
