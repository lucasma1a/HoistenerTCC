import { PiShoppingCartDuotone } from "react-icons/pi"
import { Link } from "react-router-dom"
import style from './Car.module.css'

const Car = ({car}) => {
    return(
        <>
           <div className={style.containerCarroCard}>
                    <div className={style.containerCarroCardImage}>
                        <img src={car.image} alt="" />    
                    </div>
                    <div className={style.containerCarroCardPrice}>
                    <p>R$ {car.price}</p>
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
                        <Link to={`/detalhes/${car._id}`}>
                        <button className={style.containerCarroCardBtnBtn}>Detalhes</button>
                        </Link>
                        <button className={style.containerCarroCardBtnBtn}> <PiShoppingCartDuotone size={25}/>Comprar agora</button>
                    </div>                    
                </div>
        </>
    )
}

export default Car
