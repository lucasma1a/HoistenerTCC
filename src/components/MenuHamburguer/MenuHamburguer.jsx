import React, { useState } from "react";
import style from "./MenuHamburguer.module.css";
import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const MenuHamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {userLogado} = useContext(AppContext)
    console.log(userLogado)

    let getId = sessionStorage.getItem('user')

    if(userLogado){
        console.log('molina n vem hj')
    } else {
        console.log('ashu')
    }

  return (
    <div className={style.menuContainer}>
      <button className={style.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <ul className={style.menuList}>
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
      )}
    </div>
  );
};

export default MenuHamburguer;
