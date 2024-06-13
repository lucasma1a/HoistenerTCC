import Marcas from '../Marcas/Marcas';
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
        imagem: CarroBMW,
        rota: 'bmw'    
        },
        {
        marca: 'ASTON',
        imagem: CarroAston,    
        rota: 'aston'    
        },
        {
        marca: 'AUDI',
        imagem: CarroAudi,
        rota: 'audi'        
        },
        {
        marca: 'HYUNDAI',
        imagem: CarroHyundai,
        rota: 'hyundai'        
        },
        {
        marca: 'MERCEDES',
        imagem: CarroMeca,
        rota: 'meca'        
        },
        {
        marca: 'VOLKSWAGEN',
        imagem: CarroVolks,
        rota: 'volks'        
        },
    ]

    return(
        <>
        {marcas.map((marca, index) => {
                return <Marcas key={index} imagem={marca.imagem} marca={marca.marca} linkado={marca.rota}/>
            })}
        </>
    )
}