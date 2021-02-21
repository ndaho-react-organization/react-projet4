import React from 'react';
import img404 from '../../assets/images/error404.png'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Erreur404 = (props) => {
     return (
          <div className={["alert items-align-center", props.typeErreur].join(" ")}>
               <Row className="justify-content-md-center">
                    <Col xs={12} sm={6} md={6}>
                         <Image src={img404} alt="erreur 404" fluid thumbnail />
                    </Col>
               </Row>
               <div>La page n'existe pas</div>
          </div>
     );

}

export default Erreur404