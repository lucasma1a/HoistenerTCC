import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import style from './UserLogado.module.css';

const UserLogado = ({ loggedUser }) => {
  const getId = sessionStorage.getItem('id') 
  const { id } = useParams()
  const { reserva } = useContext(AppContext);
  const [reservas, setReservas] = useState([])
  console.log(reservas);

  const handleLogout = () => {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    alert('Saindo da sessão...');
    location.reload();
  };

  useEffect(() => {
    fetch('http://localhost:4000/reservas')
    .then((r) => r.json())
    .then((data) => setReservas(data))
    .catch(e => alert('erro: ', e))
  }, [])

  const foundReserva = reservas.filter((re) => {
    return re.user._id === getId
  })

  console.log('Reserva do usuário: ', foundReserva)

  return (
    <div className={style.container}>
      <h1>Olá, {loggedUser.name}</h1>

      <div className={style.containerInfo}>
        <p><b>Seu Email:</b> {loggedUser.email}</p>
        <p><b>Suas Reservas:</b></p>
        {foundReserva ? (
          <ul>
            {foundReserva.map((re, index) => (
              <li key={index}>
                {re.car.mark} {re.car.model} {re.car.plate}
              </li>
            ))}
          </ul>
        ) : (
          <p>Você ainda não reservou nenhum carro</p>
        )}
      </div>

      <div className={style.containerBtns}>
        <Link to={`/alterar/${loggedUser._id}`}>
          <button>Alterar senha</button>
        </Link>
       
       <Link to={`/alterardados/${loggedUser._id}`}>
          <button>Alterar dados da conta</button>
       </Link>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default UserLogado;
