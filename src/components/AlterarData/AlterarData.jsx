import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext.jsx';
import style from './AlterarData.module.css';

const AlterarData = () => {

    const{setUserLogado} = useContext(AppContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState({
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

      useEffect(() => {
        fetch('http://localhost:4000/users/')
          .then(response => response.json())
          .then(data => setUsers(data))
      }, [])

      useEffect(() => {
        if (users.length > 0 && id) {
          const foundUser = users.find(user => user._id === id)
          if (foundUser) {
            setUsuario({
              ...foundUser,
              password: ''
            })
            setEmail(foundUser.email)
          }
        }
      }, [users, id])

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    
        if (name === 'cep' && value.length === 8) {
          fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then(response => response.json())
            .then(dados => {
              if (!dados.erro) {
                setUsuario((prevUsuario) => ({
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

        fetch(`http://localhost:4000/login`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: email, password: usuario.password})
        }).then((response) => {
          if(response.status === 200){
            fetch(`http://localhost:4000/user/${id}`,{
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(usuario)
            }).then((response) => {
              if(response.status === 200){
                alert('Dados alterados com sucesso')
                setUserLogado({
                  _id: usuario._id,
                  name: usuario.name,
                  password: usuario.password,
                  email: usuario.email
                })
                navigate('/login')
                return response.json()
              }
            }).then((data) => {
              console.log('sua data aki', data)
              sessionStorage.setItem('id', data._id);
              sessionStorage.setItem('token', data.token);
            })
            .catch((e) => {
              alert('Erro: ', e)
            })
          } 
        }).catch((e) => {
          alert(e)
        })
      };

  return (
    <>
       <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Alterar Dados</h1>

          <label>
            Nome:
            <input
              type="text"
              placeholder='Digite seu nome'
              onChange={handleChange}
              value={usuario.name}
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
              value={usuario.email}
              name='email'
              required
            />
          </label>

          <label>
            CPF:
            <input
              type="number"
              placeholder='Digite seu CPF'
              onChange={handleChange}
              value={usuario.cpf}
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
              value={usuario.cep}
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
              value={usuario.logradouro}
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
              value={usuario.bairro}
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
              value={usuario.localidade}
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
              value={usuario.uf}
              name='uf'
              readOnly
              required
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              placeholder='Digite sua senha'
              value={usuario.password}
              onChange={handleChange}
              name='password'
              required
            />
          </label>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  )
}

export default AlterarData
