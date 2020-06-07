import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
 
const pReducer = persistReducer(persistConfig, rootReducer);
 
export const store = createStore(
  pReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export const persistor = persistStore(store);


// const appReducer = (state, action) => {
//   if (action.type === 'USER_LOGOUT') {
//     storage.removeItem('persist:root')
//     state = undefined
//   }
//   return persistedReducer
// }

// const store = createStore(appReducer, enhancer)