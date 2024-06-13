import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/hoistener-logo1.svg";
import UserLogado from "../../components/UserLogado/UserLogado";
import AppContext from "../../context/AppContext";
import "../../css/style.css";
import style from "./Login.module.css";

export default function Login() {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const {userLogado, setUserLogado} = useContext(AppContext)
  const [logged, setLogged] = useState([])
  const getId = sessionStorage.getItem('id')
  const getToken = sessionStorage.getItem('token')

  console.log('Id: ',getId)
  console.log('token:', getToken)

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  const handleChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const logado = users.find(user => user.email === login.email)

    if(!logado){
      alert('Usuário não encontrado')
      return 
    }

    setUserLogado(logado)
    console.log('usuário encontrado: ', logado)
    console.log('Cidade n vem hj: ', userLogado)
  
    fetch(
      'http://localhost:4000/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
      }
    ).then(async (response) => {
      if (response.status === 200) {
        alert('Login Efetuado')
        console.log('user logged', logado)
        navigate('/')
        return response.json(); 
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .then((data) => {
      sessionStorage.setItem('id', data._id);
      sessionStorage.setItem('token', data.token);
      console.log(data); 
    })
    .catch((e) => {
      console.log(e);
      alert(e
      );
    });
  };

  return (
    <section className="login">
      {getId && getToken ? (<UserLogado loggedUser={userLogado}/>) : 
      (<div className={style.loginForm}>
        <div className={style.loginFormImg}>
          <img src={Logo} alt="imagem" />
        </div>
        <form 
        className={style.loginFormForm}
        onSubmit={handleSubmit}
        >
          <h1>Login</h1>
          <p>
            Email:
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu Email"
              required
              className={style.input}
              value={login.email}
              onChange={handleChange}
            />
          </p>
          <p>
            Senha:
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
              className={style.input}
              value={login.password}
              onChange={handleChange}
            />
          </p>

          <div className={style.btns}>
            <button type="submit">Login</button>
          </div>
          <div className={style.cadastro}>
            <p style={{ fontSize: 14 }}>Não possui uma conta?</p>
            <Link to="/cadastro" className={style.linkCadastro}>
              <button>Cadastrar</button>
            </Link>
          </div>
        </form>
      </div>) }
    </section>
  );
}
