// src/pages/Billing.jsx
import React from 'react';
import { useCart } from '../Components/CartContext';
import './Billing.css'; // optional CSS

const Billing = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return total + (item.pizza.price + sizePrice) * item.quantity;
  }, 0);

  return (
    <div className="billing-container">
      <h2>Billing Details</h2>
      {cart.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <ul className="billing-list">
          {cart.map((item, index) => {
            const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
            const itemTotal = (item.pizza.price + sizePrice) * item.quantity;

            return (
              <li key={index} className="billing-item">
                <span>
                  {item.pizza.name} ({item.size}) x {item.quantity}
                </span>
                <span>Rs{itemTotal.toFixed(2)}</span>
              </li>
            );
          })}
        </ul>
      )}
      <div className="billing-total">
        <h3>Total Amount: Rs{totalPrice.toFixed(2)}</h3>
        <button className="pay-btn">Confirm Payment</button>
      </div>
    </div>
  );
};

export default Billing;
