import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/hoistener-logo1.png';
import style from '../css/Link.module.css';
import '../css/style.css';

export default function Nav()
{

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
                    </NavLink>
                    <NavLink to="/carrinho"  className={({isActive}) => `${style.navNavbarLink} ${isActive ? style.linkDestacado : ''}`} data-test-id>
                    <FaShoppingCart size={25}/>
                    </NavLink>

                </ul>
            </nav>
        </header>
        </>
    )
    
}

