import React, { useContext } from 'react';
import CarrinhoCompra from '../../components/CarrinhoCompra/CarrinhoCompra.jsx';
import ErroBusca from '../../components/ErroBusca/ErroBusca.jsx';
import AppContext from '../../context/AppContext.jsx';
import style from './Carrinho.module.css';

const Carrinho = () => {
  const { cart, removeFromCart } = useContext(AppContext);
  const texto = 'Não há itens no carrinho'

  const handleRemove = (id) => {
    removeFromCart(id)
  }

  return (
    <div className={style.carrinho}>
      {cart.length > 0 ? (
        cart.map((car) => (
          <CarrinhoCompra key={car._id} carro={car} onRemove={() => handleRemove(car._id)} />
        ))
      ) : (
        <div className={style.carrinho}>
          <ErroBusca texto={texto}/>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
