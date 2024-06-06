import { MdAccountCircle } from "react-icons/md";
import {  NavLink } from 'react-router-dom';
import Logo from '../assets/hoistener-logo.png';
import style from '../css/Link.module.css'
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
                    <NavLink to="/" className="nav-navbar-link" data-test-id>
                        Home
                    </NavLink>
                    <NavLink to="/garagem" className="nav-navbar-link" data-test-id>
                        Garagem
                    </NavLink>
                    <a href='#Contato' className='nav-navbar-link' data-test-id>
                        Contato
                    </a>
                    <NavLink to="/login" className="nav-navbar-link" data-test-id>
                        <MdAccountCircle size={25}/>
                        {/* <HiOutlineLogout onClick={handleLogout}/> */}
                    </NavLink>
                </ul>
            </nav>
        </header>
        </>
    )
    
}

