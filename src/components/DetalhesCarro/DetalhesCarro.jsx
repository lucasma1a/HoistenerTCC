import { useContext } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext.jsx';
import style from './DetalhesCarro.module.css';

export default function DetalhesCarro({infoCar}){

    const { addToCart } = useContext(AppContext);
    const navigate = useNavigate();
    

    const handleAddToCart = () => {
        addToCart(infoCar);
        navigate('/carrinho'); // Redireciona para a página do carrinho
    };

    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
        
    const formattedPrice = formatPrice(infoCar.price);

    return(
        <>
        <section className={style.detalhes}>
            <div className={style.detalhesImg}>
                <img src={infoCar.image} alt={infoCar.model} />
            </div>
            <div className={style.detalhesInfo}>
                <h1>{infoCar.mark} {infoCar.model}</h1>

                <h2>R$ {formattedPrice}</h2>

                <div className={style.desc}>
                    <ul>
                        <li><b>Placa:</b> {infoCar.plate}</li>
                        <li><b>Data de lançamento:</b> {new Date(infoCar.releaseDate).toLocaleDateString()}</li>
                        <li><b>Cor:</b> {infoCar.color}</li>
                    </ul>

                    <h3>Descrição:</h3>

                    <p>
                        {infoCar.description}
                    </p>
                </div>
            </div>

            <div className={style.btns}>
                <Link to={`/compra/${infoCar._id}`}>
                <button> <PiShoppingCartDuotone size={25}/>Reservar agora</button>
                </Link>
                <Link to='/garagem' className={style.btnLink}>
                <button>Voltar para garagem</button>
                </Link>
                </div>
        </section>
        </>
    )
}