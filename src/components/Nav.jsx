import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from '../assets/hoistener-logo.png';
import '../css/style.css';

export default function Nav()
{

    return (
        <>
        <a id="Home"></a>
        <header className="nav">
            <nav className='nav-navbar'>
                <ul>
                    <Link to="/" className="nav-navbar-img" data-test-id>
                        <img src={Logo}></img>        
                    </Link>
                    <Link to="/" className="nav-navbar-link" data-test-id>
                        Home
                    </Link>
                    <Link to="/garagem" className="nav-navbar-link" data-test-id>
                        Garagem
                    </Link>
                    <a href='#Contato' className='nav-navbar-link' data-test-id>
                        Contato
                    </a>
                    <Link to="/login" className="nav-navbar-link" data-test-id>
                        <MdAccountCircle size={25}/>
                        {/* <HiOutlineLogout onClick={handleLogout}/> */}
                    </Link>
                    
                </ul>
            </nav>
        </header>
        </>
    )
    
}

