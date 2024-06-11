import React from 'react'
import CompraCarro from '../../components/CompraCarro/CompraCarro'
import style from './Compra.module.css'
 
const Compra = () => {
   
  return (
    <>
    <section className={style.container}>
      <CompraCarro/>
    </section>
    </>
  )
}
 
export default Compra