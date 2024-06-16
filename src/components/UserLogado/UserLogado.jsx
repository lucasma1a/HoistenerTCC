import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import style from './UserLogado.module.css';

const UserLogado = ({ loggedUser }) => {
  const { id } = useParams()
  const { reserva } = useContext(AppContext);
  console.log(reserva);

  useEffect(() => {
    fetch('http://localhost:4000/users')
    
  })

  const handleLogout = () => {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    alert('Saindo da sessão...');
    location.reload();
  };

  return (
    <div className={style.container}>
      <h1>Olá, {loggedUser.name}</h1>

      <div className={style.containerInfo}>
        <p><b>Seu Email:</b> {loggedUser.email}</p>
        <p><b>Suas Reservas:</b></p>
        {reserva.length > 0 ? (
          <ul>
            {reserva.map((re, index) => (
              <li key={index}>
                {re}
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
       
       <Link>
          <button>Alterar E-mail</button>
       </Link>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default UserLogado;
