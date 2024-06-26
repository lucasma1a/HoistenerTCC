import React, { useContext, useEffect, useState } from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { IoMdSpeedometer } from "react-icons/io";
import { PiGearFineFill } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import style from "./CompraCarro.module.css";

const CompraCarro = ({ car }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const { reserva, setReserva } = useContext(AppContext);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: ''
  })
  let getId = sessionStorage.getItem("id");
  let getToken = sessionStorage.getItem("token");

  useEffect(() => {
    fetch('http://localhost:4000/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    if (users.length > 0 && getId) {
      const foundUser = users.find(user => user._id === getId)
      if (foundUser) {
        setUser({
          ...foundUser,
          password: ''
        })
      }
    }
  }, [users, getId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getId && !getToken) {
      alert("Você deve realizar o login para reservar um carro");
      navigate("/login");
      return;
    } else {
      fetch(`http://localhost:4000/reserva/${getId}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: getId,
          carId: id,
          startDate: "2017-12-16",
          endDate: "2017-12-20",
        })
      }).then((r) => {
        alert('reserva efetuada')
        navigate('/login')
    }).catch((e) => {
        alert('Erro: ', e)
    })
    }
  };

  function formatPrice(price) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const formattedPrice = formatPrice(car.price);
  return (
    <>
      <section className={style.container}>
        <div className={style.containerCard}>
          <h1 className={style.containerTitle}>
            {car.mark} {car.model}
            <h2>{formattedPrice}</h2>
          </h1>
          <div className={style.containerImg}>
            <img src={car.image} alt={`${car.mark}, ${car.model}`} />
          </div>
          <div className={style.containerInfo}>
            <ul className={style.infoTop}>
              <li><IoMdSpeedometer size={25}/>{car.quilometragem}</li>
              <li><CgArrowsExchangeAltV />Cambio:  {car.cambio}</li>
            </ul>
            <ul className={style.infoBot}>
              <li> <PiGearFineFill />Motor: {car.motor}</li>
              <li  className={style.flex}>Flex: {car.flex ? <p>Flex</p> : <p>Não</p>}</li>
            </ul>
          </div>
        </div>

        <div className={style.form}>
          <h3>{!getId && !getToken ? 'Faça login para reservar um carro' : 'Confirme suas informações abaixo'}</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                placeholder="Digite seu nome"
                required={true}
                onChange={handleChange}
                value={user.name}
                name='name'
              />
            </label>

            <label>
              E-mail:
              <input
                type="email"
                placeholder="Digite seu email"
                required={true}
                onChange={handleChange}
                value={user.email}
                name='email'
              />
            </label>

            <label>
              Telefone:
              <input
                type="text"
                placeholder="Digite seu telefone"
                required={true}
                onChange={handleChange}
                value={user.telefone}
              />
            </label>

            <label>
              CPF:
              <input
                type="number"
                placeholder="Digite seu CPF"
                required={true}
                onChange={handleChange}
                value={user.cpf}
                name='cpf'
              />
            </label>

            <label>
              Data de Nascimento:
              <input
                type="text"
                placeholder="Insira sua data de nascimento"
                required={true}
                onChange={handleChange}
                value={user.data_nascimento ? new Date(user.data_nascimento).toLocaleDateString() : ''}
              />
            </label>

            <label>
              Digite seu CEP:
              <input
                type="number"
                placeholder="Insira seu CEP"
                required={true}
                onChange={handleChange}
                value={user.cep}
              />
            </label>

            <button>Reservar Carro</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CompraCarro;
