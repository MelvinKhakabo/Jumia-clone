// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css'; // Importing the ProductCard styles

const ProductCard = ({ product }) => {
   const { dispatch } = useCart();

   const handleAddToCart = () => {
       dispatch({ type: 'ADD_TO_CART', payload: product });
   };

   return (
       <div className="product-card">
           <img src={product.image} alt={product.name} />
           <h3>{product.name}</h3>
           <p>{product.price}</p>
           <button onClick={handleAddToCart}>Add to Cart</button>
       </div>
   );
};

export default ProductCard;