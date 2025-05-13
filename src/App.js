
import React from 'react';

import './App.css';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Files from './Components/Files';
import Menu from './Customers/Menu';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      {/* Navbar placed outside Routes so it appears on all pages */}
      {/* <Navbar /> */}
      <CartProvider>
    
        <Navbar />
      <Routes>
        <Route path="/" element={<Files />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart  />} />

      </Routes>
     
    </CartProvider>
    </div>
  );
}



export default App;
