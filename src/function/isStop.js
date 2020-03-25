// Fonction qui regarde si le vaisseau est au sol ou non
import PropTypes from 'prop-types';

const isStop = (shipY, solY) => {
  if (shipY >= solY) {
    return true;
  }

  return false;
};

isStop.propTypes = {
  shipY: PropTypes.number.isRequired,
  solY: PropTypes.number.isRequired,
};

export default isStop;
