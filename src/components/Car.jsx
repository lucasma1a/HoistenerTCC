import style from '../css/Car.module.css'
import { PiShoppingCartDuotone } from "react-icons/pi"

const Car = ({nome, preco, imagem, descricao}) => {
    return(
        <>
           <div className={style.containerCarroCard}>
                    <div className={style.containerCarroCardImage}>
                        <img src={imagem} alt="" />    
                    </div>
                    <div className={style.containerCarroCardPrice}>
                    <p>R$ {preco}</p>
                    </div>
                    <div className={style.containerCarroCardName}>
                        <p>{nome}</p>
                        <p>{descricao}</p>
                    </div>
                    <div className={style.containerCarroCardLista}>
                        <ul>
                            <li>Marca</li>
                            <li>Modelo</li>
                            <li>Placa</li>
                        </ul>
                        <ul>
                            <li>lançamento</li>
                            <li>color</li>
                            <li>color</li>
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
