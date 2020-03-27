const handleTick = (
  blocks,
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
) => {
  const newData = {
    posX,
    posY,
    vitesseX,
    vitesseY,
    deg,
    destruction,
    angleDanger,
    vitesseXDanger,
    vitesseYDanger,
  };

  if (!destruction) {
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

    // Atterissage/collision sur le/les blocks
    blocks.forEach((block) => {
      if (posY <= (Number(block.height) + Number(block.bottom))
        && posY >= block.bottom - shipHeight
        && posX > block.left - (shipWidth / 2)
        && posX < Number(block.left) + Number(block.width) - (shipWidth / 2)
      ) {
        if (angleDanger
          || vitesseXDanger
          || vitesseYDanger
          || (Number(block.height) + Number(block.bottom) - 5 > posY + shipHeight)) {
          // Colision avec un block / atterissage raté
          newData.destruction = true;
        }
        else if (!space) {
          newData.blocksValidate = block.id;
          deplacementY = 0;
          newData.posY = (Number(block.bottom) + Number(block.height));
          deplacementX = 0;
          newDeg = (0);
        }
      }
      else {
        newData.posY = posY + deplacementY;
      }
    });

    // Gestion Collision de bordure

    if (posX < 0 || posX > 870) {
      newData.destruction = true;
    }
    if (posY < 0 || posY > 570) {
      newData.destruction = true;
    }

    // Gestion des couleurs des dangers

    if (newDeg < 10 || newDeg > 350) {
      newData.angleDanger = false;
    }
    else {
      newData.angleDanger = true;
    }

    if (vitesseY * 100 > 40 || vitesseY * 100 < -40) {
      newData.vitesseYDanger = true;
    }
    else {
      newData.vitesseYDanger = false;
    }

    if (vitesseX * 100 > 10 || vitesseX * 100 < -10) {
      newData.vitesseXDanger = true;
    }
    else {
      newData.vitesseXDanger = false;
    }

    // console.log('==================');
    // console.log('Deplacement X: ' + puissance * (Math.sin(newDeg * Math.PI / 180)));
    // console.log('Deplacement Y: ' + puissance * (Math.cos(newDeg * Math.PI / 180)));

    newData.posX = posX + deplacementX;
    newData.vitesseX = deplacementX;
    newData.vitesseY = deplacementY;
    newData.deg = newDeg;
  }

  return newData;
};

export default handleTick;
