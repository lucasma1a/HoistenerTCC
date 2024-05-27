import {useRef} from 'react'
import Lista from './Lista';
import '../css/style.css'

export default function Login() {
    /*Hook- UseRef- ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente */
  const usuario = useRef();
  const senha = useRef();
 //Pegando os dados do usuario e senha e gravando na sessao
 const getUsuario = sessionStorage.getItem("usuario");
 const getSenha =sessionStorage.getItem("senha");

  //criando a função handleSubmit
  const handleSubmit =()=>{
    if(usuario.current.value =="Lucas" && senha.current.value=="123456"){

      let token =
        Math.random().toString(16).substring(2)+
        Math.random().toString(16).substring(2);

      sessionStorage.setItem("usuario","Lucas");
      sessionStorage.setItem("senha",token); 

    }else{
      alert("usuario e senha invalidos")
    }
  }

  return(
    <section className='login'>
      {/*condição ternaria */}
      {getUsuario && getSenha ?(
        <Lista/>
      ):(  
    <form onSubmit={handleSubmit}>
      <p>
        Usuario:
        <input type="text" id="user" placeholder="Digite seu usuário" ref={usuario}/>
      </p>
      <p>
        Senha:
        <input type="password" id="senha" placeholder='Digite sua senha' ref={senha}/>
      </p>
      <button type="submit" id="btnlogin"><a href='/'>Login</a></button>
    </form>
      /*final da condição ternaria */
    )}
    </section>
  )
}