import React, { useState, useEffect } from 'react';
import { MyWishListIcon } from './MyWishList';

const ShowCase = ({ wishlist, setWishlist }) => {
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


   const addToWishlist = (id) => {
      console.log('click');
       if (!wishlist.includes(id)) {
           setWishlist((prevWishlist) => [...prevWishlist, id]);
           console.log(`Added to wishlist: ${id}`);
       } else {
           console.log(`Already in wishlist: ${id}`);
       }
   };

   return (
      <div className="flex space-x-2 w-full">
         <div style={{ width: '300px', height: '480px', position: 'relative', marginRight: '25px'}} className = "shadow-md overflow-hidden whitespace-nowrap">
            <img style={{}} src={products[0]?.url} alt={products[0]?.title} className="w-full h-full object-cover" />
            <div onClick={() => {addToWishlist(products[0]?._id)}}><MyWishListIcon /></div>
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-semibold p-1 text-right"> 
               {products[0]?.title}
            </div>
         </div>
         <div style={{ width: '300px', height: '480px' , position: 'relative', marginRight: '25px'}} className = "shadow-md overflow-hidden whitespace-nowrap">
            <img style={{}} src={products[1]?.url} alt={products[1]?.title} className="w-full h-full object-cover" />
            <div onClick={() => {addToWishlist(products[1]?._id)}}><MyWishListIcon/></div>
            <div className="absolute bottom-0 right-0 bg-white text-black text-xs font-semibold p-1 text-right">
               {products[1]?.title}
            </div>
         </div>
         <div className="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-5 w-full justify-items-end">
         {products.slice(2, 10).map((product, index) => (
               <div key={index} style={{ height: '230px', width: '200px', position: 'relative' }} className="border-black border-0">
                  <img style={{ height: '230px', width: 'auto'}} src={product.url} alt={product.title} className="shadow-md w-full h-full object-cover bg-blue-300" />
                  <div onClick={() => {addToWishlist(product._id)}}><MyWishListIcon/></div>                  
                  <div style={{ width: '200px', right: '0', bottom: '0px', padding: '' }} className="absolute bg-white text-black text-xs text-right font-semibold p-1 overflow-hidden whitespace-nowrap">
                     {product.title}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ShowCase;
