import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MenuVictoireStyled from './MenuVictoireStyled';

const MenuVictoire = ({
  rejouer,
  level,
  restart,
  fuel,
  destruction,
  nbrLevel,
}) => {
  const numeroLevel = parseInt(level.split('level')[1], 0) + 1;

  return (
    <MenuVictoireStyled>
      {!destruction
      && (
      <div>
        <h2>Gagné!</h2>
        <p>Il vous reste {fuel} fuels</p>
        <button type="button" onClick={rejouer}>Rejouer</button>
        {(nbrLevel > numeroLevel)
        && (
          <Link onClick={restart} to={`/game/level${numeroLevel}`}><button type="button">Next</button></Link>
        )}
        {(nbrLevel <= numeroLevel)
        && (
          <Link to="/end"><button type="button">Continue</button></Link>
        )}
      </div>
      )}

      {destruction
      && (
      <div>
        <h2>Perdu!</h2>
        <input type="button" onClick={rejouer} value="Rejouer" />
      </div>
      )}
    </MenuVictoireStyled>
  );
};

MenuVictoire.propTypes = {
  rejouer: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  restart: PropTypes.func.isRequired,
  fuel: PropTypes.number.isRequired,
  destruction: PropTypes.bool.isRequired,
  nbrLevel: PropTypes.number.isRequired,
};

export default MenuVictoire;
