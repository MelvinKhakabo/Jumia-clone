// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { state } = useCart();

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {state.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                state.items.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>{item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;