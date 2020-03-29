import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import levelData from 'src/levelData/levelData';

import useInterval from 'src/function/useInterval';
import handleTick from 'src/function/handleTick';

import Ship from 'src/components/Ship';
import Sol from 'src/components/Sol';
import Data from 'src/components/Data';
import MenuVictoire from 'src/components/MenuVictoire';

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
  const [victoire, setVictoire] = useState(false);
  const [blockAValider, setBlockAValider] = useState(1);
  const [rejouer, setRejouer] = useState(false);

  const params = useParams();
  const dataLevel = Object.entries(levelData).find((element) => element[0] === params.level);

  // C'est ici qu'es géré la boucle infinie.
  // eslint-disable-next-line consistent-return
  useInterval(() => {
    if (pause) {
      setDelay(null);
    }
    const newData = handleTick(
      dataLevel[1].blocks,
      dataLevel[1].init,
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

    // ici, on enregistre l'array qui contient la liste des blocks validés
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


    if (blockAValider === blocksValidate.length) {
      setVictoire(true);
      setDelay(null);
    }
  }, delay);

  const conditonDeVictoire = () => {
    let nbrBlockValide = 0;
    dataLevel[1].blocks.forEach((block) => {
      if (block.required) {
        nbrBlockValide += 1;
      }
    });
    return nbrBlockValide;
  };

  // Initialisation du niveau.
  useEffect(() => {
    setVictoire(false);
    setPosX(dataLevel[1].init.posX);
    setPosY(dataLevel[1].init.posY);
    setVitesseX(0);
    setVitesseY(0);
    setDeg(0);
    setDestruction(false);
    setAngleDanger(false);
    setVitesseXDanger(false);
    setVitesseYDanger(false);
    setBlockValidate([]);
    setDelay(20);
    setBlockAValider(conditonDeVictoire());
    setRejouer(false);
  }, [rejouer]);


  const handleClickRejouer = () => {
    setRejouer(true);
  };

  return (
    <PanelStyled>
      { victoire && (
        <MenuVictoire
          rejouer={handleClickRejouer}
          level={params.level}
          restart={handleClickRejouer}
        />
      )}
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
      {dataLevel[1].blocks.map((sol) => (
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
