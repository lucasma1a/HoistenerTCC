import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Footer() {
    return(
        <>
            <footer className="footer">
                <a id="Contato"></a>
                <section className="footer-container">
                <container className="footer-container-1">
                    <ul>
                    <li className="footer-container-1-info">Rua Guaipá 678, São Paulo, SP, 05089-001</li>
                    <li className="footer-container-1-info">Rua Guaipá 678, São Paulo, SP, 05089-001</li>
                    <li className="footer-container-1-info">Copyright 2024 Todos os direitos reservados</li>
                    </ul>
                </container>                    
                <container className="footer-container-2">
                    <ul>
                    <Link to="/">Home</Link>
                    <Link to="/Garagem">Garagem</Link>
                    <li className="footer-container-2-info"><a href="#Sobre"></a></li>
                    </ul>
                </container>                    
                <container className="footer-container-3">
                    <ul>
                        <li className="footer-container-3-info">Nossas Redes</li>
                        <li className="footer-container-3-info"><FaPhoneAlt />(11)96229-1524</li>
                        <li className="footer-container-3-info"><FaInstagram />@hoistener</li>
                    </ul>
                </container>                                        
            </section>
            </footer>
        </>
    )
}
