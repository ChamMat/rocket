import React, { useState } from 'react';

import useInterval from 'src/function/useInterval';


import PanelStyled from './PanelStyled';
import Ship from '../Ship';

const Panel = ({ space, right, left}) => {
  const [posX, setPosX] = useState(445);
  const [posY, setPosY] = useState(578);
  const [vitesse, setVitesse] = useState(0);
  const [deg, setDeg] = useState(0);

  useInterval(() => {
    if (space) {
      setVitesse(vitesse + 0.03);
    }
    else {
      setVitesse(vitesse - 0.1);
    }

    if (posY >= 578 && !space) {
      setVitesse(0);
      setPosY(578);
    }
    else {
      const newPosY = posY - vitesse;
      setPosY(newPosY);
    }
  }, 20);

  return (
    <PanelStyled>
      <Ship
        posX={posX}
        posY={posY}
      />
    </PanelStyled>
  );
};

export default Panel;
