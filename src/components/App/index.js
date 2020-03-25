// == Import npm
import React, { useState, useEffect, useCallback } from 'react';

import Panel from 'src/components/Panel';

// == Import
import AppStyled from './AppStyled';

// == Composant
const App = () => {
  const [space, setSpace] = useState(false);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  const handleKeyDown = useCallback((evt) => {
    switch (evt.keyCode) {
      case 32:
        setSpace(true);
        break;
      case 37:
        setLeft(true);
        break;
      case 39:
        setRight(true);
        break;
      default:
        break;
    }
  }, []);

  const handleKeyUp = useCallback((evt) => {
    switch (evt.keyCode) {
      case 32:
        setSpace(false);
        break;
      case 37:
        setLeft(false);
        break;
      case 39:
        setRight(false);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);


    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, []);

  return (
    <AppStyled>
      <Panel
        space={space}
        right={right}
        left={left}
      />
    </AppStyled>
  );
};

// == Export
export default App;
