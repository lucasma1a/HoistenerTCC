import { useEffect, useState } from "react";
import Car from "./Car";

const Teste = () => {
    const [carros, setCarros] = useState([]);
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

    return (
        <>
            <input
                type="text"
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Digite a marca do carro"
            />
            {carros.length ? (
                carros.map((carro, index) => (
                    <Car
                        key={index}
                        nome={carro.nome}
                        preco={carro.preco}
                        imagem={carro.imagem}
                    />
                ))
            ) : (
                <h1>Não há carros com essa marca</h1>
            )}
        </>
    );
};

export default Teste;
