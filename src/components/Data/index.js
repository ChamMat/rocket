import React from 'react';
import PropTypes from 'prop-types';

import DataStyled from './DataStyled';

const Data = ({
  vitesseX,
  vitesseY,
  angle,
  angleDanger,
  vitesseXDanger,
  vitesseYDanger,
  fuel,
}) => {
  function roundDecimal(nombre, precision) {
    const precisionNew = precision || 0;
    const tmp = 10 ** precisionNew;
    return Math.round(nombre * tmp) / tmp;
  }

  const angleDangereux = () => (
    angleDanger ? 'danger' : ''
  );

  const vitesseXDangeureuse = () => (
    vitesseXDanger ? 'danger' : ''
  );


  const vitesseYDangeureuse = () => (
    vitesseYDanger ? 'danger' : ''
  );

  const fuelDanger = () => (
    fuel < 200 ? 'danger' : ''
  );

  return (
    <DataStyled>
      <div className={`divElt ${vitesseXDangeureuse()} speed`}>SpeedX: <span className="valDynamique">{roundDecimal(vitesseX)} km/h</span></div>
      <div className={`divElt ${vitesseYDangeureuse()} speed`}>SpeedY: <span className="valDynamique">{roundDecimal(vitesseY)} km/h</span></div>
      <div className={`divElt ${angleDangereux()}`}>Angle: <span className="valDynamique">{roundDecimal(angle)} degree</span></div>
      <div className={`divElt ${fuelDanger()}`}>Fuel: <span className="valDynamique">{fuel}L</span></div>
    </DataStyled>
  );
};

Data.propTypes = {
  vitesseX: PropTypes.number.isRequired,
  vitesseY: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  angleDanger: PropTypes.bool.isRequired,
  vitesseXDanger: PropTypes.bool.isRequired,
  vitesseYDanger: PropTypes.bool.isRequired,
  fuel: PropTypes.number.isRequired,
};

export default Data;
