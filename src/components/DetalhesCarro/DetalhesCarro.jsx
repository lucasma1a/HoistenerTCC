import { PiShoppingCartDuotone } from "react-icons/pi"
import { Link } from "react-router-dom"
import style from './DetalhesCarro.module.css'

export default function DetalhesCarro({infoCar}){
    return(
        <>
        <section className={style.detalhes}>
            <div className={style.detalhesImg}>
                <img src={infoCar.image} alt={infoCar.model} />
            </div>
            <div className={style.detalhesInfo}>
                <h1>{infoCar.mark} {infoCar.model}</h1>

                <h2>R$ {infoCar.price}</h2>

                <div className={style.desc}>
                    <ul>
                        <li><b>Placa:</b> {infoCar.plate}</li>
                        <li><b>Data de lançamento:</b> {infoCar.releaseDate}</li>
                        <li><b>Cor:</b> {infoCar.color}</li>
                    </ul>

                    <h3>Descrição:</h3>

                    <p>
                        {infoCar.description}
                    </p>
                </div>
            </div>

            <div className={style.btns}>
                <button> <PiShoppingCartDuotone size={25}/>Adicionar ao Carrinho</button>
                <Link to='/garagem'>
                <button>Voltar para garagem</button>
                </Link>
                </div>
        </section>
        </>
    )
}