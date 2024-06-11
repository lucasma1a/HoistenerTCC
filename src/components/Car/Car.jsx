import { useContext } from 'react';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext.jsx';
import style from './Car.module.css';

const Car = ({ car }) => {

    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
        
    const formattedPrice = formatPrice(car.price);

    const { addToCart } = useContext(AppContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(car);
        navigate('/carrinho'); // Redireciona para a página do carrinho
    };

    return (
        <div className={style.containerCarroCard}>
            <div className={style.containerCarroCardImage}>
                <img src={car.image} alt="" />
            </div>
            <div className={style.containerCarroCardPrice}>
                <p>{formattedPrice}</p>
            </div>
            <div className={style.containerCarroCardName}>
                <p>{car.mark} {car.model}</p>
            </div>
            <div className={style.containerCarroCardLista}>
                <ul>
                    <li>Cor: {car.color}</li>
                </ul>
            </div>
            <div className={style.containerCarroCardBtn}>
                <Link to={`/detalhes/${car._id}`} className={style.btnLink}>
                    <button className={style.containerCarroCardBtnBtn}>Detalhes</button>
                </Link>
                <button 
                    className={style.containerCarroCardBtnBtn}
                    onClick={handleAddToCart}
                >
                    <PiShoppingCartDuotone size={25}/>Comprar agora
                </button>
            </div>
        </div>
    );
};

export default Car;
