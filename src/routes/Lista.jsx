import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function Lista(){
  //HOOK- useState manipula a variavel adcionando ou alterando em tempo real
  const [produtos,setProdutos]=useState([]);
   
   //useNavigate tem a função de fazer redirecionamento de componentes
   const navigate = useNavigate();
   //criando a função handleLogout
   const handleLogout = () => {
     sessionStorage.removeItem('usuario');
     sessionStorage.removeItem('senha');
     alert('saindo da sessão...');
     navigate('/');
   };
/* HOOK- useEffect = é um efeito colateral par trazer
informações da api como promise*/
   useEffect(()=>{
    fetch("http://localhost:5000/produtos")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setProdutos(data);
    })
   },[]);
   //criando a função deletar 
   const handleDelete =((id)=>{
    fetch(`http://localhost:5000/produtos/${id}`,{
      method:'delete',
    }).then(()=>{
      navigate("/lista")
    })
   })

  return(
    <>
 <button onClick={handleLogout}>Logout</button>
    <p>AINDA EM DESENVOLVIMENTO</p>
  
    </>
  )
}
export default Lista