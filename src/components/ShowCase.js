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
                <img src = {products[0]?.url} alt = {products[0]?.title} className = "w-full h-full object-cover bg-blue-300" />
            </div>
            <div className="">
                <img src = {products[1]?.url} alt = {products[1]?.title} className = "w-full h-full object-cover bg-blue-300" />
            </div>

            <div className="grid grid-cols-4 grid-rows-2 gap-2 ml-5">
                {products.slice(2, 10).map((product, index) => (
                    <div key = {index} className = "">
                        <img src = {product.url} alt = {product.title} className = "w-full h-full object-cover bg-red-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowCase;
