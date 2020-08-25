import {takeLatest, call, put} from 'redux-saga/effects';
import { getEpisodes } from '../utils/api';
import { GET_EPISODES } from '../screens/Episodes/actionTypes';
import { setEpisodes } from '../screens/Episodes/actions';

export function* loadEpisodes() {
  yield takeLatest(GET_EPISODES, loadEpisodesFlow);
}

function* loadEpisodesFlow() {
    const episodes = yield call(getEpisodes)
    yield put(setEpisodes(episodes))
}