import React, { useContext, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/hoistener-logo1.svg';
import AppContext from "../../context/AppContext";
import style from "./MenuHamburguer.module.css";

const MenuHamburguer = ({cor}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {userLogado, active, setActive} = useContext(AppContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActive(!active)

    console.log(active)
  };

    let getId = sessionStorage.getItem('user')

  return (
    <div className={`${style.menuContainer} ${active ? style.dark : ''}`}>
      <button className={style.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <>
        <ul className={style.menuList}>
          <Link to="/">
            <img src={Logo} className={style.img} />
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${style.navNavbarLink} ${isActive ? style.linkDestacado : ""}`
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
          <a href="#Contato" className={style.navNavbarLink} data-test-id>
            Contato
          </a>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${style.navNavbarLink} ${isActive ? style.linkDestacado : ""}`
            }
            data-test-id
          >
            <MdAccountCircle size={25} />
            {userLogado ? <p>{` ${userLogado.name}`}</p> : null}
          </NavLink>
        </ul>
        </>
      )}
    </div>
  );
};

export default MenuHamburguer;
