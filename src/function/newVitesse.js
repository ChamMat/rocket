// Fonction qui calcule la prochaine vitesse en Y
import PropTypes from 'prop-types';

const newVitesse = (vitesse, space) => {
  if (space) {
    return (vitesse + 0.01);
  }
  let nVitesse = vitesse - 0.03;
  if (nVitesse <= 0) {
    nVitesse = 0;
  }
  return nVitesse;
};

newVitesse.propTypes = {
  space: PropTypes.bool.isRequired,
  vitesseY: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
};

export default newVitesse;
