import { createStore, compose, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';

import rootReducer from './rootReducer';
import { registerStore } from './storeService';

const middleWares = [thunkMiddleWare];

const enhancer =
  process.env.APP_ENV === 'dev'
    ? composeWithDevTools({})(applyMiddleware(...middleWares))
    : compose(applyMiddleware(...middleWares));

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);
  registerStore(store);

  if (process.env.APP_ENV === 'dev' && module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

  return store;
}
