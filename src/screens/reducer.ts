import * as actionType from './actionTypes';
import {IAction, IStateCharacters} from '../interfaces';

const initialState = {
  characters: [],
};

const reducer = (state: IStateCharacters = initialState, action: IAction) => {
  switch (action.type) {
    case actionType.SET_CHARACTERS:
      return {...state, characters: action.payload};
    default:
      return state;
  }
};

export default reducer;
