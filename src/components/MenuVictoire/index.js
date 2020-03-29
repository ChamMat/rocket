import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MenuVictoireStyled from './MenuVictoireStyled';

const MenuVictoire = ({
  rejouer,
  level,
  restart,
  fuel,
}) => {
  const numeroLevel = parseInt(level.split('level')[1], 0) + 1;


  return (
    <MenuVictoireStyled>
      <h2>Gagné!</h2>
      <p>Il vous reste {fuel} fuels</p>
      <button type="button" onClick={rejouer}>Rejouer</button>
      <Link onClick={restart} to={`/game/level${numeroLevel}`}><button type="button">Next</button></Link>

    </MenuVictoireStyled>
  );
};

MenuVictoire.propTypes = {
  rejouer: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  restart: PropTypes.func.isRequired,
  fuel: PropTypes.number.isRequired,
};

export default MenuVictoire;
