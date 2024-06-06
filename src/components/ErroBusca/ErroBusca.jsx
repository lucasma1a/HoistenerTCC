import style from './ErroBusca.module.css'
import Gif from './img/confuso.gif'

export default function ErroBusca(){
    return(
        <>
        <div className={style.erroBusca}>
            <img src={Gif} alt="" />
            <h1>Não há carros com essa marca</h1>
        </div>
        </>
    )
}