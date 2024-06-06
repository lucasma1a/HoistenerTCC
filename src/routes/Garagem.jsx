import { useEffect, useState } from 'react';
import CarroAston from "../assets/astonmartin.jpg";
import CarroAudi from "../assets/audi.jpg";
import CarroBMW from "../assets/bmw.jpg";
import CarroHyundai from "../assets/hyundai.jpg";
import CarroMeca from "../assets/meca.jpg";
import CarroVolks from "../assets/volks.jpg";
import Car from '../components/Car';
import '../css/style.css';
import styleBusca from '../components/Busca/Busca.module.css'
import ListaMarcas from '../components/ListaMarcas/ListaMarcas.jsx'

export default function Garagem() {

    const [carros, setCarros] = useState([])
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const fetchCarros = async () => {
            let url = 'http://localhost:3000/carros';
            
            if (busca.length > 2) {
                url += `?marca=${busca}`;
            }
                const response = await fetch(url);
                const dados = await response.json();
                setCarros(dados);
            
        };
        fetchCarros();
    }, [busca]);

    const funcBusca = (e) => {
        setBusca(e.target.value)
    }

    return(
        <>
                     
            <section className="marcas">
            <ListaMarcas/>
            </section>

            <div className="container-busca">
            <input
                className={styleBusca.busca}
                value={busca}
                onChange={funcBusca}
                placeholder="Digite a marca do carro"
            />
            </div>
            

            <div className="container-carro">                  
            {carros.length ? (
                carros.map((carro, index) => (
                    <Car
                        key={index}
                        nome={carro.nome}
                        preco={carro.preco}
                        imagem={carro.imagem}
                        descricao={carro.descricao}
                    />
                ))
            ) : (
                <h1>Não há carros com essa marca</h1>
            )}
            </div>
        </>
    )
}