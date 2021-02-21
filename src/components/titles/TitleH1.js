import React from 'react';

const TitleH1 = (props) => {
     return(
          <h1 className="textborder border-dark bg-primary mt-2 pt-2 pb-2 rounded text-center text-white">
          {props.children}</h1>
     );
}

export default TitleH1