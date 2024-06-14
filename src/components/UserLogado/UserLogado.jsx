import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import style from './UserLogado.module.css';

const UserLogado = ({ loggedUser }) => {
  const { reserva } = useContext(AppContext);
  console.log(reserva);

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
        <button>Alterar senha</button>
        <button>Alterar E-mail</button>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default UserLogado;
