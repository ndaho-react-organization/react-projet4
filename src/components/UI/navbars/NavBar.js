import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Ille et vilaine</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link>Accueil</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/localisation">
                            <Nav.Link>Localisation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar