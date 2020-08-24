import * as actionType from './actionTypes';
import {IAction} from '../interfaces';

export const getCharacter = (): IAction => ({
  type: actionType.GET_CHARACTERS,
});

export const setCharacter = (characters: any): IAction => ({
  type: actionType.SET_CHARACTERS,
  payload: characters,
});
