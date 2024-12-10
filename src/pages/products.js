// src/pages/products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('API_URL_HERE'); // Replace with your API endpoint
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="products">
            {products.length === 0 ? (
                <p>Loading products...</p> // Show loading message while fetching products
            ) : (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
};

export default Products;
