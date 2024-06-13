import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import style from './CompraCarro.module.css';
 
const CompraCarro = ({ car }) => {
    
    const navigate = useNavigate()
    const {reserva ,setReserva} = useContext(AppContext)

    let getId = sessionStorage.getItem('id')
    let getToken = sessionStorage.getItem('token')
 
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!getId && !getToken){
            alert('Você deve realizar o login para reservar um carro')
            navigate('/login')
        } else {
        alert('Reserva efetuada com sucesso')
        setReserva((count) => count += 1)
        navigate('/login')
        }
    }

    const handleDelete = (id) => {

        if(!getId && !getToken){
            return
        } else {
            fetch(`http://localhost:4000/car/${id}`, {
                method: 'DELETE',
            }).then((response) => {
                if(response.status === 200){
                    console.log('Mikael esteve aki')
                }
            })
        }
    }

    console.log('Reserva: ', reserva)

    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    const formattedPrice = formatPrice(car.price);
    return (
        <>
            <section className={style.container}>
                <div className={style.containerCard}>
                    <h1 className={style.containerTitle}>
                        {car.mark}  {car.model}       
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
                            <input type="text" 
                            placeholder='Digite seu nome' 
                            required={true}
                            />
                        </label>
 
                        <label >
                            E-mail:
                            <input type="email" 
                            placeholder='Digite seu email'
                            required={true}
                            />
                        </label>
 
                        <label >
                            Telefone:
                            <input type="text" 
                            placeholder='Digite seu telefone' 
                            required={true}
                            />
                        </label>
 
                        <label >
                            CPF:
                            <input type="number" 
                            placeholder='Digite seu CPF' 
                            required={true}
                            />
                        </label>
 
                        <label >
                            Data de Nascimento:
                            <input type="date" 
                            placeholder='Insira sua data de nascimento' 
                            max="2006-12-31"
                            required={true}
                            />
                        </label>
 
                        <label >
                            Digite seu CEP:
                            <input type="number" 
                            placeholder='Insira seu CEP' 
                            required={true}
                            />
                        </label>
 
                        <button onClick={() => handleDelete(car._id)}>Reservar Carro</button>
 
                    </form>
                </div>
            </section>
        </>
    )
}
 
export default CompraCarro