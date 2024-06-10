import style from './ErroBusca.module.css'
import Gif from './img/confuso.gif'

export default function ErroBusca({texto}){
    return(
        <>
        <div className={style.erroBusca}>
            <img src={Gif} alt="" />
            <h1>{texto}</h1>
        </div>
        </>
    )
}