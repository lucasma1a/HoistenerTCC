import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import style from './Car.module.css';

const Car = ({ car }) => {

    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
        
    const formattedPrice = formatPrice(car.price);

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
                <Link to={`/compra/${car._id}`} 
                style={{textDecoration: 'none'}}>
                <button 
                    className={style.containerCarroCardBtnBtn}
                >
                    <PiShoppingCartDuotone size={25}/>Reservar agora
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Car;
