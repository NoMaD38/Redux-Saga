import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'

import reducerCharacter from '../screens/Character/reducer';
import reducerEpisodes from '../screens/Episodes/reducer'
import reducerLocations from '../screens//Locations/reduser'


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    reducerCharacter,
    reducerEpisodes,
    reducerLocations
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

console.log(store.getState());


sagaMiddleware.run(rootSaga)

export default store;
