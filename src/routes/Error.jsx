import { Link } from 'react-router-dom'
import ErroBusca from '../components/ErroBusca/ErroBusca.jsx'
import '../css/style.css'

export default function Error() {

    return(
        <>
        <div className="erro">
        <ErroBusca texto={'Página não encontrada'}/>
        <Link to='/' className='erro-home'>
            Voltar para home        
        </Link>
        </div>
        </>
    )
}