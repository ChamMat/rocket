import React from 'react';
import PropTypes from 'prop-types';

import DataStyled from './DataStyled';

const Data = ({
  posX,
  posY,
  angle,
}) => {
  function roundDecimal(nombre, precision) {
    const precisionNew = precision || 1;
    const tmp = 10 ** precisionNew;
    return Math.round(nombre * tmp) / tmp;
  }

  return (
    <DataStyled>
      <li>{`Position X: ${roundDecimal(posX)}`}</li>
      <li>{`Position Y: ${roundDecimal(posY)}`}</li>
      <li>{`Angle: ${roundDecimal(angle)} `}</li>
    </DataStyled>
  );
};

Data.propTypes = {
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  space: PropTypes.bool.isRequired,
};

export default Data;
