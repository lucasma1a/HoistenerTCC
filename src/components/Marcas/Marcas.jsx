import { Link } from "react-router-dom";


const Marcas = ({imagem, marca, linkado}) => {
    return(
        <>
            <div className="marcas2">
                <div className="marcas-bmw-garagem">
                    <img src={imagem} alt="carro1" />
                    <Link to={`/garagem/${linkado}`} className="marcas-garagem-name">{marca} </Link>
                </div> 
            </div>                                                        
        </>
    )
}

export default Marcas