import React, { Component } from 'react';
import Accueil from './accueil/Accueil';
import Localisation from './localisation/Localisation';
import Contact from './contact/Contact';

class Site extends Component {
    render() {
        return (
            <>
                <Accueil>Accueil</Accueil>
                <Contact>Contact</Contact>
                <Localisation>Localisation</Localisation>
            </>
        );
    }
}
export default Site