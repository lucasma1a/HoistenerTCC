import React, { useContext } from 'react';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra.jsx';
import AppContext from '../../context/AppContext.jsx';
import style from './Carrinho.module.css';

const Carrinho = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  const handleRemove = (id) => {
    removeFromCart(id)
    console.log('olá')
  }

  return (
    <div className={style.carrinho}>
      {cart.length > 0 ? (
        cart.map((car) => (
          <CarrinhoCompra key={car._id} carro={car} onRemove={() => handleRemove(car._id)} />
        ))
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Carrinho;
