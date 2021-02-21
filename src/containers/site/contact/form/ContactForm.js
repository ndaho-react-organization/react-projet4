import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class ContactForm extends Component {
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="nom">
                        <Form.Label>Nom<Badge variant="warning">(min 5 caracteres)</Badge></Form.Label>
                        <Form.Control size="lg" type="text" placeholder=" Votre nom" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Votre mail" />
                    </Form.Group>

                    <Form.Group controlId="messageTextarea1">
                        <Form.Label>Message<Badge variant="warning">(entre 100 et 200 caracteres)</Badge></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Valider</Button>
                </Form>
                
            </>
        );
    }
}
export default ContactForm