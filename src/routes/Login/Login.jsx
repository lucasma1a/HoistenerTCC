import { Link } from "react-router-dom";
import Logo from "../../assets/hoistener-logo1.png";
import "../../css/style.css";
import style from "./Login.module.css";

export default function Login() {
  return (
    <section className="login">
      <div className={style.loginForm}>
        <div className={style.loginFormImg}>
          <img src={Logo} alt="imagem" />
        </div>
        <form className={style.loginFormForm}>
          <h1>Login ou Cadastro</h1>
          <p>
            Usuario:
            <input
              type="text"
              id="user"
              placeholder="Digite seu usuário"
              required
              className={style.input}
            />
          </p>
          <p>
            Senha:
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              required
              className={style.input}
            />
          </p>

          <div className={style.btns}>
            <button type="submit">Login</button>
          </div>
          <div className={style.cadastro}>
            <p style={{ fontSize: 14 }}>Não possui uma conta?</p>
            <Link to="/cadastro" className={style.linkCadastro}>
              <button>Cadastrar</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
