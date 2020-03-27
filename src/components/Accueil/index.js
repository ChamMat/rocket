import React from 'react';
import { Link } from 'react-router-dom';

import AccueilStyled from './AccueilStyled';

const Accueil = () => {

  return (
    <AccueilStyled>
      <h1 className="titre">Rocket</h1>
      <h2 className="credit">Mathieu Chamoulaud</h2>

      <button type="button" className="startButton"><Link className="link" to='/game'>Start!</Link></button>
    </AccueilStyled>
  );
};


export default Accueil;
