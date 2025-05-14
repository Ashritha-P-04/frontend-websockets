import React from 'react';
import './App.css';
import { CartProvider } from './Components/CartContext';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here
import Navbar from './Components/Navbar';
import Files from './Components/Files';
import Menu from './Customers/Menu';
import Cart from './Components/Cart';
import Billing from './Billing/Billing';

function App() {
  return (
    <div className="App">
      {/* Navbar placed outside Routes so it appears on all pages */}
      {/* <Navbar /> */}
      
      {/* <Routes>
        <Route path="/" element={<Files />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bill" element={<Billing></Billing>}></Route>
      </Routes> */}
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Files />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
