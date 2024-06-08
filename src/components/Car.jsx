import { PiShoppingCartDuotone } from "react-icons/pi"
import style from '../css/Car.module.css'

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
                        <p>{car.name}</p>
                        <p>{car.description}</p>
                    </div>
                    <div className={style.containerCarroCardLista}>
                        <ul>
                            <li>Marca: {car.mark}</li>
                            <li>Modelo: {car.model}</li>
                            <li>Placa: {car.plate}</li>
                        </ul>
                        <ul>
                            <li>color: {car.cor}</li>
                        </ul>
                    </div>
                    <div className={style.containerCarroCardBtn}> 
                        <button className={style.containerCarroCardBtnBtn}>Detalhes</button>
                        <button className={style.containerCarroCardBtnBtn}> <PiShoppingCartDuotone size={25}/>Comprar agora</button>
                    </div>                    
                </div>
        </>
    )
}

export default Car
