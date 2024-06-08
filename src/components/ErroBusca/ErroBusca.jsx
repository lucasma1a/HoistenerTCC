import style from './ErroBusca.module.css'
import Gif from './img/confuso.gif'

export default function ErroBusca(){
    return(
        <>
        <div className={style.erroBusca}>
            <img src={Gif} alt="" />
            <h1>Não há carros registrados com essa marca ou modelo</h1>
        </div>
        </>
    )
}