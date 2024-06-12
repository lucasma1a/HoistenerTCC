import React from 'react'
import style from './UserLogado.module.css'

const UserLogado = ({loggedUser}) => {


  return (
    <>
      <div className={style.container}>
        <h1>Olá {loggedUser.name}</h1>

        <div className={style.containerInfo}>
          <p>Seu Email: {loggedUser.email}</p>
          <p>Sua Reserva: ainda n tem</p>
        </div>

        <div className={style.containerBtns}>
          <button>Alterar senha</button>
          <button>Alterar E-mail</button>
          <button>Sair</button>
        </div>
      </div>
    </>
  )
}

export default UserLogado
