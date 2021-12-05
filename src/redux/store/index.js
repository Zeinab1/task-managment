import { createStore , applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import allReducers from '../reducers';
import taskReducer from '../reducers/taskReducer';

import {
  composeWithDevTools
} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
// const pReducer = persistReducer(persistConfig, allReducers);
const pReducer = persistReducer(persistConfig, taskReducer);




const store = createStore(pReducer , composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { persistor, store };