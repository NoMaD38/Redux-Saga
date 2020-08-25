import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_CHARACTERS} from '../screens/Character/actionTypes'
import { getCharacters } from '../utils/api';
import { setCharacter } from '../screens/Character/actions';

export function* loadCharacters() {
  yield takeLatest(GET_CHARACTERS, loadCharactersFlow);
}

function* loadCharactersFlow() {
    const characters = yield call(getCharacters)
    yield put(setCharacter(characters))
}