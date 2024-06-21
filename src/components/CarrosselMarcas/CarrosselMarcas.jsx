import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CarroAston from "./img/astonmartin.jpg";
import CarroAudi from "./img/audi.jpg";
import CarroBMW from "./img/bmw.jpg";
import CarroHyundai from "./img/hyundai.jpg";
import CarroMeca from "./img/meca.png";
import CarroVolks from "./img/volks.jpg";

import style from'./CarrosselMarcas.module.css'

const CarrosselMarcas = () => {
    const marcas = [
        {
            id: 1,
            image: CarroBMW
        },
        {
            id: 2,
            image: CarroAston
        },
        {
            id: 3,
            image: CarroAudi
        },
        {
            id: 4,
            image: CarroHyundai
        },
        {
            id: 5,
            image: CarroMeca
        },
        {
            id: 6,
            image: CarroVolks
        }

    ]
  
    return (
    <>
    <div className={style.containerCarrosselMarcas}>
      <Swiper 
        slidesPerView={3}
      >
        {marcas.map ((item) => (
        <SwiperSlide key={item.id}>
            <img src={item.image} alt='slideMarca' className={style.containerCarrosselMarcasSlide}></img>
        </SwiperSlide>
      ))}  
      </Swiper>
    </div>
    </>
  )
}

export default CarrosselMarcas
