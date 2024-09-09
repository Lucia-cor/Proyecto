import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/atracciones">Atracciones</Link></li>
                </ul>
            </div>

        </nav>
        
    )
}

export default Nav; 