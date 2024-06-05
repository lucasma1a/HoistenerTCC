import style from './Busca.module.css'

export default function Busca({placeholder}){
    return(
        <>
        <input type="text" className={style.busca} placeholder={placeholder}/>
        </>
    )
}