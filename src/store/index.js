import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import logMiddleware from 'middlewares/logMiddleware';

// Reducer
import rootReducer from 'reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    logMiddleware,
    // ... autres middlewares
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
