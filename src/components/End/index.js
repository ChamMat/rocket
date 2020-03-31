import React from 'react';
import { Link } from 'react-router-dom';

import EndStyled from './EndStyled';

const End = () => (
  <EndStyled>
    <h1 className="titre">Rocket</h1>
    <h2 className="credit">Mathieu Chamoulaud</h2>
    <p>Congrate! You are a winner!</p>
    <Link className="link" to="/game/level1"><button type="button" className="startButton">Again!!!</button></Link>
  </EndStyled>
);

export default End;
