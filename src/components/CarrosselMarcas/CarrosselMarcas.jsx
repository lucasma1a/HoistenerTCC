import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CarroAston from "./img/astonmartin.jpg";
import CarroAudi from "./img/audi.jpg";
import CarroBMW from "./img/bmw.jpg";
import CarroHyundai from "./img/hyundai.jpg";
import CarroMeca from "./img/meca.jpg";
import CarroVolks from "./img/volks.jpg";

import '../Carrossel/CarrosselMarcass.module.css'

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
    <div className='container-carrossel-marcas'>
      <Swiper 
        slidesPerView={2}
        pagination={{clickable: true}}
        
      >
        {marcas.map ((item) => (
        <SwiperSlide key={item.id}>
            <img src={item.image} alt='slideMarca' className='container-carrossel-marca-slide'></img>
        </SwiperSlide>
      ))}  
      </Swiper>
    </div>
    </>
  )
}

export default CarrosselMarcas
