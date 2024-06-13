import { useContext, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/hoistener-logo1.png';
import AppContext from "../context/AppContext";
import style from '../css/Link.module.css';
import '../css/style.css';

export default function Nav()
{
    const {userLogado} = useContext(AppContext)
    console.log(userLogado)

    const navRef = useRef();

    let getId = sessionStorage.getItem('user')

    if(userLogado){
        console.log('molina n vem hj')
    } else {
        console.log('ashu')
    }

    const mostrarNavBar = () => {
        navRef.current.classlist.toggle("responsive_nav")
    }

    return (
        <>
        <a id="Home"></a>
        <header className="nav">
            <nav className='nav-navbar'>
                <ul>
                    <NavLink to="/" className={`nav-navbar-img`} data-test-id>
                        <img src={Logo}></img>        
                    </NavLink>
                    <NavLink to="/" className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                        Home
                    </NavLink>
                    <NavLink to="/garagem" className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                        Garagem
                    </NavLink>
                    <a href='#Contato' className={style.navNavbarLink} data-test-id>
                        Contato
                    </a>
                    <NavLink to="/login"  className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                        <MdAccountCircle size={25}/>
                        {userLogado ? (<p>{` ${userLogado.name}`}</p>): null}
                    </NavLink>

                    <button className="nav-bar-btn-fechar" onClick={mostrarNavBar}>
                        <FaTimes/>
                    </button>

                    {/* <NavLink to="/carrinho"  className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                    <FaShoppingCart size={25}/>
                    </NavLink> */}

                </ul>
            </nav>
            <button className="nav-bar-btn" onClick={mostrarNavBar}>
                <FaBars/>
            </button>
        </header>
        </>
    )
    
}

