import { Link } from "react-router-dom"
import './Header.css'

function Header() {
    return(
        <header className="header">
            <nav className="navbar" id="navbar">
                <ul className="d-flex align-items-center gap-4">
                <span className="text-white-50">ArielFlix</span>
                    <li className="p-1">
                        <Link className="text-decoration-none text-white" to="/">Home</Link>
                    </li>
                    <li className="p-1">
                        <Link className="text-decoration-none text-white" to="/list">Listado</Link>
                    </li>
                    <li className="p-1">
                        <Link className="text-decoration-none text-white" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>    
    )
}

export default Header