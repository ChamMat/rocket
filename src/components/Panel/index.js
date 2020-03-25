import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInterval from 'src/function/useInterval';
import isStop from 'src/function/isStop';
import nextPosY from 'src/function/nextPosY';
import newVitesseY from 'src/function/newVitesseY';

import Ship from 'src/components/Ship';
import Sol from 'src/components/Sol';

import PanelStyled from './PanelStyled';

const Panel = ({ space, right, left}) => {
  const [posX, setPosX] = useState(445);
  const [posY, setPosY] = useState(300);
  const [vitesseY, setVitesseY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [stop, setStop] = useState(false);

  useInterval(() => {
    let nPosY = posY;
    let nVitesseY = vitesseY;
    setStop(isStop(posY, 530));
    if (stop) {
      nPosY = 530;
      nVitesseY = 0;
      if (space) {
        nVitesseY = newVitesseY(nVitesseY, space);
      }
    }
    if (!stop) {
      // Si le vaisseau n'est pas posé:
      // Calcule de la nouvelle vitesse:
      nVitesseY = newVitesseY(nVitesseY, space);
    }
    if (right) {
      setDeg(deg + 1);
    }
    if (left) {
      setDeg(deg - 1);
    }

    setVitesseY(nVitesseY);
    setPosY(nextPosY(nVitesseY, nPosY));
  }, 20);

  return (
    <PanelStyled>
      <Ship
        posX={posX}
        posY={posY}
        deg={deg}
      />
      <Sol />
    </PanelStyled>
  );
};

Panel.propTypes = {
  space: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  left: PropTypes.bool.isRequired,
};

export default Panel;
