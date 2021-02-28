import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Horaires from '../searchResults/Horaires/Horaires'

const SearchResults = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>{props.nom}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Telephone:  {props.telephone} <br />
                        {props.email && `Email: ${props.email}`} <br />
                    </Card.Title>
                    <Card.Text>
                        <strong>Adresses:</strong> <br />
                        {props.adresses[0].lignes[0]} {props.adresses[0].codePostal[0]} - {props.adresses[0].commune}  <br />
                        {
                            props.horaires && <Horaires></Horaires>
                        }
                    </Card.Text>
                    {
                        props.url && <Button variant="primary" >Visitez le site web</Button>
                    }

                </Card.Body>
            </Card>
        </div>
    );

}

export default SearchResults