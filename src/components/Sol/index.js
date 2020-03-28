import React from 'react';
import PropTypes from 'prop-types';

import SolStyled from './SolStyled';

const Sol = ({
  validate,
  id,
  bottom,
  left,
  height,
  width,
  required,
}) => {
  // Si le block n'est pas requie, il ne peut pas être validé.
  // Si le block est validée, il changera de couleur.
  const valide = required ? validate.includes(id) : false;
  // si le block n'est pas requi, la couleur par default est rouge sinon gray
  const colorUnRequire = required ? 'gray' : '#9c1414';
  return (
    <SolStyled
      required={colorUnRequire}
      valide={valide}
      bottom={bottom}
      left={left}
      height={height}
      width={width}
    />
  );
};

Sol.propTypes = {
  validate: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  bottom: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};

export default Sol;
