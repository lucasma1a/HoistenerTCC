import CarroBMW from "../assets/bmw.jpg";
import CarroMeca from "../assets/meca.jpg";
import CarroAston from "../assets/astonmartin.jpg";
import CarroAudi from "../assets/audi.jpg";
import CarroVolks from "../assets/volks.jpg";
import CarroHyundai from "../assets/hyundai.jpg";
import { Link } from 'react-router-dom';
export default function Volks(){
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

        </>
    )

}