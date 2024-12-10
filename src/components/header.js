// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Jumia Clone</h1>
            <nav>
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>
                
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
};

export default Header;