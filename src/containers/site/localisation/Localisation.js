import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import TitleH2 from '../../../components/titles/TitleH2'
import SearchResults from './searchResults/SearchResults'



class Localisation extends Component {
   state = {
      recherche: null
   }

   handleRechercheEtablissement = (searchType) => {

      axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/35/${searchType}`)
         .then(response => {
            this.setState({
               recherche: response.data.features
            })
         })
         .catch(error => {
            console.log(error);
         })
   }

   render() {
      return (
         <>
            <TitleH2>Recherche Etablissements</TitleH2>
            <Button variant="secondary" onClick={() => this.handleRechercheEtablissement("mairie")} >Mairie</Button>
            <Button variant="secondary" onClick={() => this.handleRechercheEtablissement("commissariat_police")} >Commisariat de police</Button>
            <Button variant="secondary" onClick={() => this.handleRechercheEtablissement("pole_emploi")} >Pole emploi</Button>
            <Button variant="secondary" onClick={() => this.handleRechercheEtablissement("prefecture")} >Préfecture</Button>
            <Row>
               {
                  this.state.recherche && this.state.recherche.map(result => {
                     return (
                        <Col md={6} key={result.properties.id}>
                           <SearchResults key={result.properties.id}
                              adresses={result.properties.adresses}
                              horaires={result.properties.horaires}
                              id={result.properties.id}
                              nom={result.properties.nom}
                              telephone={result.properties.telephone}
                              email={result.properties.email}
                              url={result.properties.url}
                           />
                        </Col>
                     )
                  })
               }
            </Row>
         </>

      )
   }
}

export default Localisation