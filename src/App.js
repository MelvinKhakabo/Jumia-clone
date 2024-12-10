//import logo from './logo.svg';
//import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'; // Import your CSS file
import Home from './pages/Home';
import Products from './pages/products'; // Ensure this matches the file name
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1>Jumia Clone</h1>
                        {/* Navigation Links */}
                        <nav>
                            <a href="/">Home</a>
                            <a href="/products">Products</a>
                            <a href="/cart">Cart</a>
                        </nav>
                    </header>

                    {/* Updated Routing */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;