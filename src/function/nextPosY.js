// Fonction qui calcule la prochaine position en Y
import PropTypes from 'prop-types';

const nextPosY = (vitesse, posY, gravite, stop) => {

  if (stop) {
    return posY - vitesse;
  }

  return posY - vitesse + gravite;

};

nextPosY.propTypes = {
  vitesseY: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  gravite: PropTypes.number.isRequired,
  stop: PropTypes.bool.isRequired,
};

export default nextPosY;
