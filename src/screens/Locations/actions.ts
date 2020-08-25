import * as actionType from './actionTypes'
import { IAction } from "../../interfaces";

export const getLocations = (): IAction => ({
    type: actionType.GET_LOCATIONS
})

export const setLocation = (locations: any): IAction => ({
    type: actionType.SET_LOCATIONS,
    payload: locations
})