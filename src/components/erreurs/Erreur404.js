import React from 'react';
import img404 from '../../assets/images/error404.png'

const Erreur404 = (props) => {
     return(
          <div className={["alert" , props.typeErreur].join(" ")}>
              <img src={img404} alt="erreur 404" width="200"/>
              <div>La page n'existe pas</div>
          </div>
     );

}

export default Erreur404