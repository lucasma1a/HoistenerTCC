import { useEffect, useState } from "react";
import Car from '../components/Car/Car.jsx';
import ErroBusca from "../components/ErroBusca/ErroBusca.jsx";
import ListaMarcas from "../components/ListaMarcas/ListaMarcas.jsx";

export default function Bmw() {
  const [carros, setCarros] = useState([]);

  const marca = "BMW";
  const carrosFiltrados = carros.filter((carro) => carro.mark === marca);

  useEffect(() => {
    fetch("http://localhost:4000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCarros(data);
      });
  }, []);

  console.log(carrosFiltrados);

  return (
    <>
      <section className="marcas">
        <ListaMarcas />
      </section>

      <div className="container-carro">
                {carrosFiltrados.length ? (
                    carrosFiltrados.map(carro => (
                        <Car
                            key={carro._id}
                            car={carro}
                        />
                    ))
                ) : (
                    <ErroBusca texto={''} />
                )}
            </div>
    </>
  );
}
