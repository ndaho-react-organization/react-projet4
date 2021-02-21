import React from 'react';

const Footer = (props) => {
     return(
         <footer className="bg-dark text-white text-center">{props.children}</footer>     
     );
}

export default Footer