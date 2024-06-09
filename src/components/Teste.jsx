import React from 'react'

const Teste = () => {

  

  return (
    <div>
     <h1>Carrinho de Compras</h1>
      {cart.length > 0 ? (
        cart.map((car, index) => (
          <div key={index}>
            <h2>{car.mark} {car.model}</h2>
            <p>R$ {car.price}</p>
          </div>
        ))
      ) : (
        <p>O carrinho está vazio.</p>
      )}
    </div>
  )
}

export default Teste
