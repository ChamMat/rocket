// Fonction qui calcule la prochaine position en Y
import PropTypes from 'prop-types';

const nextPosY = (vitesseY, posY) => (
  vitesseY + posY
);

nextPosY.propTypes = {
  vitesseY: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
};

export default nextPosY;
