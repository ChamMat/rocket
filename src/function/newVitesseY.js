// Fonction qui calcule la prochaine vitesse en Y
import PropTypes from 'prop-types';

const newVitesseY = (vitesseY, space) => {

  if (space) {
    return (vitesseY - 0.01);
  }

  return (vitesseY + 0.03);
};

newVitesseY.propTypes = {
  space: PropTypes.bool.isRequired,
  vitesseY: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
};

export default newVitesseY;
