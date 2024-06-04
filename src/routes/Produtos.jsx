import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/style.css";

export default function Produtos() {
  //criando a variavel id e usando o HOOK useParams
  let { id } = useParams();
  //criando o useState do novoProduto
  const [novoCarro, setNovoCarro] = useState({
    id,
    nome: "",
    preco: "",
    marca: "",
    imagem: "",
  });
  //criando a função handleChange

  const handleChange = (e) => {
    //...(spred) pega os dados antigos e junta com os dados novos
    setNovoCarro({ ...novoCarro, [e.target.name]: e.target.value });
  };
  //criando o metodo put e post

  let metodo = "POST";
  if (id) {
    metodo = "PUT";
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:3000/carros/${id ? id : ""}`,
      {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoCarro),
      }
    ).then(() => {
      window.location = "/lista";
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/carros/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNovoCarro(data);
        });
    }
  }, [id]);

  return (
    <>

    <section className="form-s">

    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nome"
          value={novoCarro.nome}
          placeholder="Digite o nome do Carro"
          onChange={handleChange}
        />
        <input
          type="text"
          name="preco"
          value={novoCarro.preco}
          placeholder="Digite o preço do Carro"
          onChange={handleChange}
        />

        <input
          type="text"
          name="marca"
          value={novoCarro.marca}
          placeholder="Digite a marca do carro"
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagem"
          value={novoCarro.imagem}
          placeholder="Digite a URL da imagem do carro"
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </form>    
    </section>
    </>
  );
}
