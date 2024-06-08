import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarroAston from "../assets/astonmartin.jpg";
import CarroAudi from "../assets/audi.jpg";
import CarroBMW from "../assets/bmw.jpg";
import CarroHyundai from "../assets/hyundai.jpg";
import CarroMeca from "../assets/meca.jpg";
import CarroVolks from "../assets/volks.jpg";

export default function Bmw(){

    const [carros, setCarros] = useState([])

    const marca = 'bmw'
    const carrosFiltrados = carros.filter(carro => carro.marca === marca)

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
                <container className="marcas-bmw-garagem">
                    <img src={CarroBMW} alt="carro1" />
                    <Link to="/garagem/bmw" className="marcas-garagem-name">BMW </Link>
                </container>                    
                <container className="marcas-mercedes-garagem">
                    <img src={CarroMeca} alt="carro2" />
                    <Link to="/garagem/meca" className="marcas-mercedes-garagem-name">MERCEDES</Link>
                </container>                    
                <container className="marcas-astonmartin-garagem">
                    <img src={CarroAston} alt="carro3" />
                <Link to="/garagem/aston" className="marcas-astonmartin-garagem-name">ASTON MARTIN</Link>
                </container>                                        
                <container className="marcas-audi-garagem">
                    <img src={CarroAudi} alt="carro4" />
                <Link to="/garagem/audi" className="marcas-audi-garagem-name">AUDI</Link>
                </container>                                        
                <container className="marcas-volkswagen-garagem">
                    <img src={CarroVolks} alt="carro5" />
                <Link to="/garagem/volks" className="marcas-volkswagen-garagem-name">VOLKSWAGEN</Link>
                </container>                                        
                <container className="marcas-hyundai-garagem">
                    <img src={CarroHyundai} alt="carro6" />
                <Link to="/garagem/hyundai" className="marcas-hyundai-garagem-name">HYUNDAI</Link>
                </container>                                        
            </section>

            <div className="container-carro">                  
            </div>
        </>
    )

}