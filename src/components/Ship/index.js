import React from 'react';
import PropTypes from 'prop-types';

import ShipStyled from './ShipStyled';

const Ship = ({ posX, posY }) => {


  return (
    <ShipStyled
      posX={posX}
      posY={posY}
    />
  );
};

Ship.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
};

export default Ship;
