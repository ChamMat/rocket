import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInterval from 'src/function/useInterval';

import Ship from 'src/components/Ship';
import Sol from 'src/components/Sol';
import Data from 'src/components/Data';

import PanelStyled from './PanelStyled';

const Panel = ({
  space,
  right,
  left,
  pause,
}) => {
  const [posX, setPosX] = useState(445);
  const [posY, setPosY] = useState(48);
  const [vitesseX, setVitesseX] = useState(0);
  const [vitesseY, setVitesseY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [destruction, setDestruction] = useState(false);
  const [angleDanger, setAngleDanger] = useState(false);
  const [vitesseXDanger, setVitesseXDanger] = useState(false);
  const [vitesseYDanger, setVitesseYDanger] = useState(false);
  // const [gravite, setgravite] = useState(1);

  // C'est ici qu'es géré la boucle infinie.
  // eslint-disable-next-line consistent-return
  useInterval(() => {
    if (!destruction) {
      if (pause) {
        // A Suprimer à la fin
        setDestruction(true);
        return (true);
      }

      let newDeg = deg;
      const gravite = 0.02;
      const inertie = 1;
      const puissance = 0.03;

      // ========== Gestion des reacteurs latéraux
      if (left) {
        newDeg -= 1;
        if (newDeg <= 0) {
          newDeg = 360;
        }
      }

      if (right) {
        newDeg += 1;
        if (newDeg > 360) {
          newDeg = 1;
        }
      }

      // ========= Gestion de la gravité==========

      let deplacementY = gravite * -1;
      let deplacementX = 0;

      // ========== Gestion de l'inertie==========

      deplacementX += vitesseX * inertie;
      deplacementY += vitesseY * inertie;


      // ========= Gestion des reacteurs

      if (space) {
        deplacementX += puissance * (Math.sin(newDeg * Math.PI / 180));
        deplacementY += puissance * (Math.cos(newDeg * Math.PI / 180));
      }

      // Atterissage sur le block
      if (posY <= 48 && deplacementY < 0 && posX > 425 && posX < 475) {
        if (angleDanger || vitesseXDanger || vitesseYDanger) {
          setDestruction(true);
          setPosY(48);
        }
        else {
          deplacementY = 0;
          setPosY(48);
          deplacementX = 0;
          newDeg = (0);
        }
      }
      else {
        setPosY(posY + deplacementY);
      }

      // Gestion Collision

      if (posX < 0 || posX > 870) {
        setDestruction(true);
      }
      if (posY < 0 || posY > 570) {
        setDestruction(true);
      }

      // Gestion des couleurs des dangers

      if (newDeg < 10 || newDeg > 350) {
        setAngleDanger(false);
      }
      else {
        setAngleDanger(true);
      }

      if (vitesseY * 100 > 40 || vitesseY * 100 < -40) {
        setVitesseYDanger(true);
      }
      else {
        setVitesseYDanger(false);
      }

      if (vitesseX * 100 > 10 || vitesseX * 100 < -10) {
        setVitesseXDanger(true);
      }
      else {
        setVitesseXDanger(false);
      }

      // console.log('==================');
      // console.log('Deplacement X: ' + puissance * (Math.sin(newDeg * Math.PI / 180)));
      // console.log('Deplacement Y: ' + puissance * (Math.cos(newDeg * Math.PI / 180)));

      setPosX(posX + deplacementX);
      setVitesseX(deplacementX);
      setVitesseY(deplacementY);
      setDeg(newDeg);
    }
  }, 20);

  return (
    <PanelStyled>
      <Data
        vitesseX={vitesseX * 100}
        vitesseY={vitesseY * 100}
        angle={deg}
        space={space}
        angleDanger={angleDanger}
        vitesseXDanger={vitesseXDanger}
        vitesseYDanger={vitesseYDanger}
      />
      <Ship
        posX={posX}
        posY={posY}
        deg={deg}
        space={space}
        destruction={destruction}
      />
      <Sol />
    </PanelStyled>
  );
};

Panel.propTypes = {
  space: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  left: PropTypes.bool.isRequired,
  pause: PropTypes.bool.isRequired,
};

export default Panel;
