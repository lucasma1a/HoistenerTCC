import { PiShoppingCartDuotone } from "react-icons/pi"
import style from '../css/Car.module.css'

const Car = ({nome, preco, imagem, descricao, marca, modelo, placa, lancamento, cor, data}) => {
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
                            <li>Marca: {marca}</li>
                            <li>Modelo: {modelo}</li>
                            <li>Placa: {placa}</li>
                        </ul>
                        <ul>
                            <li>color: {cor}</li>
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
