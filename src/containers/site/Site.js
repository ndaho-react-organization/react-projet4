import React, { Component } from 'react';
import Accueil from './accueil/Accueil';
import Localisation from './localisation/Localisation';
import Contact from './contact/Contact';
import NavBar from '../../components/UI/navbars/NavBar';
import { Route, Switch } from 'react-router-dom';
import Erreur from "../../components/erreurs/Erreur";
import Erreur404 from "../../components/erreurs/Erreur404";
import Container from 'react-bootstrap/Container'
import Footer from "../../components/footers/Footer";

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <NavBar></NavBar>
                    <Container fluid>
                        <Switch>
                            <Route path="/" exact render={() => <Accueil>Accueil</Accueil>} />
                            <Route path="/localisation" exact render={() => <Localisation>Localisation</Localisation>} />
                            <Route path="/contact" exact component={Contact} />
                            <Route exact render={() => <Erreur><Erreur404 typeErreur="alert-danger" /></Erreur>} />
                        </Switch>
                    </Container>
                </div>
                <Footer>@Droit reservé à Honoré</Footer>
            </>
        );
    }
}
export default Site