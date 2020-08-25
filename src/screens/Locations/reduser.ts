import * as actionType from './actionTypes'
import { IStateLocations, IAction } from "../../interfaces"

const initialState = {
    locations: []
}

const reducer = (state: IStateLocations = initialState, action: IAction) => {
    switch (action.type) {
        case actionType.SET_LOCATIONS:
            return {...state, locations: action.payload}
        default:
            return state
    }
}

export default reducer