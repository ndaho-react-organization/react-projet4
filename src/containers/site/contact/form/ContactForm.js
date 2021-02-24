import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { withFormik } from 'formik';
import * as Yup from "yup";

class ContactForm extends Component {
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="nom">
                        <Form.Label>Nom<Badge variant="warning">(min 5 caracteres)</Badge></Form.Label>
                        <Form.Control size="lg" type="text"
                            placeholder=" Votre nom"
                            name="nom"
                            value={this.props.values.nom}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nom && this.props.errors.nom &&
                            <span style={{ color: "red" }}>{this.props.errors.nom}</span>
                        }
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            placeholder="Votre mail"
                            name="email"
                            value={this.props.values.email}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.email && this.props.errors.email &&
                            <span style={{ color: "red" }}>{this.props.errors.email}</span>
                        }
                    </Form.Group>

                    <Form.Group controlId="messageTextarea1">
                        <Form.Label>Message<Badge variant="warning">(entre 100 et 200 caracteres)</Badge></Form.Label>
                        <Form.Control as="textarea" rows={3}
                            name="message"
                            value={this.props.values.message}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.message && this.props.errors.message &&
                            <span style={{ color: "red" }}>{this.props.errors.message}</span>
                        }
                    </Form.Group>

                    <Button variant="warning" onClick={this.props.handleReset}>Reset</Button>
                    <Button variant="primary" onClick={this.props.handleSubmit} >Valider</Button>
                </Form>
            </>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, "Le nom doit avoir au plus 5 caracteres")
            .required("Le champ nom est obligatoire"),

        email: Yup.string()
            .email("Le mail n'est pas valide")
            .required("Le champ email est obligatoire"),

        message: Yup.string()
            .min(100, "Le message doit avoir au moins 100 caracteres")
            .max(300, "Le message doit avoir au plus 300 caracteres")
            .required("Le champ message est obligatoire"),
    }),

    handleSubmit: (values, { props }) => {
        alert("mail envoyé");
    }
})(ContactForm)