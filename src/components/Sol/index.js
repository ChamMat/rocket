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
}) => {
  const valide = validate.includes(id);
  return (
    <SolStyled
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
};

export default Sol;
