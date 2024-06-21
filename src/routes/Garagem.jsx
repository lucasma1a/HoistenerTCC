import { useEffect, useState } from 'react';
import styleBusca from '../components/Busca/Busca.module.css';
import Car from '../components/Car/Car.jsx';
import ErroBusca from '../components/ErroBusca/ErroBusca.jsx';
import ListaMarcas from '../components/ListaMarcas/ListaMarcas.jsx';
import CarrosselMarcas from '../components/CarrosselMarcas/CarrosselMarcas.jsx';
import '../css/style.css';

export default function Garagem() {

    const [carros, setCarros] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [busca, setBusca] = useState('');
    const texto = 'Não há carros com esta marca ou modelo';

    useEffect(() => {
        fetch("http://localhost:4000/cars")
            .then((response) => response.json())
            .then((dados) => setCarros(dados))
            .catch(() => console.log('erro ao se conectar com a API de carros'));
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/reservas")
            .then((response) => response.json())
            .then((dados) => setReservas(dados))
            .catch(e => alert('erro: ', e));
    }, []);

    const carrosFiltrados = carros
        .filter(carro => 
            carro.mark.toLowerCase().includes(busca.toLowerCase()) || 
            carro.model.toLowerCase().includes(busca.toLowerCase())
        )
        .filter(carro => 
            !reservas.some(reserva => reserva.car.plate === carro.plate)
        );

    const funcBusca = (e) => {
        setBusca(e.target.value);
    };

    return (
        <>
            <section className="marcas">
                <ListaMarcas />
                <CarrosselMarcas />
            </section>

            <div className="container-busca">
                <input
                    className={styleBusca.busca}
                    value={busca}
                    onChange={funcBusca}
                    placeholder="Digite a marca ou modelo do carro"
                />
            </div>

            <div className="container-carro">
                {carrosFiltrados.length ? (
                    carrosFiltrados.map(carro => (
                        <Car
                            key={carro._id}
                            car={carro}
                        />
                    ))
                ) : (
                    <ErroBusca texto={texto} />
                )}
            </div>
        </>
    );
}
