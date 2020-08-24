import {fork} from 'redux-saga/effects'
import {loadCharacters} from './loadSaga'

export function* rootSaga () {
    yield fork(loadCharacters)
}