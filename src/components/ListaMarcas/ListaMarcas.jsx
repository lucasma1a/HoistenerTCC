import Marcas from '../Marcas'
import CarroAston from "./img/astonmartin.jpg";
import CarroAudi from "./img/audi.jpg";
import CarroBMW from "./img/bmw.jpg";
import CarroHyundai from "./img/hyundai.jpg";
import CarroMeca from "./img/meca.jpg";
import CarroVolks from "./img/volks.jpg";

export default function ListaMarcas(){

    const marcas = [
        {
        marca: 'Bmw',
        imagem: CarroBMW    
        },
        {
        marca: 'Aston',
        imagem: CarroAston    
        },
        {
        marca: 'Audi',
        imagem: CarroAudi    
        },
        {
        marca: 'Hyundai',
        imagem: CarroHyundai    
        },
        {
        marca: 'Meca',
        imagem: CarroMeca    
        },
        {
        marca: 'Volks',
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