import React from 'react';
import { TiDelete } from "react-icons/ti";
import style from './CarrinhoCompra.module.css';

const CarrinhoCompra = ({ carro, onRemove }) => {

  return (
    <>
      <section className={style.carrinho}>
        <div className={style.carrinhoProduto}>
            <div className={style.carrinhoProdutoImagem}>
                <img src={carro.image} alt="" />
            </div>
            <div className={style.carrinhoProdutoTexto}>
                <p>{carro.mark}</p>
                <p>{carro.model}</p>
                <p>{carro.releaseDate}</p>
            </div>
        </div>
        <div className={style.carrinhoPreco}>
            <p>R$ {carro.price}</p>
        </div>
        <div className={style.carrinhoDeletar}>
            <button onClick={onRemove}><TiDelete size={25}/></button>
        </div>
      </section>
    </>
  )
}

export default CarrinhoCompra
