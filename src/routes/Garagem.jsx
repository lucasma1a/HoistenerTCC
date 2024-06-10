
import { useEffect, useState } from 'react';
import styleBusca from '../components/Busca/Busca.module.css';
import Car from '../components/Car/Car.jsx';
import ErroBusca from '../components/ErroBusca/ErroBusca.jsx';
import ListaMarcas from '../components/ListaMarcas/ListaMarcas.jsx';
import '../css/style.css';
import Marcas from '../components/Marcas/Marcas.jsx';

export default function Garagem() {

    const [carros, setCarros] = useState([])
    const [busca, setBusca] = useState('');
    const texto = 'Não há carros com esta marca ou modelo'
    // const testeCarro = [
    //     {
    //         id: 1,
    //         image: 'https://github.com/welltecnc.png',
    //         price: 20,
    //         mark: 'bmw',
    //         model: 'i8',
    //         color: 'black'
    //     },
    //     {
    //         id: 2,
    //         image: 'https://github.com/welltecnc.png',
    //         price: 40,
    //         mark: 'aston',
    //         model: 'enildo',
    //         color: 'black'
    //     },
    // ]


    useEffect(() => {
      try {
         fetch("http://localhost:4000/cars")
          .then((response) => response.json())
          .then((dados) => setCarros(dados));
      } catch {
        console.log('erro ao se conectar com a API')
      }
    }, []);

    const carrosFiltrados = carros.filter(carro =>
        carro.mark.toLowerCase().includes(busca.toLowerCase()) || 
        carro.model.toLowerCase().includes(busca.toLowerCase())
    );

    const funcBusca = (e) => {
        setBusca(e.target.value)
    }


    console.log(carros)
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
                placeholder="Digite a marca ou modelo do carro"
            />
            </div>
            

            <div className="container-carro">
                {/* {testeCarro.map(carro => {
                    return <Car key={carro.id} car={carro}/>
                })}                   */}
            {carrosFiltrados.length ? (
                carrosFiltrados.map(carro => (
                    <Car
                        key={carro._id}
                        car={carro}
                    />
                ))
            ) : (
                <ErroBusca texto={texto}/>
            )}

            </div>
        </>
    )
}