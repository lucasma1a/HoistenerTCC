import { PiShoppingCartDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import style from './DetalhesCarro.module.css';

export default function DetalhesCarro({infoCar}){
    
    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
        
    const formattedPrice = formatPrice(infoCar.price);

    function formatDate(dateString) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1); 
        return date.toLocaleDateString('pt-BR');
      }

    return(
        <>
        <section className={style.detalhes}>
            <div className={style.detalhesImg}>
                <img src={infoCar.image} alt={infoCar.model} />
            </div>
            <div className={style.detalhesInfo}>
                <h1>{infoCar.mark} {infoCar.model}</h1>

                <h2>{formattedPrice}</h2>

                <div className={style.desc}>
                    <ul>
                        <li><b>Placa:</b> {infoCar.plate}</li>
                        <li><b>Data de lançamento:</b> {infoCar.releaseDate ? formatDate(infoCar.releaseDate) : ''}</li>
                        <li><b>Cor:</b> {infoCar.color}</li>
                    </ul> 

                    <h3>Descrição:</h3>

                    <p>
                        {infoCar.description}
                    </p>
                </div>
            </div>

            <div className={style.btns}>
                <Link to={`/compra/${infoCar._id}`} style={{textDecoration: 'none'}}>
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