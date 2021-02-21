import React from 'react';
import Image from 'react-bootstrap/Image';
import TitleH1 from "../../../components/titles/TitleH1"
import imgIlleVillaine from "../../../assets/images/chateau.jpg";

const Accueil = (props) => {
   return (
      <>
         <TitleH1>Bienvenu sur le site de Ille et vilaine</TitleH1>
         <div>Le site vous aidant à trouver les établissements public de l'ille se vilaine</div>
         <Image src={imgIlleVillaine} alt="ille et ville" fluid thumbnail style={{ width: "100%" }} />
      </>
   );

}

export default Accueil