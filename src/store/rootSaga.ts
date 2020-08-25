import {fork} from 'redux-saga/effects'
import {loadCharacters} from './loadCharactersSaga'
import { loadLocations } from './loadLocationsSaga'
import { loadEpisodes } from './loadEpisodesSaga'

export function* rootSaga () {
    yield fork(loadCharacters)
    yield fork(loadLocations)
    yield fork(loadEpisodes)
}