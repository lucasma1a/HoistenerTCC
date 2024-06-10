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
        <div className="marcas-bmw-garagem">
                    <img src={CarroBMW} alt="carro1" />
                    <Link to="/garagem" className="marcas-garagem-name">BMW </Link>
                </div>                    
                <div className="marcas-bmw-garagem">
                    <img src={CarroMeca} alt="carro2" />
                    <Link to="/garagem" className="marcas-garagem-name">MERCEDES</Link>
                </div>                    
                <div className="marcas-bmw-garagem">
                    <img src={CarroAston} alt="carro3" />
                <Link to="/garagem" className="marcas-garagem-name">ASTON MARTIN</Link>
                </div>                                        
                <div className="marcas-bmw-garagem">
                    <img src={CarroAudi} alt="carro4" />
                <Link to="/garagem" className="marcas-garagem-name">AUDI</Link>
                </div>                                        
                <div className="marcas-bmw-garagem">
                    <img src={CarroVolks} alt="carro5" />
                <Link to="/garagem" className="marcas-garagem-name">VOLKSWAGEN</Link>
                </div>                                        
                <div className="marcas-bmw-garagem">
                    <img src={CarroHyundai} alt="carro6" />
                <Link to="/garagem" className="marcas-garagem-name">HYUNDAI</Link>
                </div>                                         
            </section>

            <div className="container-carro">                  
            </div>
        </>
    )

}