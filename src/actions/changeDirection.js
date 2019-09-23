import { CHANGE_DIRECTION } from './types'

export const changeDirection = payload => dispatch => {
    dispatch({
        type: CHANGE_DIRECTION,
        payload: payload
    })
} 