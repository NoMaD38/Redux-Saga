import * as actionType from './actionTypes'
import { IStateEpisodes, IAction } from '../../interfaces'

const initialState = {
    episodes: []
}

export const reducerEpisodes = (state: IStateEpisodes = initialState, action: IAction) => {
    switch (action.type){
        case actionType.SET_EPISODES:
            return {...state, episodes: action.payload}
        default:
            return state
    }
}

export default reducerEpisodes