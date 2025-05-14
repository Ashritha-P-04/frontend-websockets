import React, { useEffect, useState } from 'react';
import { useCart } from '../Components/CartContext';
import socket from '../socketService';
import './Billing.css';

const Billing = () => {
  const { cart, clearCart } = useCart();
  const [lastPayment, setLastPayment] = useState(null);

  const totalPrice = cart.reduce((sum, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return sum + (item.pizza.price + sizePrice) * item.quantity;
  }, 0);

  const handlePaymentConfirm = () => {
    const details = {
      items: cart.map(item => ({
        name: item.pizza.name,
        size: item.size,
        qty: item.quantity,
        unitPrice: item.pizza.price + item.pizza.sizes.find(s => s.size === item.size).price,
        total: (item.pizza.price + item.pizza.sizes.find(s => s.size === item.size).price) * item.quantity,
      })),
      totalAmount: totalPrice,
      timestamp: new Date().toISOString(),
    };

    socket.emit('confirm-payment', details);
    clearCart(); // if you want to reset the cart in this window
  };

  useEffect(() => {
    socket.on('payment-confirmed', (details) => {
      setLastPayment(details);
      // you could also refresh data, show a toast, etc.
      console.log('Payment event received in Billing.jsx', details);
    });

    return () => {
      socket.off('payment-confirmed');
    };
  }, []);

  return (
    <div className="billing-container">
      <h2>Billing Details</h2>
      {cart.length === 0
        ? <div>No items in cart</div>
        : (
          <ul className="billing-list">
            {cart.map((item,i) => {
              const sizePrice = item.pizza.sizes.find(s=>s.size===item.size).price;
              const itemTotal = (item.pizza.price + sizePrice) * item.quantity;
              return (
                <li key={i} className="billing-item">
                  <span>{item.pizza.name} ({item.size}) × {item.quantity}</span>
                  <span>Rs{itemTotal.toFixed(2)}</span>
                </li>
              );
            })}
          </ul>
        )
      }
      <div className="billing-total">
        <h3>Total: Rs{totalPrice.toFixed(2)}</h3>
        <button className="pay-btn" onClick={handlePaymentConfirm}>
          Confirm Payment
        </button>
      </div>

      {lastPayment && (
        <div className="payment-notice">
          💡 Last payment of Rs{lastPayment.totalAmount.toFixed(2)} confirmed at 
          {new Date(lastPayment.timestamp).toLocaleTimeString()}.
        </div>
      )}
    </div>
  );
};

export default Billing;
