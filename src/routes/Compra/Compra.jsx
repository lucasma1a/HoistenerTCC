import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CompraCarro from '../../components/CompraCarro/CompraCarro'
import style from './Compra.module.css'
 
const Compra = () => {
   
  const [carros, setCarros] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/cars')
    .then(response => response.json())
    .then(dados => setCarros(dados))
    .catch((e) => {
      console.log(e)
      alert('erro ao se conectar na API')
    })
  }, [])

  const id = useParams()

  const carro = carros.find((car) => {
    return car._id === id.id
  })

  return (
    <>
    <section className={style.container}>
      {carro ? (
         <CompraCarro car={carro}/>
      ):
      <h1>car not found</h1>}
     
    </section>
    </>
  )
}
 
export default Compra