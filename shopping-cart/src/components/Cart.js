import React, { useState } from 'react';
import './Cart.css';

const initialCartItems = [
  { id: 1, name: 'Gown', price: 10000.0, quantity: 1, image: require('../images/gown.jpg') },
  { id: 2, name: 'Shoe ', price: 50000.0, quantity: 2, image: require('../images/shoe.jpg') },
  { id: 3, name: 'Watch ', price: 150000.0, quantity: 1, image: require('../images/watch.jpg') },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);
  };

  return (
    <div className="cart">
      <h3>Below are the list of products in your cart</h3>
      <table>
      
        <thead>
          <tr>
            
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} /></td>
              <td>{item.name}</td>
              <td>#{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </td>
              <td>#{calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total: #{calculateTotal().toFixed(2)}</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      
      </div>
      <footer> 
        @ Preizim 2024
      </footer>
    </div>
  );
};

export default Cart;
