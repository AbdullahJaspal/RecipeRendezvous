import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import middleware from './middlewares';
import {authReducer} from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, authReducer);

const store = createStore(pReducer, applyMiddleware(...middleware));

const persister = persistStore(store);

export {store, persister};
