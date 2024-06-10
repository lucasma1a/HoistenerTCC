import React, { useState } from 'react';
import AppContext from './AppContext.jsx';

export const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState('') 

    const addToCart = (car) => {
      const existe = cart.some(item => item._id === car._id);
      if (!existe) {
          setCart((prevCart) => [...prevCart, car]);
      } else {
          alert('Este carro já está no carrinho!');
      }
    };

    const removeFromCart = (carId) => {
      setCart(prevCart => prevCart.filter(item => item._id !== carId));
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        user,
        setUser
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
