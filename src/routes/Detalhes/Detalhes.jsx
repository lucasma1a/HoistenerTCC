import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetalhesCarro from "../../components/DetalhesCarro/DetalhesCarro";
import style from './Detalhes.module.css';

export default function Detalhes(){
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        try {
        fetch('http://localhost:4000/cars')
            .then(response => response.json())
            .then(dados => setCarros(dados));
        } catch {
            console.log('erro ao se conectar com a API')
        }
    }, []);

    const parametro = useParams();

    const carro = carros.find((car) => {
        return car._id === parametro.id;  
    });

    console.log(parametro);
    console.log(carro);

    return(
        <>
      {carro ? (
            <div className={style.detalhes}><DetalhesCarro infoCar={carro} /></div>
            ) : (
                <p>Car not found</p>
            )}
        </>
    )
}