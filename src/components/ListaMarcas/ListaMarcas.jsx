import Marcas from '../Marcas/Marcas'
import CarroAston from "./img/astonmartin.jpg";
import CarroAudi from "./img/audi.jpg";
import CarroBMW from "./img/bmw.jpg";
import CarroHyundai from "./img/hyundai.jpg";
import CarroMeca from "./img/meca.jpg";
import CarroVolks from "./img/volks.jpg";



export default function ListaMarcas(){

    const marcas = [
        {
        marca: 'BMW',
        imagem: CarroBMW    
        },
        {
        marca: 'ASTON',
        imagem: CarroAston    
        },
        {
        marca: 'AUDI',
        imagem: CarroAudi    
        },
        {
        marca: 'HYUNDAI',
        imagem: CarroHyundai    
        },
        {
        marca: 'MERCEDES',
        imagem: CarroMeca    
        },
        {
        marca: 'VOLKSWAGEN',
        imagem: CarroVolks    
        },
    ]

    return(
        <>
        {marcas.map((marca, index) => {
                return <Marcas key={index} imagem={marca.imagem} marca={marca.marca} linkado={marca.marca}/>
            })}
        </>
    )
}