import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import levelData from 'src/levelData/levelData';

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
  const shipWidth = 10;
  const shipHeight = 30;
  // Position initial: position du 1er block + sa largeur / 2 - largeur du vaisseau / 2
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [vitesseX, setVitesseX] = useState(0);
  const [vitesseY, setVitesseY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [destruction, setDestruction] = useState(false);
  const [angleDanger, setAngleDanger] = useState(false);
  const [vitesseXDanger, setVitesseXDanger] = useState(false);
  const [vitesseYDanger, setVitesseYDanger] = useState(false);
  const [blocksValidate, setBlockValidate] = useState([]);
  const [delay, setDelay] = useState(20);

  // C'est ici qu'es géré la boucle infinie.
  // eslint-disable-next-line consistent-return
  useInterval(() => {
    if (pause) {
      setDelay(null);
    }
    const newData = handleTick(
      levelData.level1.blocks,
      levelData.level1.init,
      shipWidth,
      shipHeight,
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
      left,
      right,
    );

    if (newData.blocksValidate && !blocksValidate.includes(newData.blocksValidate)) {
      setBlockValidate([...blocksValidate, newData.blocksValidate]);
    }
    setPosX(newData.posX);
    setPosY(newData.posY);
    setVitesseX(newData.vitesseX);
    setVitesseY(newData.vitesseY);
    setDeg(newData.deg);
    setDestruction(newData.destruction);
    setAngleDanger(newData.angleDanger);
    setVitesseXDanger(newData.vitesseXDanger);
    setVitesseYDanger(newData.vitesseYDanger);
  }, delay);

  // Initialisation du niveau.
  useEffect(() => {
    setPosX(levelData.level1.init.posX);
    setPosY(levelData.level1.init.posY);
    setVitesseX(0);
    setVitesseY(0);
    setDeg(0);
    setDestruction(false);
    setAngleDanger(false);
    setVitesseXDanger(false);
    setVitesseYDanger(false);
    setBlockValidate([]);
    setDelay(20);
  }, []);

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
      {levelData.level1.blocks.map((sol) => (
        <Sol
          key={sol.id}
          validate={blocksValidate}
          id={sol.id}
          bottom={`${sol.bottom}px`}
          left={`${sol.left}px`}
          height={`${sol.height}px`}
          width={`${sol.width}px`}
          required={sol.required}
        />
      ))}
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
