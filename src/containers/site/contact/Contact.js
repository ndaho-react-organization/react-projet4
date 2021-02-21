import React, { Component } from 'react';
import TitleH1 from '../../../components/titles/TitleH1';
import { Route,Switch } from 'react-router-dom';
import ContactForm from './form/ContactForm';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'

class Contact extends Component {

     render() {
          console.log(this.props.match.url + "/form");
          return (
               <>
                    <TitleH1>Contactez-nous!</TitleH1>
                    <h3>Adresse</h3>
                    <div>xxxxxxxxx</div>
                    <h3>Téléphone</h3>
                    <div>00000000000</div>
                    <div className="row no-gutters">
                         <div className="mr-1">Vous  préfèrez nous écrire?</div>
                         <LinkContainer exact to={this.props.match.url + "/form"}>
                              <Button variant="primary" size="lg">Formulaire de contact</Button>
                         </LinkContainer>
                    </div>
                    <Switch>
                         <Route  exact path={this.props.match.path + "/form"}  render={(props)=><ContactForm/>} />
                    </Switch>
                    <div className="miniSiteMarge"></div>
               </>
          );
     }
}

export default Contact