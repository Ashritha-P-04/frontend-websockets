// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import Footer from './Footer';
import Menu from '../Customers/Menu';

const Navbar = () => {
  return (
    <>
      <nav className="pizzahub-navbar">
        <div className="pizzahub-navbar-container">
          <Link to="/" className="pizzahub-navbar-logo">
            <span className="pizzahub-logo-icon">🍕</span>
            <span className="pizzahub-logo-text">Pizza</span>
            <span className="pizzahub-logo-accent">Hub</span>
          </Link>

          <ul className="pizzahub-navbar-menu">
            <li><Link to="/" className="pizzahub-navbar-link"><b>Home</b></Link></li>
            <li><Link to="/menu" className="pizzahub-navbar-link"><b>Menu</b></Link></li>
            <li><Link to="/bill" className="pizzahub-navbar-link"><b>Billing</b></Link></li>
            <li><Link to="/chef" className="pizzahub-navbar-link"><b>Chef</b></Link></li>
          </ul>

          <div className="pizzahub-navbar-actions">
            <Link to="/cart" className="pizzahub-cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <span className="pizzahub-cart-badge">Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* <Home /> {/* Render Home component below Navbar */}
      {/* <Footer/> */} 
    </>
  );
};

export default Navbar;
