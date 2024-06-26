import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Car from "../components/Car/Car.jsx";
import CarrosselMarcas from "../components/CarrosselMarcas/CarrosselMarcas.jsx";
import ErroBusca from "../components/ErroBusca/ErroBusca.jsx";
import ListaMarcas from "../components/ListaMarcas/ListaMarcas.jsx";

export default function Meca() {
  const [carros, setCarros] = useState([]);
  const [ordemPreco, setOrdemPreco] = useState("");

  const marca = "Hyundai";

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCarros(data);
      });
  }, []);

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reservas")
      .then((response) => response.json())
      .then((dados) => setReservas(dados))
      .catch((e) => alert("erro: ", e));
  }, []);

  const carrosFiltrados = carros
    .filter((carro) => carro.mark === marca)
    .filter(
      (carro) => !reservas.some((reserva) => reserva.car.plate === carro.plate)
    )
    .sort((a, b) => {
      if (ordemPreco === "menor") {
        return a.price - b.price;
      } else if (ordemPreco === "maior") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  const handleOrdemPrecoChange = (e) => {
    setOrdemPreco(e.target.value);
  };
  return (
    <>
      <section className="marcas">
        <ListaMarcas />
      </section>

      <CarrosselMarcas />

      <div className="container-filtro-preco">
        <span>
          <FaFilter /> Ordenar por
        </span>
        <div className="container-filtro-preco-btns">
          <label className="radio-container">
            <input
              type="radio"
              value=""
              checked={ordemPreco === ""}
              onChange={handleOrdemPrecoChange}
            />
            <span className="radio-checkmark"></span>
            Padrão
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="menor"
              checked={ordemPreco === "menor"}
              onChange={handleOrdemPrecoChange}
            />
            <span className="radio-checkmark"></span>
            Menor Preço
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="maior"
              checked={ordemPreco === "maior"}
              onChange={handleOrdemPrecoChange}
            />
            <span className="radio-checkmark"></span>
            Maior Preço
          </label>
        </div>
      </div>

      <div className="container-carro">
        {carrosFiltrados.length ? (
          carrosFiltrados.map((carro) => <Car key={carro._id} car={carro} />)
        ) : (
          <ErroBusca texto={""} />
        )}
      </div>
    </>
  );
}
