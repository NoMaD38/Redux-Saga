import {takeLatest, call, put} from 'redux-saga/effects';
import { getLocations } from '../utils/api';
import { GET_LOCATIONS } from '../screens/Locations/actionTypes';
import { setLocation } from '../screens/Locations/actions';

export function* loadLocations() {
  yield takeLatest(GET_LOCATIONS, loadLocationsFlow);
}

function* loadLocationsFlow() {
    const locations = yield call(getLocations)
    yield put(setLocation(locations))
}