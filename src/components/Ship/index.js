import React from 'react';
import PropTypes from 'prop-types';

import ShipStyled from './ShipStyled';

const Ship = ({ posX, posY, deg }) => {
  return (
    <ShipStyled
      posX={posX}
      posY={posY}
      deg={deg}
    />
  );
};

Ship.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
};

export default Ship;
