import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleH1 from "../../../components/titles/TitleH1"
import imgIlleVillaine from "../../../assets/images/chateau.jpg";

const Accueil = (props) => {
   return (
      <>
         <TitleH1>Bienvenu sur le site de Ille et vilaine</TitleH1>
         <div className="text-center">Le site vous aidant à trouver les établissements public de l'ille se vilaine</div>

         <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={6}>
               <Image src={imgIlleVillaine} alt="ille et ville" fluid thumbnail  />
            </Col>
         </Row>
         
         <div className="miniSiteMarge"></div>
      </>
   );

}

export default Accueil