import * as actionTypes from './actionTypes'
import { IAction } from '../../interfaces'

export const getEpisodes = ():IAction => ({
    type: actionTypes.GET_EPISODES
})

export const setEpisodes = (episodes: any):IAction => ({
    type: actionTypes.SET_EPISODES,
    payload: episodes
})