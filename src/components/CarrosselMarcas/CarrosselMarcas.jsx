import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CarroAston from "./img/astonmartin.jpg";
import CarroAudi from "./img/audi.jpg";
import CarroBMW from "./img/bmw.jpg";
import CarroHyundai from "./img/hyundai.jpg";
import CarroMeca from "./img/meca.jpg";
import CarroVolks from "./img/volks.jpg";

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import style from './CarrosselMarcas.module.css';

const CarrosselMarcas = () => {
    const marcas = [
        {
        marca: 'BMW',
        imagem: CarroBMW,
        rota: 'bmw'    
        },
        {
        marca: 'ASTON',
        imagem: CarroAston,    
        rota: 'aston'    
        },
        {
        marca: 'AUDI',
        imagem: CarroAudi,
        rota: 'audi'        
        },
        {
        marca: 'HYUNDAI',
        imagem: CarroHyundai,
        rota: 'hyundai'        
        },
        {
        marca: 'MERCEDES',
        imagem: CarroMeca,
        rota: 'meca'        
        },
        {
        marca: 'VOLKSWAGEN',
        imagem: CarroVolks,
        rota: 'volks'        
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className={style.containerCarrosselMarcas}>
            <Slider {...settings} className={style.slider}>
                {marcas.map((item, index) => (
                    <Link to={`/garagem/${item.rota}`} className={style.link}>
                    <div key={index} className={style.card}>
                        <img src={item.imagem} alt={`Carro ${item.id}`} className={style.cardImage} />
                        <h1>{item.marca}</h1>
                    </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
}

export default CarrosselMarcas;
