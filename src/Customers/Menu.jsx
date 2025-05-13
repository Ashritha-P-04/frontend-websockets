import React from 'react';
import { useState } from 'react';

import './Menu.css';
import Navbar from '../Components/Navbar';

const Menu = () => {
  const [cart, setCart] = useState([]);
  
 const pizzas  = [
    {
      _id: '1',
      name: 'Margherita',
      description: 'Classic delight with 100% real mozzarella cheese',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '2',
      name: 'Pepperoni',
      description: 'American classic with spicy pepperoni & extra cheese',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '3',
      name: 'Supreme',
      description: 'Loaded with toppings including pepperoni, sausage, bell peppers, onions, and olives',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '4',
      name: 'Veggie Delight',
      description: 'Fresh vegetables including tomatoes, bell peppers, onions, and mushrooms',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '5',
      name: 'BBQ Chicken',
      description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a tangy base',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '6',
      name: 'Hawaiian',
      description: 'Ham and pineapple on a classic base - a sweet and savory combination',
      price: 11.49,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilFQIZkn1KZCG_jZgSfUIr82isWO3vk8ZIg&s',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '7',
      name: 'Buffalo Chicken',
      description: 'Spicy buffalo chicken with blue cheese and ranch drizzle',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '8',
      name: 'Four Cheese',
      description: 'Blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1548369937-47519962c11a',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '9',
      name: 'Meat Lovers',
      description: 'Loaded with pepperoni, sausage, bacon, and ground beef',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '10',
      name: 'Pesto Chicken',
      description: 'Grilled chicken, pesto sauce, sun-dried tomatoes, and mozzarella',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '11',
      name: 'Spinach & Feta',
      description: 'Fresh spinach, feta cheese, olives, and garlic on a white base',
      price: 11.49,
      image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '12',
      name: 'Mushroom Truffle',
      description: 'Assorted mushrooms, truffle oil, and fresh arugula',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '13',
      name: 'Spicy Italian',
      description: 'Spicy Italian sausage, bell peppers, and onions with chili flakes',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '14',
      name: 'Mediterranean',
      description: 'Olives, feta, sun-dried tomatoes, and artichoke hearts',
      price: 12.49,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF9TLdBRO6yefJb2X5InmLXidGj34SgkKHA&s',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '15',
      name: 'Taco Pizza',
      description: 'Ground beef, lettuce, tomatoes, and cheddar with taco seasoning',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '16',
      name: 'White Garlic',
      description: 'Creamy garlic sauce, chicken, spinach, and roasted garlic',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1620374645498-af6bd681a0bd',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '17',
      name: 'Philly Cheesesteak',
      description: 'Thinly sliced beef, green peppers, onions, and provolone cheese',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '18',
      name: 'Pineapple Jalapeño',
      description: 'Sweet pineapple and spicy jalapeños for a perfect sweet-heat combo',
      price: 11.49,
      image: 'https://images.unsplash.com/photo-1593504049359-74330189a345',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '19',
      name: 'Bacon & Egg',
      description: 'Crispy bacon, eggs, and cheese - breakfast on a pizza',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '20',
      name: 'Caprese',
      description: 'Fresh mozzarella, tomatoes, basil, and a balsamic glaze',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '21',
      name: 'Seafood Delight',
      description: 'Shrimp, clams, and crab with garlic butter sauce',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '22',
      name: 'Greek',
      description: 'Feta, olives, red onions, and tzatziki sauce',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '23',
      name: 'Chicken Alfredo',
      description: 'Creamy alfredo sauce, grilled chicken, and spinach',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '24',
      name: 'Vegan Supreme',
      description: 'Plant-based cheese, vegan sausage, and assorted vegetables',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '25',
      name: 'Chicken Tikka',
      description: 'Tandoori chicken, onions, and peppers with a spicy tikka sauce',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '26',
      name: 'Prosciutto & Arugula',
      description: 'Thin slices of prosciutto and fresh arugula with olive oil',
      price: 14.49,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '27',
      name: 'Buffalo Cauliflower',
      description: 'Spicy buffalo cauliflower with vegan ranch drizzle',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '28',
      name: 'Bacon Mac & Cheese',
      description: 'Creamy mac and cheese with crispy bacon bits',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '29',
      name: 'Potato Rosemary',
      description: 'Thinly sliced potatoes, rosemary, and garlic on an olive oil base',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '30',
      name: 'Cheeseburger',
      description: 'Ground beef, cheese, pickles, and special sauce - tastes like a burger',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '31',
      name: 'Eggplant Parmesan',
      description: 'Breaded eggplant, marinara, and parmesan cheese',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '32',
      name: 'Pulled Pork',
      description: 'Slow-cooked pulled pork with BBQ sauce and red onions',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '33',
      name: 'Fig & Goat Cheese',
      description: 'Fig jam, goat cheese, and prosciutto with arugula',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '34',
      name: 'Teriyaki Chicken',
      description: 'Teriyaki glazed chicken with pineapple and green onions',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '35',
      name: 'Roasted Garlic',
      description: 'Whole roasted garlic cloves, olive oil, and herbs',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '36',
      name: 'Reuben',
      description: 'Corned beef, sauerkraut, Swiss cheese, and thousand island dressing',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '37',
      name: 'Pear & Gorgonzola',
      description: 'Sliced pears, gorgonzola cheese, and walnuts with honey drizzle',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '38',
      name: 'Cajun Shrimp',
      description: 'Spicy cajun shrimp, andouille sausage, and bell peppers',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '39',
      name: 'Artichoke & Olive',
      description: 'Artichoke hearts, olives, and roasted red peppers',
      price: 12.49,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '40',
      name: 'The Works',
      description: 'Everything but the kitchen sink - all our toppings on one pizza',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
      {
      _id: '24',
      name: 'Vegan Supreme',
      description: 'Plant-based cheese, vegan sausage, and assorted vegetables',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '25',
      name: 'Chicken Tikka',
      description: 'Tandoori chicken, onions, and peppers with a spicy tikka sauce',
      price: 13.49,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    }
  ];
  
  const handleAddToCart = (pizza, size) => {
    // Check if the pizza is already in the cart
    const existingPizza = cart.find(item => item.pizza._id === pizza._id && item.size === size);

    if (existingPizza) {
      // Update the quantity if pizza already in the cart
      setCart(cart.map(item =>
        item.pizza._id === pizza._id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new pizza to the cart
      setCart([...cart, { pizza, size, quantity: 1 }]);
    }
  };

  // Calculate the total price for the cart
  const totalPrice = cart.reduce((total, item) => {
    const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
    return total + ((item.pizza.price + sizePrice) * item.quantity);
  }, 0);

  return (
    <div className="menu-container">
        <Navbar></Navbar>
      <h1>Pizza Menu</h1>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <div 
            key={pizza._id} 
            className="pizza-card"
            data-is-vegetarian={pizza.isVegetarian}
          >
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>Price: ${pizza.price.toFixed(2)}</p>
            <div className="sizes">
              {pizza.sizes.map(size => (
                <button
                  key={size.size}
                  onClick={() => handleAddToCart(pizza, size.size)}
                  className="size-btn"
                >
                  {size.size.charAt(0).toUpperCase() + size.size.slice(1)} - ${(
                    pizza.price + size.price
                  ).toFixed(2)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => {
              const sizePrice = item.pizza.sizes.find(s => s.size === item.size).price;
              const itemTotal = (item.pizza.price + sizePrice) * item.quantity;
              
              return (
                <li key={index} className="cart-item">
                  <div className="cart-item-details">
                    {item.pizza.name} - {item.size.charAt(0).toUpperCase() + item.size.slice(1)}
                  </div>
                  <div className="cart-item-actions">
                    <span className="cart-item-quantity">x{item.quantity}</span>
                    <span className="cart-item-price">${itemTotal.toFixed(2)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Menu;