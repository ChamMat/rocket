import React from 'react';
import { Link } from 'react-router-dom';

import AccueilStyled from './AccueilStyled';

const Accueil = () => (
  <AccueilStyled>
    <h1 className="titre">Rocket</h1>
    <h2 className="credit">Mathieu Chamoulaud</h2>

    <Link className="link" to="/game/level1"><button type="button" className="startButton">Start!</button></Link>
  </AccueilStyled>
);

export default Accueil;
