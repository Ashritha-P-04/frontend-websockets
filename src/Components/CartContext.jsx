// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (pizza, size) => {
//     // Check if the pizza is already in the cart
//     const existingPizza = cart.find(item => item.pizza._id === pizza._id && item.size === size);

//     if (existingPizza) {
//       // Update the quantity if pizza already in cart
//       setCart(cart.map(item =>
//         item.pizza._id === pizza._id && item.size === size
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ));
//     } else {
//       // Add new pizza to the cart
//       setCart([...cart, { pizza, size, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (pizzaId, size) => {
//     setCart(cart.filter(item => !(item.pizza._id === pizzaId && item.size === size)));
//   };

//   const updateQuantity = (pizzaId, size, quantity) => {
//     if (quantity <= 0) {
//       removeFromCart(pizzaId, size);
//       return;
//     }

//     setCart(cart.map(item =>
//       item.pizza._id === pizzaId && item.size === size
//         ? { ...item, quantity }
//         : item
//     ));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const getCartCount = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => {
//       const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
//       return total + ((item.pizza.price + sizePrice) * item.quantity);
//     }, 0);
//   };

//   return (
//     <CartContext.Provider value={{
//       cart,
//       addToCart,
//       removeFromCart,
//       updateQuantity,
//       clearCart,
//       getCartCount,
//       getCartTotal
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);