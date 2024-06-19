import { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Logo from "../assets/hoistener-logo.png";
import LogoUm from "../assets/hoistener-logo1.png";
import AppContext from "../context/AppContext";
import style from "../css/Link.module.css";
import "../css/style.css";
import MenuHamburguer from "../components/MenuHamburguer/MenuHamburguer";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () =>{
    setIsHovered(true);
  }

  const handleMouseLeave = () =>{
    setIsHovered(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 10) {
        setIsScrolled(true);
        
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { userLogado } = useContext(AppContext);
  console.log(userLogado);

  const navRef = useRef();

  let getId = sessionStorage.getItem("user");

  if (userLogado) {
    console.log("molina n vem hj");
  } else {
    console.log("ashu");
  }


  return (
    <>
      <a id="Home"></a>
      <header className="nav">
        <nav className={`nav-navbar ${isScrolled ? 'opaque' : ""}`}>
          <ul>
            <NavLink to="/" className={`nav-navbar-img`} data-test-id>
              <img src={LogoUm}></img>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${style.navNavbarLink} ${isActive ? style.linkDestacado : ""} `
              }
              data-test-id
            >
              Home
            </NavLink>
            <NavLink
              to="/garagem"
              className={({ isActive }) =>
                `${style.navNavbarLink} ${isActive ? style.linkDestacado : ""}`
              }
              data-test-id
            >
              Garagem
            </NavLink>
            <a href="#Contato" className={`${style.navNavbarLink}`}  data-test-id>
              Contato
            </a>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${style.navNavbarLink} ${isActive ? style.linkDestacado : ""}`
              }
              data-test-id
            >
              <MdAccountCircle size={30} />
              {userLogado ? <p>{` ${userLogado.name} `}</p> : null}
            </NavLink>

            <MenuHamburguer />

            {/* <NavLink to="/carrinho"  className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                    <FaShoppingCart size={25}/>
                    </NavLink> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
