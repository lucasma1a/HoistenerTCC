import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHorseHead } from "react-icons/gi";
import Logo from '../assets/hoistener-logo.png';


export default function Footer() {
    return(
        <>
            <footer className="footer">
                <a id="Contato"></a>
                <section className="footer-container">
                <div className="footer-container-1">
                    <ul>
                    <li className="footer-container-1-info">
                        Rua Guaipá 678, São Paulo, SP, 05089-001
                    </li>
                    <li className="footer-container-1-info2">
                        <GiHorseHead size={30}/>
                    </li>
                    <li className="footer-container-1-info1">
                        Copyright 2024 Todos os direitos reservados
                    </li>
                    </ul>
                </div>                    
                <div className="footer-container-2">
                    <ul>
                    <li className="footer-container-2-info">
                        <a href="#Home">Menu</a>
                    </li>
                    <li className="footer-container-2-info">
                        <a href="#Sobre">Sobre Nós</a>
                    </li>
                    </ul>
                </div>                    
                <div className="footer-container-3">
                    <ul>
                        <li className="footer-container-3-info1">
                            Nossas Redes
                        </li>
                        <li className="footer-container-3-info">
                            <FaPhoneAlt /> 
                            (11)96229-1524
                        </li>
                        <li className="footer-container-3-info">
                            <FaInstagram/>
                            @hoistener__
                        </li>
                    </ul>
                </div>                                        
            </section>
            </footer>
        </>
    )
}
