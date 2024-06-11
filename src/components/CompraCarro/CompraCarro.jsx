import React, { useState } from 'react'
import style from './CompraCarro.module.css'
import { FaArrowDown } from "react-icons/fa";
 
const CompraCarro = ({ car }) => {
 
    const [entrada, setEntrada] = useState('')
    console.log(entrada)
 
    const handleSubmit = (e) => {
        e.preventDefault()
    }
 
    return (
        <>
            <section className={style.container}>
                <div className={style.containerCard}>
                    <h1 className={style.containerTitle}>
                        Modelo Marca        
                        <h2>R$ 50.000</h2>
                    </h1>
                    <div className={style.containerImg}>
                        <img src={`https://github.com/welltecnc.png`} alt="" />
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
                    <div className={style.containerDetails}>
                        <details>
                            <summary>Descrição do veículo</summary>
 
                            <ul>
                                <li>ashsiajsa</li>
                                <li>sahsahsi</li>
                                <li>sahsahsi</li>
                                <li>sahsahsi</li>
                            </ul>
                        </details>
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