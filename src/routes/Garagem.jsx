import { useEffect, useRef, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import styleBusca from '../components/Busca/Busca.module.css';
import Car from '../components/Car/Car.jsx';
import CarrosselMarcas from '../components/CarrosselMarcas/CarrosselMarcas.jsx';
import ErroBusca from '../components/ErroBusca/ErroBusca.jsx';
import ListaMarcas from '../components/ListaMarcas/ListaMarcas.jsx';
import '../css/style.css';

export default function Garagem() {
    const [carros, setCarros] = useState([]);
    const [reservas, setReservas] = useState([]);
    const [busca, setBusca] = useState('');
    const [ordemPreco, setOrdemPreco] = useState(''); // Novo estado para ordem de preço
    const texto = 'Não há carros com esta marca ou modelo';

    const inputRef = useRef(null);

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
        )
        .sort((a, b) => {
            if (ordemPreco === 'menor') {
                return a.price - b.price;
            } else if (ordemPreco === 'maior') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    const funcBusca = (e) => {
        setBusca(e.target.value);
    };

    const handleInputClick = () => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleOrdemPrecoChange = (e) => {
        setOrdemPreco(e.target.value);
    };

    return (
        <>

            <section className="marcas">
                <ListaMarcas />
            </section>

            <CarrosselMarcas/>

            <div className="container-busca">
                <input
                    ref={inputRef} // Adicionando a referência ao input
                    className={styleBusca.busca}
                    value={busca}
                    onChange={funcBusca}
                    onClick={handleInputClick} // Adicionando o evento de clique
                    placeholder="Digite a marca ou modelo do carro"
                />
            </div>

            <div className="container-filtro-preco">
                <span><FaFilter /> Ordenar por</span>
                <div className="container-filtro-preco-btns">
                <label className="radio-container">
                    <input
                        type="radio"
                        value=""
                        checked={ordemPreco === ''}
                        onChange={handleOrdemPrecoChange}
                    />
                    <span className="radio-checkmark"></span>
                    Padrão
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="menor"
                        checked={ordemPreco === 'menor'}
                        onChange={handleOrdemPrecoChange}
                    />
                    <span className="radio-checkmark"></span>
                    Menor Preço
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="maior"
                        checked={ordemPreco === 'maior'}
                        onChange={handleOrdemPrecoChange}
                    />
                    <span className="radio-checkmark"></span>
                    Maior Preço
                </label>
                </div>
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
