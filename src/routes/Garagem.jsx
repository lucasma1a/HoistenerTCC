import { useEffect, useState } from 'react';
import styleBusca from '../components/Busca/Busca.module.css';
import Car from '../components/Car';
import ErroBusca from '../components/ErroBusca/ErroBusca.jsx';
import ListaMarcas from '../components/ListaMarcas/ListaMarcas.jsx';
import '../css/style.css';

export default function Garagem() {

    const [carros, setCarros] = useState([])
    const [busca, setBusca] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/cars')
        .then(response => response.json())
        .then(dados => setCarros(dados))
    })

    const carrosFiltrados = carros.filter(carro =>
        carro.mark.toLowerCase().includes(busca.toLowerCase())
    );

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
            {carrosFiltrados.length ? (
                carrosFiltrados.map((carro, index) => (
                    <Car
                        key={carro.id}
                        car={carro}
                    />
                    // nome, preco, imagem, descricao, marca, modelo, placa, lancamento, cor, data
                ))
            ) : (
                <ErroBusca/>
            )}
            </div>
        </>
    )
}