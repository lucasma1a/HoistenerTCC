import { useEffect, useState } from 'react';
import CarroAston from "../assets/astonmartin.jpg";
import CarroAudi from "../assets/audi.jpg";
import CarroBMW from "../assets/bmw.jpg";
import CarroHyundai from "../assets/hyundai.jpg";
import CarroMeca from "../assets/meca.jpg";
import CarroVolks from "../assets/volks.jpg";
import Car from '../components/Car';
import Marcas from '../components/Marcas';
import '../css/style.css';

export default function Garagem() {

    const [carros, setCarros] = useState([])

    const marcas = [
        {
        marca: 'Bmw',
        imagem: CarroBMW    
        },
        {
        marca: 'Aston',
        imagem: CarroAston    
        },
        {
        marca: 'Audi',
        imagem: CarroAudi    
        },
        {
        marca: 'Hyundai',
        imagem: CarroHyundai    
        },
        {
        marca: 'Meca',
        imagem: CarroMeca    
        },
        {
        marca: 'Volks',
        imagem: CarroVolks    
        },
    ]

    useEffect(() => {
        fetch('http://localhost:3000/carros')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setCarros(data)
        })
    }, [])

    return(
        <>
           
            <section className="marcas">
            {marcas.map((marca, index) => {
                return <Marcas key={index} imagem={marca.imagem} marca={marca.marca} linkado={marca.marca}/>
            })}
            </section>

            <div className="container-carro">                  
            {carros.map(carro => (
                    <Car
                        key={carro.nome}
                        nome={carro.nome}
                        preco={carro.preco}
                        imagem={carro.imagem}
                    />
                ))}
            </div>
        </>
    )
}