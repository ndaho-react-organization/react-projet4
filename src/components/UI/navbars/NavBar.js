import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/localisation" exact className="nav-link">Localisation</NavLink>
                        </li>

                        <li className="nav-item active">
                            <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default NavBar