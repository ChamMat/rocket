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

  return (
    <DataStyled>
      <li className="atterissage">Atterissage:</li>
      <li className={vitesseXDangeureuse()}>{`Vitesse X: ${roundDecimal(vitesseX)} km/h`}</li>
      <li className={vitesseYDangeureuse()}>{`Vitesse Y: ${roundDecimal(vitesseY)} km/h`}</li>
      <li className={angleDangereux()}>{`Angle: ${roundDecimal(angle)} degre `}</li>
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
};

export default Data;
