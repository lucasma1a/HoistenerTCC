import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Teste = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        try {
        fetch('http://localhost:4000/cars')
            .then(response => response.json())
            .then(dados => setCarros(dados));
        } catch {
            alert('erro ao se conectar com a API')
        }
    }, []);

    const parametro = useParams();

    const carro = carros.find((car) => {
        return car._id === parametro.id;  
    });

    console.log(parametro);

    return (
        <>
        </>
    );
};

export default Teste;
