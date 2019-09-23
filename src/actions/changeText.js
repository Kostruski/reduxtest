import { CHANGE_TEXT } from './types'

export const changeText = payload => dispatch => {
    dispatch({
        type: CHANGE_TEXT,
        payload: payload
    })
} 