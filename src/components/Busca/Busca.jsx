import style from './Busca.module.css'

export default function Busca({placeholder, change}){
    return(
        <>
        <input type="text" className={style.busca} placeholder={placeholder}/>
        </>
    )
}