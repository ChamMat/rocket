import React, { useState } from 'react';
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
  const [posX, setPosX] = useState(
    Number(levelData.level1[0].left)
  + Number(((levelData.level1[0].width / 2)
  - (shipWidth / 2))),
  );
  const [posY, setPosY] = useState(
    Number(levelData.level1[0].bottom)
    + Number(levelData.level1[0].height),
  );
  const [vitesseX, setVitesseX] = useState(0);
  const [vitesseY, setVitesseY] = useState(0);
  const [deg, setDeg] = useState(0);
  const [destruction, setDestruction] = useState(false);
  const [angleDanger, setAngleDanger] = useState(false);
  const [vitesseXDanger, setVitesseXDanger] = useState(false);
  const [vitesseYDanger, setVitesseYDanger] = useState(false);
  const [blocksValidate, setBlockValidate] = useState([]);
  // const [gravite, setgravite] = useState(1);

  // C'est ici qu'es géré la boucle infinie.
  // eslint-disable-next-line consistent-return
  useInterval(() => {
    if (pause) {
      // A supprimer
      return false;
    }
    const newData = handleTick(
      levelData.level1,
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
      {levelData.level1.map((sol) => (
        <Sol
          key={sol.id}
          validate={blocksValidate}
          id={sol.id}
          bottom={`${sol.bottom}px`}
          left={`${sol.left}px`}
          height={`${sol.height}px`}
          width={`${sol.width}px`}
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
