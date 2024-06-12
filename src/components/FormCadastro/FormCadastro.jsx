import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './FormCadastro.module.css'

const FormCadastro = () => {

  const navigate = useNavigate()

  const [novoUsuario, setNovoUsuario] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setNovoUsuario({...novoUsuario, [e.target.name]: e.target.value});
}

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("http://localhost:4000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      }).then(({status}) => {
        if(status === 400){
          alert('Já existe um usuário com este email cadastrado')
        } else {
          alert('Usuário cadastrado')
          navigate('/login')
        }
      });
    };

console.log(novoUsuario)
  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

          <label>
            Nome: 
            <input type="text" 
            placeholder='Digite seu nome'
            onChange={handleChange}
            value={novoUsuario.name}
            name='name'
            required={true}/>
          </label>
         
          <label>
            Email: 
            <input type="email" 
            placeholder='Digite seu e-mail'
            onChange={handleChange}
            value={novoUsuario.email}
            name='email'
            required={true}/>
          </label>
          
          <label>
            Senha: 
            <input type="password" placeholder='Digite sua senha'
            onChange={handleChange}
            value={novoUsuario.password}
            name='password'
            required={true}/>
          </label>
          <button>Cadastrar</button>

        </form>
      </div>
    </>
  )
}

export default FormCadastro
