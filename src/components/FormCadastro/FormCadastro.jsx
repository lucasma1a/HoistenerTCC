import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './FormCadastro.module.css';

const FormCadastro = () => {
  const navigate = useNavigate();

  const [novoUsuario, setNovoUsuario] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });

    if (name === 'cep' && value.length === 8) {
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(response => response.json())
        .then(dados => {
          if (!dados.erro) {
            setNovoUsuario((prevUsuario) => ({
              ...prevUsuario,
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              localidade: dados.localidade,
              uf: dados.uf,
            }));
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(error => {
          console.error('Erro ao buscar CEP:', error);
          alert('Erro ao buscar CEP');
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    }).then(({ status }) => {
      if (status === 400) {
        alert('Já existe um usuário com este email cadastrado');
      } else {
        alert('Usuário cadastrado');
        navigate('/login');
      }
    });
  };

  //20220170

  return (
    <>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Cadastro</h1>

          <label>
            Nome:
            <input
              type="text"
              placeholder='Digite seu nome'
              onChange={handleChange}
              value={novoUsuario.name}
              name='name'
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              placeholder='Digite seu e-mail'
              onChange={handleChange}
              value={novoUsuario.email}
              name='email'
              required
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              placeholder='Digite sua senha'
              onChange={handleChange}
              value={novoUsuario.password}
              name='password'
              required
            />
          </label>

          <label>
            CPF:
            <input
              type="number"
              placeholder='Digite seu CPF'
              onChange={handleChange}
              value={novoUsuario.cpf}
              name='cpf'
              required
            />
          </label>

          <label>
            CEP:
            <input
              type="number"
              placeholder='Digite seu CEP'
              onChange={handleChange}
              value={novoUsuario.cep}
              name='cep'
              maxLength={8}
              required
            />
          </label>

          <label>
            Logradouro:
            <input
              type="text"
              placeholder='Logradouro'
              onChange={handleChange}
              value={novoUsuario.logradouro}
              name='logradouro'
              readOnly
              required
            />
          </label>

          <label>
            Bairro:
            <input
              type="text"
              placeholder='Bairro'
              onChange={handleChange}
              value={novoUsuario.bairro}
              name='bairro'
              readOnly
              required
            />
          </label>

          <label>
            Cidade:
            <input
              type="text"
              placeholder='Cidade'
              onChange={handleChange}
              value={novoUsuario.localidade}
              name='localidade'
              readOnly
              required
            />
          </label>

          <label>
            UF:
            <input
              type="text"
              placeholder='UF'
              onChange={handleChange}
              value={novoUsuario.uf}
              name='uf'
              readOnly
              required
            />
          </label>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
};

export default FormCadastro;
