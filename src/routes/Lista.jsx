import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importação dos ícones
import { Link, useNavigate } from 'react-router-dom'; // Importação do Link
import '../css/style.css';

function Lista() {
  const [carros, setCarros] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    alert('Saindo da sessão...');
    navigate('/');
  };

  useEffect(() => {
    fetch("http://localhost:3000/carros")
      .then((res) => res.json())
      .then((data) => {
        setCarros(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/carros/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setCarros(carros.filter(carro => carro.id !== id)); // Atualiza a lista localmente
      alert('carro deletado!')
    });
  };

  return (
    <>
      

    <section className="lista-carros">

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carros.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.marca}</td>
              <td>
                <Link to={`/editarcarro/${item.id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="lista-carros-btn">
    <button onClick={handleLogout} className='logout'>Logout</button>
      <Link to={'/produtos'} className='cadastrar'>
        cadastrar
      </Link>
    </div>
    </section>
    </>
  );
}

export default Lista;
