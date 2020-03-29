import React from 'react';
import PropTypes from 'prop-types';

import ShipStyled from './ShipStyled';

const Ship = ({
  posX,
  posY,
  deg,
  space,
  fuel,
  destruction,
}) => {
  const spacePress = () => (
    space && fuel > 0 && !destruction ? 'flamme' : 'flamme hide'
  );
  const shipDestroy = () => (
    destruction ? 'destruction' : 'ailes'
  );
  return (
    <ShipStyled
      posX={posX}
      posY={posY}
      deg={deg}
      space={space}
    >
      <div className={shipDestroy()} />
      <div className={spacePress()} />
    </ShipStyled>
  );
};


Ship.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
  space: PropTypes.bool.isRequired,
  destruction: PropTypes.bool.isRequired,
  fuel: PropTypes.number.isRequired,
};

export default Ship;
