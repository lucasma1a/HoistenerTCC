import CarroBMW from "../assets/bmw.jpg";
import { Link } from 'react-router-dom';

export default function Garagem() {
    return(
        <>
            <section className="marcas">
                <container className="marcas-bmw-garagem">
                    <Link to="/garagem/bmw" className="marcas-bmw-garagem-name">BMW</Link>
                </container>                    
                <container className="marcas-mercedes-garagem">
                <Link to="/garagem/meca" className="marcas-bmw-garagem-name">MERCEDES</Link>
                </container>                    
                <container className="marcas-astonmartin-garagem">
                <Link to="/garagem/aston" className="marcas-bmw-garagem-name">ASTON MARTIN</Link>
                </container>                                        
                <container className="marcas-audi-garagem">
                <Link to="/garagem/audi" className="marcas-bmw-garagem-name">AUDI</Link>
                </container>                                        
                <container className="marcas-volkswagen-garagem">
                <Link to="/garagem/volks" className="marcas-bmw-garagem-name">VOLKSWAGEN</Link>
                </container>                                        
                <container className="marcas-hyundai-garagem">
                <Link to="/garagem/hyundai" className="marcas-bmw-garagem-name">HYUNDAI</Link>
                </container>                                        
            </section>

        </>
    )
}