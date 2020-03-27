import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInterval from 'src/function/useInterval';
import handleTick from 'src/function/handleTick';

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
  const [posY, setPosY] = useState(51);
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
    const newData = handleTick(
      posX,
      posY,
      vitesseX,
      vitesseY,
      deg,
      destruction,
      angleDanger,
      vitesseXDanger,
      vitesseYDanger,
      space,
      pause,
      left,
      right,
    );

    setPosX(newData.posX);
    setPosY(newData.posY);
    setVitesseX(newData.vitesseX);
    setVitesseY(newData.vitesseY);
    setDeg(newData.deg);
    setDestruction(newData.destruction);
    setAngleDanger(newData.angleDanger);
    setVitesseXDanger(newData.vitesseXDanger);
    setVitesseYDanger(newData.vitesseYDanger);
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
