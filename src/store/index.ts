import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'

import reducer from '../screens/reducer';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;
