import React, { useState } from 'react';
import style from './CompraCarro.module.css';
 
const CompraCarro = ({ car }) => {
 
    const [entrada, setEntrada] = useState('')
    console.log(entrada)
 
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
      const formattedPrice = formatPrice(car.price);
    return (
        <>
            <section className={style.container}>
                <div className={style.containerCard}>
                    <h1 className={style.containerTitle}>
                        {car.model} {car.mark}        
                        <h2>{formattedPrice}</h2>
                    </h1>
                    <div className={style.containerImg}>
                        <img src={car.image} alt={`${car.mark}, ${car.model}`} />
                    </div>
                    <div className={style.containerInfo}>
                        <ul className={style.infoTop}>
                            <li>carro</li>
                            <li>carro</li>
                            <li>carro</li>
                        </ul>
                        <ul className={style.infoBot}>
                            <li>carro</li>
                            <li>carro</li>
                            <li>carro</li>
                        </ul>
                    </div>
 
                </div>
 
                <div className={style.form}>
 
                    <h3>Digite suas informações para reservar o carro</h3>
 
                    <form onSubmit={handleSubmit}>
                        <label >
                            Nome:
                            <input type="text" placeholder='Digite seu nome' />
                        </label>
 
                        <label >
                            E-mail:
                            <input type="email" placeholder='Digite seu email' />
                        </label>
 
                        <label >
                            Telefone:
                            <input type="text" placeholder='Digite seu telefone' />
                        </label>
 
                        <label >
                            CPF:
                            <input type="number" placeholder='Digite seu CPF' />
                        </label>
 
                        <label >
                            Data de Nascimento:
                            <input type="date" placeholder='Insira sua data de nascimento' />
                        </label>
 
                        <label >
                            Digite seu CEP:
                            <input type="number" placeholder='Insira seu CEP' />
                        </label>
 
                        <button>Reservar Carro</button>
 
                    </form>
                </div>
            </section>
        </>
    )
}
 
export default CompraCarro